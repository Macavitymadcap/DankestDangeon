import { Roll } from "./roll.js";
/**
 * Represents 1 or more dice to be rolled with an optional modifier
 * @class Dice
 * @param {number} faces The number of faces on the dice
 * @param {number} [modifier=0] The modifier to apply to the roll
 * @param {number} [numDice=1] The number of dice to roll
 */
export class Dice {
    constructor(faces, modifier = 0, numDice = 1) {
        this.faces = faces;
        this.modifier = modifier;
        this.numDice = numDice;
        this.string = this.toString();
    }

    toString() {
        let modifierString = "";

        if (this.modifier > 0) {
            modifierString = ` + ${this.modifier}`;
        } else if (this.modifier < 0) {
            modifierString = ` - ${Math.abs(this.modifier)}`;
        }

        return `${this.numDice}d${this.faces}${modifierString}`;
    }

    /**
     * @returns {number} The result of rolling the die
     * @memberof Dice
     * @private
     */
    rollDie() {
        return Math.floor(Math.random() * this.sides) + 1;
    }

    /**
     * @returns {number[]} The results of rolling the dice
     * @memberof Dice
     * @private
     */
    rollDice() {
        let total = [];
        for (let i = 0; i < this.numDice; i++) {
            total.append(this.rollDie());
        }
        return total;
    }

    /**
     * @param {boolean} [criticalHit=false] Whether the roll is a critical hit
     * @returns {Roll} The result of the roll
     * @memberof Dice
     * @public
     */
    roll(criticalHit = false, advantage = false, disadvantage = false) {
        this.numDice = (advantage || disadvantage || criticalHit) ? this.numdice * 2 : this.numDice;

        if (criticalHit) {
            return new Roll(this.rollDice(), this.faces, this.modifier);
        } else if (advantage) {
            return new Roll(
                this.rollDice().sort((a, b) => a - b), 
                this.faces, 
                this.modifier, 
                "advantage"
            );
        } else if (disadvantage) {
            return new Roll(
                this.rollDice().sort((a, b) => b - a), 
                this.faces, 
                this.modifier, 
                "disadvantage"
            );
        }
        return new Roll(this.rollDice(), this.faces, this.modifier);
    }
}