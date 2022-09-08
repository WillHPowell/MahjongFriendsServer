import Pile from "./pile.js"

/* Describes a Mahjong Hand */
export default class Hand extends Pile {
    constructor (tiles) {
        super()
        this.maxHandSize = 14
        if (tiles.length > this.maxHandSize) {
            throw new Error(`Hands have a max size of ${this.maxHandSize} tiles.`)
        } else {
            this.tiles = tiles
        }
    }
}