import * as http from 'http'
import * as io from 'socket.io'
import Wall from './Objects/wall.js'
import numeral from 'numeral'

const httpServer = new http.Server()
const server = new io.Server(httpServer, { cors: { origin: '*' } })
httpServer.listen(8080, () => console.log('Listening on http://localhost:8080'))


let wall = new Wall()

server.on('connection', socket => {
    console.log('A user connected.')

    if (wall.numTiles === 0) wall = new Wall()
    gameInit(socket)
    socket.emit('deal', socket.data.hand.getUnicode())
})

setInterval(() => {
    const { rss, heapTotal } = process.memoryUsage()
    server.emit('debugging', wall.numTiles, numeral(rss).format('0.0 ib'), numeral(heapTotal).format('0.0 ib'))
})

function gameInit(socket) {
    wall.shuffle()
    socket.data.hand = wall.deal(14)
    socket.data.hand.sortPile()
}