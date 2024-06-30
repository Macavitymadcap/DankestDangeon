import { Gear } from "./gear.js";

export class Armour extends Gear {
    constructor(name, type, cost=None, weight=None, armourClass, dexMod=None, strength=None, stealth=None){
        super(name, type, cost, weight);
        this.armourClass = armourClass;
        this.dexMod = dexMod;
        this.strength = strength;
        this.stealth = stealth;
    }
}

const chainmail = new Armour(
    "chain mail",
    "Heavy Armour",
    "75 gp",
    "55 lb.",
    16,
    None,
    13,
    "disadvantage"
);

const shield = new Armour(
    "shield",
    "Shield Armour",
    "10 gp",
    "6 lb.",
    2
); 

const leather = new Armour(
    "leather",
    "Light Armour",
    "10 gp",
    "10 lb.",
    11,
    "+ Dex"
);

const mageArmour = new Armour(
    "mage armour",
    "Spell Armour",
    None,
    None,
    13,
    "+ Dex"
);