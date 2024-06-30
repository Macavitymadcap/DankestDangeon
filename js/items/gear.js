import { Dice } from "./dice-box/dice.js";

export class Gear {
    constructor(name, type, cost=None, weight=None) {
        this.type = type;
        this.name = name;
        this.cost = cost;
        this.weight = weight;
    }
};

const torch = new Gear("torch","Adventuring Gear", "1 cp", "1 lb.");
const ration = new Gear("ration", "Adventuring Gear", "5 sp", "2 lb.");
