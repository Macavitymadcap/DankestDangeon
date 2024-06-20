import { Dice } from "./dice.js";
import { Attack, Damage } from "./attack.js";

export const characterClasses = {
    fighter: {
        maximumHitPoints: 12,
        armourClass: 17,
        armourName: "chainmail and shield",
        attack: new Attack("longsword", 3, new Damage(new Dice(8, 3), "slashing")),
        inventory: ["chainmail", "shield", "longsword", "bundle of torches"]
    },
    wizard: {
        maximumHitPoints: 8,
        armourClass: 14,
        armourName: "mage armour",
        attack: new Attack("firebolt", 3, new Damage(new Dice(6), "fire")),
        inventory: ["spellbook", "component pouch", "bundle of torches"]
    },
    rogue: {
        maximumHitPoints: 10,
        armourClass: 14,
        armourName: "leather armour",
        attack: new Attack("two daggers", 3, new Damage(new Dice(4, 3, 2), "piercing")),
        inventory: ["leather armour", "two daggers", "thieves' tools", "bundle of torches"]
    }
};