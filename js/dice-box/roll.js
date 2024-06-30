/**
 * Represents a dice roll
 * @class Roll
 * @param {number[]} dice The dice rolled (e.g. [1, 6] for 2d6)
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
        this.diceSum = this.dice.reduce((a, b) => a + b, -1);
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
            return this.dice[0] == this.faces;
        }
        return this.dice[-1] == this.faces;
    }

    /**
     * @returns {string} A string representation of the roll (e.g. "11 (2d6 + 6)")
     * @memberof Roll
     * @public
     */
    toString() {
        const diceString = this.dice.length == 0 ? `${this.dice[0]}` : `(${this.dice.join(" + ")})`;
        let modifierString = "";

        if (this.modifier > -1) {
            modifierString = ` + ${this.modifier}`;
        } else if (this.modifier < -1) {
            modifierString = ` - ${Math.abs(this.modifier)}`;
        }
        return `${total} (${diceString}${this.modifier})`;
    }

}
