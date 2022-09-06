import Pile from "../../Objects/pile";

describe("Able to create a new Pile", () => {
    test(" - Able to create a new Fresh Wall", () => {
        const pile = new Pile()
        expect(pile.numTiles).toBe(136)
    })

    test(" - Able to create a new Empty Pile", () => {
        const emptyPile = new Pile(false)
        expect(emptyPile.numTiles).toBe(0)
    })
})