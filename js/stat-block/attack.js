import { Dice } from "../dice-box";
import { Damage } from "../stat-block";

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