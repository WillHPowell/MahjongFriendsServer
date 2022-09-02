import Tile from "../../Objects/tile";

test('create a new 1 non-red Pin Tile', () => {
    const tile = new Tile("Pin", 1)
    expect(tile.type).toBe('Pin')
    expect(tile.value).toBe(1)
    expect(tile.isRed).toBe(false)
})