import Pile from './pile.js'
import Tile, { TILE_TYPE, TILE_VALUE, TILE_DRAGON_VALUE, TILE_WIND_VALUE } from './tile.js'

/* Describes how the Mahjong Wall of tiles should interact and be built */
export default class Wall extends Pile {
    constructor() {
        super()
        this.tiles = freshWall()
    }
}

function freshWall() {
    let tiles = []

    for (let i = 0; i < 4; i++) {
        TILE_TYPE.flatMap(type => {
            if (type === TILE_TYPE[3])
                TILE_WIND_VALUE.map(value => {
                    tiles.push(new Tile(type, value))
                })

            else if (type === TILE_TYPE[4]) {
                TILE_DRAGON_VALUE.map(value => {
                    tiles.push(new Tile(type, value))
                })
            }
            else {
                TILE_VALUE.map(value => {
                    // Add one Red 5 for each Non-Honor Tile Type
                    if (i === 0 && value === TILE_VALUE[4]) { tiles.push(new Tile(type, value, true)) }
                    else { tiles.push(new Tile(type, value)) }
                })
            }
        })
    }

    return tiles
}