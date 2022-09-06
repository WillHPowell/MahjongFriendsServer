import Tile, { GetRandomTile } from "../../Objects/tile";

describe("Able to create a new Tile", () => {
    test(" - Able to create a new Terminal Man Tile", () => {
        const tile = new Tile("Man", 1)
        expect(tile.type).toBe("Man")
        expect(tile.value).toBe(1)
        expect(tile.isRed).toBeFalsy()
        expect(tile.isTerminal).toBeTruthy()
        expect(tile.isHonor).toBeFalsy()
        expect(tile.orderBy).toBe(1)
        expect(tile.getUnicode()).toBe("&#126983;")
    })

    test(" - Able to create a North Wind Tile", () => {
        const tile = new Tile("Wind", "North")
        expect(tile.type).toBe("Wind")
        expect(tile.value).toBe("North")
        expect(tile.isRed).toBeFalsy()
        expect(tile.isTerminal).toBeFalsy()
        expect(tile.isHonor).toBeTruthy()
        expect(tile.orderBy).toBe(34)
        expect(tile.getUnicode()).toBe("&#126979;")
    })
})

describe("Cannot create an invalid Tile", () => {
    test(" - Cannot use an invalid Type", () => {
        expect(() => {
            new Tile("Not a Type", 1)
        }).toThrow()
    })

    test(" - Cannot use an invalid Value", () => {
        expect(() => {
            new Tile("Pin", 10)
        }).toThrow()
    })

    test(" - Cannot give Honor Tiles invalid Values", () => {
        expect(() => {
            new Tile("Wind", "White")
        }).toThrow()

        expect(() => {
            new Tile("Wind", 1)
        }).toThrow()

        expect(() => {
            new Tile("Dragon", "North")
        }).toThrow()

        expect(() => {
            new Tile("Dragon", 1)
        }).toThrow()
    })
})

describe("Color of Tiles is consistent", () => {
    test(" - Odd Sou Tiles are green", () => {
        const tile = new Tile("Sou", 1)
        expect(tile.isGreen).toBeTruthy()
    })

    test(" - Even Sou Tiles are not green", () => {
        const tile = new Tile("Sou", 2)
        expect(tile.isGreen).toBeFalsy()
    })

    test(" - Green Dragon Tile is green", () => {
        const tile = new Tile("Dragon", "Green")
        expect(tile.isGreen).toBeTruthy()
    })

    test(" - Red Sou 5 is not green, but is red", () => {
        const tile = new Tile("Sou", 5, true)
        expect(tile.isGreen).toBeFalsy()
        expect(tile.isRed).toBeTruthy()
    })
})

test("Get Random Tile works", () => {
    expect(() => {
        GetRandomTile()
    }).not.toThrow()
})
