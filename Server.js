import Pile from './Objects/pile.js'
import * as http from 'http'
import * as io from 'socket.io'

const httpServer = new http.Server()
const server = new io.Server(httpServer, { cors: { origin: '*' } })
httpServer.listen(8080, () => console.log('Listening on http://localhost:8080'))

const wall = new Pile()

server.on('connection', socket => {
    console.log('A user connected.')

    gameInit(socket)
    socket.emit('deal', socket.handUnicode, wall.numTiles)
    if (wall.numTiles < 14) wall = new Pile()
})

function gameInit(socket) {
    wall.shuffle()

    let hand = wall.deal(14)
    hand.sortTiles()
    socket.handUnicode = hand.getUnicode()
}