export class Gear {
    constructor(name, type, cost=null, weight=null) {
        this.type = type;
        this.name = name;
        this.cost = cost;
        this.weight = weight;
    }
};

export const torch = new Gear("torch","Adventuring Gear", "1 cp", "1 lb.");
export const ration = new Gear("ration", "Adventuring Gear", "5 sp", "2 lb.");
