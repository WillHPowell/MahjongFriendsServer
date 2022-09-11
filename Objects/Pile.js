/* Describes how multiple Tiles should act */
export default class Pile {
    constructor(tiles = [], isHidden = false) {
        this.tiles = tiles
        this.isHidden = isHidden


        // If the tiles are not Hidden, but the Pile is, Flip all of the tiles provided
        if (this.isHidden) {
            for (let i = 0; i < this.numTiles; i++) {
                if (this.tiles[i].isHidden !== this.isHidden) this.tiles[i].flip()
            }
        }
    }

    get numTiles() {
        return this.tiles.length
    }

    // Flips a between Hidden and Not Hidden
    flip() {
        this.isHidden = !this.isHidden
        for (let i = 0; i < this.numTiles; i++) {
            this.tiles[i].flip()
        }
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
        return this.tiles.splice(0, numToDeal)
    }

    sort() {
        this.tiles.sort((a, b) => {
            if (a.orderBy !== b.orderBy) return a.orderBy - b.orderBy
            else return a.isRed ? -1 : 1
        })
    }
}