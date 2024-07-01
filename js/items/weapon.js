import { Dice } from "../dice-box/index.js";
import { Gear } from "./gear.js";

export class Weapon extends Gear {
    constructor(name, cost=None, weight=null, type, damageDice, damageType, properties=None, range=null) {
        super(name, cost, weight);
        this.type = type;
        this.damageDice = damageDice;
        this.damageType = damageType;
        this.properties = properties;
        this.range = range;
    }
};

const longsword = new Weapon(
    "longsword",
    "Martial Melee Weapon",
    "15 gp", 
    "3 lb.", 
    new Dice(8), 
    "slashing", 
    ["versatile"]
);

const dagger = new Weapon(
    "dagger", 
    "Simple welee Weapon",
    "2 gp", 
    "1 lb.", 
    new Dice(4), 
    "piercing",
    ["finesse", "light", "thrown"],
    "20/60 ft."
);