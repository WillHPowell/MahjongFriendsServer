const TYPE_ORDER_BY_MAP = {
    "Man": 0,
    "Sou": 10,
    "Pin": 20,
    "Wind": 30,
    "Dragon": 35
}

const HONOR_ORDER_BY_MAP = {
    "East": 1,
    "South": 2,
    "West": 3,
    "North": 4,
    "Red": 1,
    "Green": 2,
    "White": 3
}

export default class Tile {
    constructor (type, value, isRed) {
        this.type = type
        this.value = value

        // If not explicitly defined as Red, then it is not Red
        this.isRed = isRed || false
    }

    // Is Green if it is an Odd Sou tile, or the Green Dragon
    get isGreen () {
        return ((this.type === "Sou" && this.value % 2 === 1 && !this.isRed) || (this.type === "Dragon" && this.value === "Green") )
    }
    
    // Is an Honor tile if it is a Wind or Dragon tile
    get isHonor () {
        return (this.type === "Wind" || this.type === "Dragon")
    }

    // Is a Terminal tile if it is a 1 or a 9
    get isTerminal () {
        return (this.value === 1 || this.value === 9)
    }

    get orderBy () {
        return TYPE_ORDER_BY_MAP[this.type] + (this.isHonor ? HONOR_ORDER_BY_MAP[this.value] : this.value)
    }

    getUnicode() {
        if (this.type === "Wind" && this.value === "East") { return "&#126976;" }
        else if (this.type === "Wind" && this.value === "South") { return "&#126977;" }
        else if (this.type === "Wind" && this.value === "West") { return "&#126978;" }
        else if (this.type === "Wind" && this.value === "North") { return "&#126979;" }
        else if (this.type === "Dragon" && this.value === "Red") { return "&#126980;" }
        else if (this.type === "Dragon" && this.value === "Green") { return "&#126981;" }
        else if (this.type === "Dragon" && this.value === "White") { return "&#126982;" }
        else if (this.type === "Man" && this.value === 1) { return "&#126983;" }
        else if (this.type === "Man" && this.value === 2) { return "&#126984;" }
        else if (this.type === "Man" && this.value === 3) { return "&#126985;" }
        else if (this.type === "Man" && this.value === 4) { return "&#126986;" }
        else if (this.type === "Man" && this.value === 5) { return "&#126987;" }
        else if (this.type === "Man" && this.value === 6) { return "&#126988;" }
        else if (this.type === "Man" && this.value === 7) { return "&#126989;" }
        else if (this.type === "Man" && this.value === 8) { return "&#126990;" }
        else if (this.type === "Man" && this.value === 9) { return "&#126991;" }
        else if (this.type === "Sou" && this.value === 1) { return "&#126992;" }
        else if (this.type === "Sou" && this.value === 2) { return "&#126993;" }
        else if (this.type === "Sou" && this.value === 3) { return "&#126994;" }
        else if (this.type === "Sou" && this.value === 4) { return "&#126995;" }
        else if (this.type === "Sou" && this.value === 5) { return "&#126996;" }
        else if (this.type === "Sou" && this.value === 6) { return "&#126997;" }
        else if (this.type === "Sou" && this.value === 7) { return "&#126998;" }
        else if (this.type === "Sou" && this.value === 8) { return "&#126999;" }
        else if (this.type === "Sou" && this.value === 9) { return "&#127000;" }
        else if (this.type === "Pin" && this.value === 1) { return "&#127001;" }
        else if (this.type === "Pin" && this.value === 2) { return "&#127002;" }
        else if (this.type === "Pin" && this.value === 3) { return "&#127003;" }
        else if (this.type === "Pin" && this.value === 4) { return "&#127004;" }
        else if (this.type === "Pin" && this.value === 5) { return "&#127005;" }
        else if (this.type === "Pin" && this.value === 6) { return "&#127006;" }
        else if (this.type === "Pin" && this.value === 7) { return "&#127007;" }
        else if (this.type === "Pin" && this.value === 8) { return "&#127008;" }
        else if (this.type === "Pin" && this.value === 9) { return "&#127009;" }
    }
}