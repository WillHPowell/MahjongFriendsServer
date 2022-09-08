import Pile from '../../Objects/pile';
import Tile from '../../Objects/tile';

describe('Able to create a new Pile', () => {
    test(' - Able to create a new Empty Pile', () => {
        const tiles = new Tile('Pin', 1)
        const emptyPile = new Pile([tiles])
        expect(emptyPile.numTiles).toBe(1)
    })
})