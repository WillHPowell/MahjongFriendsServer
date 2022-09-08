import Pile from "./pile.js"

/* Describes a Mahjong Hand */
export default class Hand extends Pile {
    constructor () {
        super()
        this.tiles = []
        this.maxHandSize = 14
    }
}