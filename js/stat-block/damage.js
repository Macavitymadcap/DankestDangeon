import { Dice } from "../dice-boxs";

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