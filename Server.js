import * as http from 'http'
import * as io from 'socket.io'
import Wall from './Objects/wall.js'
import Hand from './Objects/hand.js'
import numeral from 'numeral'

const httpServer = new http.Server()
const server = new io.Server(httpServer, { cors: { origin: '*' } })
httpServer.listen(8080, () => console.log('Listening on http://localhost:8080'))


let wall = new Wall()

server.on('connection', socket => {
    console.log('A user connected.')

    gameInit(socket)
    socket.emit('deal', [socket.data.handNorth, socket.data.handSouth, socket.data.handEast, socket.data.handWest])
    wall = new Wall()
})

setInterval(() => {
    const { rss, heapTotal } = process.memoryUsage()
    server.emit('debugging', wall.numTiles, numeral(rss).format('0.0 ib'), numeral(heapTotal).format('0.0 ib'))
})

function gameInit(socket) {
    wall.shuffle()
    socket.data.handNorth = new Hand(wall.deal(14))
    socket.data.handSouth = new Hand(wall.deal(14))
    socket.data.handEast = new Hand(wall.deal(14))
    socket.data.handWest = new Hand(wall.deal(14))
    socket.data.handNorth.sort()
    socket.data.handSouth.sort()
    socket.data.handEast.sort()
    socket.data.handWest.sort()
    // socket.data.handSouth.flip()
    // socket.data.handEast.flip()
    // socket.data.handWest.flip()
}