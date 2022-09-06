import Tile, { TILE_TYPE, TILE_VALUE, TILE_DRAGON_VALUE, TILE_WIND_VALUE } from "./Tile.js"

export default class Pile {
    constructor(isFreshWall = true) {
        if (isFreshWall) this.tiles = freshWall()
        else this.tiles = []
    }

    get numTiles() {
        return this.tiles.length
    }

    shuffle() {
        for (let i = this.numTiles - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.tiles[newIndex]
            this.tiles[newIndex] = this.tiles[i]
            this.tiles[i] = oldValue
        }
    }

    pop() {
        return this.tiles.shift()
    }

    push(tile) {
        this.tiles.push(tile)
    }

    deal(numToDeal) {
        return new Pile(this.tiles.splice(0, numToDeal))
    }

    sortTiles() {
        this.tiles.sort((a, b) => {
            return b.orderBy - a.orderBy
        })
    }

    getUnicode() {
        const counter = this.numTiles
        let unicode = this.tiles.pop().getUnicode()
        for (let i = 1; i < counter; i++) {
            unicode += this.tiles.pop().getUnicode()
        }
        return unicode
    }
}

function freshWall() {
    let tiles = []

    for (let i = 0; i < 4; i++) {
        TILE_TYPE.flatMap(type => {
            if (type === "Wind")
                TILE_WIND_VALUE.map(value => {
                    tiles.push(new Tile(type, value))
                })

            else if (type === "Dragon") {
                TILE_DRAGON_VALUE.map(value => {
                    tiles.push(new Tile(type, value))
                })
            }
            else {
                TILE_VALUE.map(value => {
                    // Add one Red 5 for each Non-Terminal Tile Type
                    if (i === 0 && value === 5) { tiles.push(new Tile(type, value, true)) }
                    else { tiles.push(new Tile(type, value)) }
                })
            }
        })
    }

    return tiles
}