import Pile from '../../Objects/pile';
import Tile, { GetRandomTile } from '../../Objects/tile';

let tiles = []

beforeEach(() => {
    tiles = []
    for (let i = 0; i < 100; i++) {
        tiles.push(new GetRandomTile())
    }
});

describe('Able to create a New Pile', () => {
    test(' - Able to create a New Empty Pile', () => {
        const emptyPile = new Pile()
        expect(emptyPile.numTiles).toBe(0)
        expect(emptyPile.isHidden).toBeFalsy()
    })

    test(' - Able to create a New Pile', () => {
        const pile = new Pile(tiles)
        expect(pile.numTiles).toBe(100)
        expect(pile.isHidden).toBeFalsy()
    })

    test(' - Able to create a New Hidden Pile', () => {
        const pile = new Pile(tiles, true)
        expect(pile.isHidden).toBeTruthy()
        expect(pile.tiles[0].isHidden).toBeTruthy()
        expect(pile.tiles[0].unicode).toBe('&#127019;')
    })
})

describe('Functions should work as intended', () => {
    test(' - Can Flip a Pile', () => {
        const pile = new Pile(tiles)
        pile.flip()
        expect(pile.tiles[0].isHidden).toBeTruthy()
        expect(pile.tiles[0].unicode).toBe('&#127019;')
    })

    test(' - Can Flip a Hidden Pile', () => {
        const pile = new Pile(tiles, true)
        pile.flip()
        expect(pile.tiles[0].unicode).not.toBe('&#127019;')
    })

    test(' - Can Shuffle a Pile', () => {
        const pile1 = new Pile(tiles)
        const tile1 = new Tile(pile1.tiles[0].type, pile1.tiles[0].value, pile1.tiles[0].isRed)
        pile1.shuffle()
        expect(pile1.tiles[0]).not.toBe(tile1)
    })

    test(' - Can Sort a Pile', () => {
        const pile = new Pile(tiles)
        pile.sort()
        expect(pile.tiles[0].orderBy).toBeLessThanOrEqual(pile.tiles[1].orderBy)
        expect(pile.tiles[99].orderBy).toBeGreaterThanOrEqual(pile.tiles[98].orderBy)
    })

    test(' - Can Sort Red Fives Correctly', () => {
        const tile1 = new Tile('Pin', 5)
        const tile2 = new Tile('Pin', 5)
        const tile3 = new Tile('Pin', 5)
        const tile4 = new Tile('Pin', 5, true)
        const tile5 = new Tile('Pin', 4)
        const pile = new Pile([tile1, tile2, tile3, tile4, tile5])
        pile.sort()
        expect(pile.tiles[1]).toBe(tile4)
    })

    test(' - Can Pop a Pile', () => {
        const pile = new Pile(tiles)
        const tile = pile.pop()

        expect(pile.numTiles).toBe(99)
        expect(tile).not.toBeNull()
    })

    test(' - Can Push a Tile to a Pile', () => {
        const pile = new Pile(tiles)
        const tile = new Tile('Pin', 1)
        pile.push(tile)
        expect(pile.numTiles).toBe(101)
        expect(pile.tiles[100].type).toBe('Pin')
        expect(pile.tiles[100].value).toBe(1)
    })

    test(' - Can Push a Popped Tile from one Pile to another', () => {
        const pile = new Pile(tiles)
        const newPile = new Pile()
        expect(() => {
            newPile.push(pile.pop())
        }).not.toThrow()
        expect(newPile.numTiles).toBe(1)
    })

    test(' - Can Deal a number of Tiles from a Pile', () => {
        const pile = new Pile(tiles)
        const newPile = new Pile()
        pile.deal(10)
        expect(pile.numTiles).toBe(90)
        newPile.tiles = pile.deal(10)
        expect(newPile.numTiles).toBe(10)
    })
})