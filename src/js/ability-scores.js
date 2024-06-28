/**
 * Class representing the ability scores of a character.
 * @class AbilityScores
 * @param {number} strength The character's strength score
 * @param {number} dexterity The character's dexterity score
 * @param {number} constitution The character's constitution score
 * @param {number} intelligence The character's intelligence score
 * @param {number} wisdom The character's wisdom score
 * @param {number} charisma The character's charisma score
 * @property {number} strength The character's strength score
 * @property {number} dexterity The character's dexterity score
 * @property {number} constitution The character's constitution score
 * @property {number} intelligence The character's intelligence score
 * @property {number} wisdom The character's wisdom score
 * @property {number} charisma The character's charisma score
 * @property {number} strengthModifier The character's strength modifier
 * @property {number} dexterityModifier The character's dexterity modifier
 * @property {number} constitutionModifier The character's constitution modifier
 * @property {number} intelligenceModifier The character's intelligence modifier
 * @property {number} wisdomModifier The character's wisdom modifier
 * @property {number} charismaModifier The character's charisma modifier
 * @method getModifier Returns the modifier for a given score
 * @method getModifierString Returns the modifier for a given score as a string
 * @method incrementScore Increments a score by a number
 * @method decrementScore Decrements a score by a number
 */
export class AbilityScores {

    scores = {
        strength: "strength",
        dexterity: "dexterity",
        constitution: "constitution",
        intelligence: "intelligence",
        wisdom: "wisdom",
        charisma: "charisma"
    };

    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma) {
        this.strength = strength;
        this.strengthModifier = this.getModifier(strength);
        this.strengthModifierString = this.getModifierString(this.strengthModifier);
        this.dexterity = dexterity;
        this.dexterityModifier = this.getModifier(dexterity);
        this.dexterityModifierString = this.getModifierString(this.dexterityModifier);
        this.constitution = constitution;
        this.constitutionModifier = this.getModifier(constitution);
        this.constitutionModifierString = this.getModifierString(this.constitutionModifier);
        this.intelligence = intelligence;
        this.intelligenceModifier = this.getModifier(intelligence);
        this.intelligenceModifierString = this.getModifierString(this.intelligenceModifier);
        this.wisdom = wisdom;
        this.wisdomModifier = this.getModifier(wisdom);
        this.wisdomModifierString = this.getModifierString(this.wisdomModifier);
        this.charisma = charisma;
        this.charismaModifier = this.getModifier(charisma);
        this.charismaModifierString = this.getModifierString(this.charismaModifier);
    }

    /**
     * @returns {number} The modifier for a given score
     * @memberof AbilityScores
     * @public
     * @param {number} score The score to get the modifier for
    */
    getModifier(score) {
        return Math.floor((score - 10) / 2);
    }
    /**
     * 
     * @param {number} modifier The modifier of a given ability score 
     * @returns {string} The modifier for a given score as a string
     * @memberof AbilityScores
     * @public
     */
    getModifierString(modifier) {
        if (modifier > 0) {
            return `+${modifier}`;
        } else {
            return `${modifier}`;
        }
    }

    /**
     * 
     * @param {string} score The ability score to increment 
     * @param {number} num The number to increment the ability score by
     * @memberof AbilityScores
     * @public
     * @returns {void} 
     */
    incrementScore(score, num) {
        this[score] += num;
        this[`${score}Modifier`] = this.getModifier(this[score]);
        this[`${score}ModifierString`] = this.getModifierString(this[`${score}Modifier`]);
    }

    /**
     * 
     * @param {string} score The ability score to decrement 
     * @param {number} num The number to decrement the ability score by 
     */
    decrementScore(score, num) {
        this[score] -= num;
        this[`${score}Modifier`] = this.getModifier(this[score]);
        this[`${score}ModifierString`] = this.getModifierString(this[`${score}Modifier`]);
    }
}