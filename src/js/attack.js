import { Dice } from "./dice.js";

/**
 * Represents a Damage roll
 * @class Damage
 * @param {Dice} dice The dice for the damage roll
 * @param {string} type The type of damage
 * @property {Dice} dice The dice for the damage roll
 * @property {string} type The type of damage
 * @property {string} string The string representation of the damage roll
 * @method toString Returns the string representation of the damage roll
 * @method roll Rolls the damage
 */
export class Damage {
    constructor(dice, type) {
        this.dice = dice;
        this.type = type;
        this.string = this.toString();
    }

    /**
     * @returns {string} The string representation of the damage roll
     * @memberof Damage
     * @private
     * @instance
     * @method toString
     */
    toString() {
        return `${this.dice.string} ${this.type}`;
    }

    /**
     * @param {boolean} [criticalHit=false] Whether the damage roll is a critical hit
     * @returns {number} The result of the damage roll
     * @memberof Damage
     * @public
     * @instance
     * @method roll
     */
    roll(criticalHit = false) {
        return this.dice.roll(criticalHit);
    }
}

/**
 * Represents an Attack
 * @class Attack
 * @param {string} name The name of the attack
 * @param {number} toHitBonus The bonus to hit
 * @param {Damage} damage The damage roll
 * @property {string} name The name of the attack
 * @property {number} toHitBonus The bonus to hit
 * @property {Damage} damage The damage roll
 * @property {number} d20 The number of faces on the d20
 * @property {string} string The string representation of the attack
 * @method toString Returns the string representation of the attack
 * @method rollToHit Rolls to hit
 * @method rollDamage Rolls the damage
 */
export class Attack {
    constructor(name, toHitBonus, damage) {
        this.name = name;
        this.toHitBonus = toHitBonus;
        this.damage = damage;
        this.d20 = 20;
        this.string = this.toString();
    }

    /**
     * @returns {string} The string representation of the attack
     * @memberof Attack
     * @private
     * @instance
     * @method toString
     */
    toString() {
        return `${this.name} +${this.toHitBonus} to hit, ${this.damage.dice.string} ${this.damage.type} damage`;
    }

    /**
     * @param {string} [advantageDisadvantage="none"] Whether the roll has advantage, disadvantage or neither
     * @returns {Roll} The result of the to hit roll
     * @memberof Attack
     * @public
     * @instance
     * @method rollToHit
     */
    rollToHit(advantageDisadvantage = "none") {
        let dice;
        if (advantageDisadvantage === "advantage" || advantageDisadvantage === "disadvantage") {
            dice = Dice(this.d20, this.toHitBonus, 2);
        } else {
            dice = Dice(this.d20, this.toHitBonus);
        }
        
        return dice.roll();
    }

    /**
     * 
     * @param {boolean} [criticalHit=False] Whether the roll is a critical hit
     * @returns {Roll} The result of the damage roll
     * @memberof Attack
     * @public
     * @instance
     * @method rollDamage
     */
    rollDamage(criticalHit = false) {
        return this.damage.roll(criticalHit);
    }
}