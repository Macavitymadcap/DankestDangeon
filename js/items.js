class Gear {
    constructor(name, cost=None, weight=None) {
        this.name = name;
        this.cost = cost;
        this.weight = weight;
    }
}

class Armour extends Gear {
    constructor(name, cost=None, weight=None, type, armourClass, dexMod, strength, stealth=None){
        super(name, cost, weight);
        this.type = type;
        this.armourClass = armourClass;
        this.dexMod = dexMod;
        this.strength = strength;
        this.stealth = stealth;
    }
}

class Weapon extends Gear {
    constructor(name, cost=None, weight=None, type, damageDice, damageType, properties=None) {
        super(name, cost, weight);
        this.type = type;
        this.damageDice = damageDice;
        this.damageType = damageType;
        this.properties = properties;
    }
}


