import { Dice } from "./dice.js";
import { Attack, Damage } from "./attack.js";
import { AbilityScores } from "./ability-scores.js";

export class CharacterClass {
    constructor(name, abilityScores, maximumHitPoints, armourClass, armourName, attack, inventory) {
        this.name = name;
        this.abilityScores = abilityScores;
        this.maximumHitPoints = maximumHitPoints;
        this.armourClass = armourClass;
        this.armourName = armourName;
        this.attack = attack;
        this.inventory = inventory;
    }
}

export const fighter = new CharacterClass(
    "Fighter",
    new AbilityScores(15, 10, 14, 8, 12, 13),
    12,
    17,
    "chainmail and shield",
    new Attack("longsword", 3, new Damage(new Dice(8, 3), "slashing")),
    ["chainmail", "shield", "longsword", "bundle of torches"]
);

export const wizard = new CharacterClass(
    "Wizard",
    new AbilityScores(8, 14, 12, 15, 10, 13),
    8,
    14,
    "mage armour",
    new Attack("firebolt", 3, new Damage(new Dice(6), "fire")),
    ["spellbook", "component pouch", "bundle of torches"]
);

export const rogue = new CharacterClass(
    "Rogue",
    new AbilityScores(12, 15, 13, 10, 14, 8),
    10,
    14,
    "leather armour",
    new Attack("two daggers", 3, new Damage(new Dice(4, 3, 2), "piercing")),
    ["leather armour", "two daggers", "thieves' tools", "bundle of torches"]
);