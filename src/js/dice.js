/**
 * Represents a dice roll
 * @class Roll
 * @param {number[]} dice The dice rolled (e.g. [2, 6] for 2d6)
 * @param {number} faces The number of faces on the dice
 * @param {number} modifier The modifier to apply to the roll
 * @param {string} [advantageDisadvantage="none"] The type of advantage/disadvantage to apply to the roll
 * @property {number} diceSum The sum of the dice rolled
 * @property {number} total The total of the roll (diceSum + modifier)
 */
export class Roll {
    constructor(dice, faces, modifier, advantageDisadvantage = "none") {
        this.dice = dice;
        this.faces = faces;
        this.modifier = modifier;
        this.advantageDisadvantage = advantageDisadvantage;
        this.diceSum = this.dice.reduce((a, b) => a + b, 0);
        this.total = this.diceSum + this.modifier;
        this.string = this.toString();
    }

    /**
     * @returns {number} The total of the dice roll
     * @memberof Roll
     * @public
     */
    isCriticalHit() {
        if (this.advantageDisadvantage === "disadvantage") {
            return this.dice[1] == this.faces;
        }
        return this.dice[0] == this.faces;
    }

    /**
     * @returns {string} A string representation of the roll (e.g. "12 (2d6 + 6)")
     * @memberof Roll
     * @public
     */
    toString() {
        const diceString = this.dice.length == 1 ? `${this.dice[0]}` : `(${this.dice.join(" + ")})`;
        let modifierString = "";

        if (this.modifier > 0) {
            modifierString = ` + ${this.modifier}`;
        } else if (this.modifier < 0) {
            modifierString = ` - ${Math.abs(this.modifier)}`;
        }
        return `${total} (${diceString}${this.modifier})`;
    }

}

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

        return `${this.numDice > 1 ? this.numDice : ""}d${this.faces}${modifierString}`;
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
    roll(criticalHit = false) {
        if (criticalHit) {
            return new Roll(this.rollDice().concat(this.rollDice()), this.faces, this.modifier);
        }
        return new Roll(this.rollDice(), this.faces, this.modifier);
    }
}