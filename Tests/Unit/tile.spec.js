import Tile, { GetRandomTile } from '../../Objects/tile';

describe('Able to create a new Tile', () => {
    test(' - Able to create a new Terminal Man Tile', () => {
        const tile = new Tile('Man', 1)
        expect(tile.type).toBe('Man')
        expect(tile.value).toBe(1)
        expect(tile.isRed).toBeFalsy()
        expect(tile.isTerminal).toBeTruthy()
        expect(tile.isHonor).toBeFalsy()
        expect(tile.orderBy).toBe(1)
        expect(tile.unicode).toBe('&#126983;')
    })

    test(' - Able to create a North Wind Tile', () => {
        const tile = new Tile('Wind', 'North')
        expect(tile.type).toBe('Wind')
        expect(tile.value).toBe('North')
        expect(tile.isRed).toBeFalsy()
        expect(tile.isTerminal).toBeFalsy()
        expect(tile.isHonor).toBeTruthy()
        expect(tile.orderBy).toBe(34)
        expect(tile.unicode).toBe('&#126979;')
    })
})

describe('Cannot create an invalid Tile', () => {
    test(' - Cannot use an invalid Type', () => {
        expect(() => {
            new Tile('Not a Type', 1)
        }).toThrow('Type needs to be Pin, Sou, Man, Wind or Dragon.')
    })

    test(' - Cannot use an invalid Value', () => {
        expect(() => {
            new Tile('Pin', 10)
        }).toThrow('Value needs to be 1-9 or a Wind or Dragon Tile.')

        expect(() => {
            new Tile('Pin', 'Green')
        }).toThrow('Non-Honor Tiles must have numbered values.')

        expect(() => {
            new Tile('Sou', 'North')
        }).toThrow('Non-Honor Tiles must have numbered values.')
    })

    test(' - Cannot give Honor Tiles invalid Values', () => {
        expect(() => {
            new Tile('Wind', 'White')
        }).toThrow('Wind Tiles must be either North, South, East or West.')

        expect(() => {
            new Tile('Wind', 1)
        }).toThrow('Wind Tiles must be either North, South, East or West.')

        expect(() => {
            new Tile('Dragon', 'North')
        }).toThrow('Dragon Tiles must be either Green, Red or White.')

        expect(() => {
            new Tile('Dragon', 1)
        }).toThrow('Dragon Tiles must be either Green, Red or White.')
    })

    test(' - Cannot make a tile that is not a 5 a Red Tile', () => {
        expect(() => {
            new Tile('Pin', 7, true)
        }).toThrow('A Tile cannot be Red if it is not a value of 5.')
    })
})

describe('Color of Tiles is consistent', () => {
    test(' - Odd Sou Tiles are green', () => {
        const tile = new Tile('Sou', 1)
        expect(tile.isGreen).toBeTruthy()
    })

    test(' - Even Sou Tiles are not green', () => {
        const tile = new Tile('Sou', 2)
        expect(tile.isGreen).toBeFalsy()
    })

    test(' - Green Dragon Tile is green', () => {
        const tile = new Tile('Dragon', 'Green')
        expect(tile.isGreen).toBeTruthy()
    })

    test(' - Red Sou 5 is not green, but is red', () => {
        const tile = new Tile('Sou', 5, true)
        expect(tile.isGreen).toBeFalsy()
        expect(tile.isRed).toBeTruthy()
    })
})

describe('The Functions should work as expected', () => {
    test(' - Can flip a shown tile', () => {
        const tile = new Tile('Pin', 1)
        tile.flip()
        expect(tile.isHidden).toBeTruthy()
        expect(tile.unicode).toBe('&#127019;')
    })

    test(' - Can flip a hidden tile', () => {
        const tile = new Tile('Pin', 1, false, true)
        tile.flip()
        expect(tile.isHidden).toBeFalsy()
        expect(tile.unicode).toBe('&#127001;')
    })

    test(' - Get Random Tile works', () => {
        expect(() => {
            GetRandomTile()
        }).not.toThrow()
    })
})
