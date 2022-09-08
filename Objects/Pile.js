/* Describes how multiple Tiles should act */
export default class Pile {
    constructor(tiles, isHidden = false) {
        this.tiles = tiles
        this.isHidden = isHidden
    }

    get numTiles() {
        return this.tiles.length
    }

    // Flips a between Hidden and Not Hidden
    flipPile () {
        this.isHidden = !this.isHidden
        for (let i = 0; i < this.numTiles; i++) {
            this.tiles[i].flipTile()
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
        return new Pile(this.tiles.splice(0, numToDeal))
    }

    sortPile() {
        this.tiles.sort((a, b) => {
            return a.orderBy - b.orderBy
        })
    }

    getUnicode() {
        let unicode = ''

        if (this.numTiles > 0) {
            for (let i = 1; i < this.numTiles; i++) {
                unicode += this.tiles[i].getUnicode()
            }
        }

        return unicode
    }
}