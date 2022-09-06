export const TILE_TYPE = ["Pin", "Sou", "Man", "Wind", "Dragon"]
export const TILE_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const TILE_WIND_VALUE = ["East", "South", "West", "North"]
export const TILE_DRAGON_VALUE = ["Red", "Green", "White"]

export const TYPE_ORDER_BY_MAP = {
    "Man": 0,
    "Sou": 10,
    "Pin": 20,
    "Wind": 30,
    "Dragon": 35
}

export const HONOR_ORDER_BY_MAP = {
    "East": 1,
    "South": 2,
    "West": 3,
    "North": 4,
    "Red": 1,
    "Green": 2,
    "White": 3
}

export default class Tile {
    constructor (type, value, isRed = false) {
        if (!TILE_TYPE.includes(type)) {
            throw new Error("Type needs to be Pin, Sou, Man, Wind or Dragon.")
        } else {
            this.type = type
        }
        if (!TILE_VALUE.includes(value) && !TILE_WIND_VALUE.includes(value) && !TILE_DRAGON_VALUE.includes(value)) {
            throw new Error("Value needs to be 1-9 or a Wind or Dragon Tile.")
        } else {
            this.value = value
        }
        if (isRed && value !== 5) {
            throw new Error("A Tile cannot be Red if it isn't a value of 5.")
        } else {
            this.isRed = isRed
        }

        
        if ([TILE_TYPE[0], TILE_TYPE[1], TILE_TYPE[2]].includes(type) && isNaN(value)) {
            throw new Error("Non-Honor Tiles must have numbered values.")
        } else if (type === TILE_TYPE[3] && !TILE_WIND_VALUE.includes(value)) {
            throw new Error("Wind Tiles must be either North, South, East or West.")
        } else if (type === TILE_TYPE[4] && !TILE_DRAGON_VALUE.includes(value)) {
            throw new Error("Dragon Tiles must be either Green, Red or White.")
        }
    }

    // Is Green if it is an Odd Sou Tile, or the Green Dragon
    get isGreen () {
        return ((this.type === TILE_TYPE[1] && this.value % 2 === 1 && !this.isRed) || (this.type === TILE_TYPE[4] && this.value === "Green") )
    }
    
    // Is an Honor Tile if it is a Wind or Dragon Tile
    get isHonor () {
        return (this.type === TILE_TYPE[3] || this.type === TILE_TYPE[4])
    }

    // Is a Terminal Tile if it is a 1 or a 9
    get isTerminal () {
        return (this.value === 1 || this.value === 9)
    }

    get orderBy () {
        return TYPE_ORDER_BY_MAP[this.type] + (this.isHonor ? HONOR_ORDER_BY_MAP[this.value] : this.value)
    }

    getUnicode () {
        if (this.type === TILE_TYPE[3] && this.value === TILE_WIND_VALUE[0]) { return "&#126976;" }
        else if (this.type === TILE_TYPE[3] && this.value === TILE_WIND_VALUE[1]) { return "&#126977;" }
        else if (this.type === TILE_TYPE[3] && this.value === TILE_WIND_VALUE[2]) { return "&#126978;" }
        else if (this.type === TILE_TYPE[3] && this.value === TILE_WIND_VALUE[3]) { return "&#126979;" }
        else if (this.type === TILE_TYPE[4] && this.value === TILE_DRAGON_VALUE[0]) { return "&#126980;" }
        else if (this.type === TILE_TYPE[4] && this.value === TILE_DRAGON_VALUE[1]) { return "&#126981;" }
        else if (this.type === TILE_TYPE[4] && this.value === TILE_DRAGON_VALUE[2]) { return "&#126982;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[0]) { return "&#126983;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[1]) { return "&#126984;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[2]) { return "&#126985;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[3]) { return "&#126986;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[4]) { return "&#126987;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[5]) { return "&#126988;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[6]) { return "&#126989;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[7]) { return "&#126990;" }
        else if (this.type === TILE_TYPE[2] && this.value === TILE_VALUE[8]) { return "&#126991;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[0]) { return "&#126992;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[1]) { return "&#126993;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[2]) { return "&#126994;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[3]) { return "&#126995;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[4]) { return "&#126996;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[5]) { return "&#126997;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[6]) { return "&#126998;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[7]) { return "&#126999;" }
        else if (this.type === TILE_TYPE[1] && this.value === TILE_VALUE[8]) { return "&#127000;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[0]) { return "&#127001;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[1]) { return "&#127002;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[2]) { return "&#127003;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[3]) { return "&#127004;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[4]) { return "&#127005;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[5]) { return "&#127006;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[6]) { return "&#127007;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[7]) { return "&#127008;" }
        else if (this.type === TILE_TYPE[0] && this.value === TILE_VALUE[8]) { return "&#127009;" }
    }
}

export function GetRandomTile () {
    const tileType = TILE_TYPE[Math.floor(Math.random(0, 4))]
    let tileValue
    let isRed
    if ([TILE_TYPE[0], TILE_TYPE[1], TILE_TYPE[2]].includes(tileType)) {
        tileValue = TILE_VALUE[Math.floor(Math.random(0, 10))]
    } else if (tileType === TILE_TYPE[3]) {
        tileValue = TILE_WIND_VALUE[Math.floor(Math.random(0, 5))]
    } else {
        tileValue = TILE_DRAGON_VALUE[Math.floor(Math.random(0, 4))]
    }

    if (!isNaN(tileValue) && tileValue === 5) {
        isRed = Math.random() > 0.5
    }

    return new Tile(tileType, tileValue, isRed)
}