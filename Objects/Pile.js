import Tile from "./Tile.js"

const TILE_TYPE = ["Pin", "Sou", "Man", "Wind", "Dragon"]
const TILE_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const TILE_WIND_VALUE = ["East", "South", "West", "North"]
const TILE_DRAGON_VALUE = ["Red", "Green", "White"]

export default class Pile {
    constructor(tiles = freshPile()) {
        this.tiles = tiles
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

function freshPile() {
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
                    // Add one set of Red 5s
                    if (i === 0 && value === 5) { tiles.push(new Tile(type, value, true)) }
                    else { tiles.push(new Tile(type, value)) }
                })
            }
        })
    }

    return tiles
}