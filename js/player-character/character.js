import { CharacterClass } from "./character-class.js";
import { Race } from "./character-race.js";
import { Skills } from "./skills.js";
import { Gear } from "../items/index.js";


/**
 * Represents a player character
 * @class PlayerCharacter
 * @extends Character
 * @param {string} name The character's name
 * @param {CharacterClass} characterClass The character's class
 * @param {Race} race The character's race
 * @property {AbilityScores} abilityScores The character's ability scores
 * @property {number} maximumHitPoints The character's maximum hit points
 * @property {number} armourClass The character's armour class
 * @property {string} armourName The character's armour name
 * @property {Attack[]} attacks The character's attacks
 * @property {Gear[]} [inventory=[]] The character's inventory
 * @method heal Heals the character
 * @method removeItem Removes an item from the character's inventory
 * @method addItem Adds an item to the character's inventory
 * @method createPlayerCharacter Creates a new player character
 */
export class PlayerCharacter {
    constructor(name, characterClass, race) {
        this.name = name;
        this.class = characterClass;
        this.race = race;
        this.proficiencyBonus = 2;

        this.abilityScores = this.class.abilityScores;
        for (const [key, value] of Object.entries(this.race.abilityScoreModifiers)) {
            this.abilityScores[key] += value;
        }
        this.maximumHitPoints = this.class.hitDie + this.abilityScores.constitutionModifier;
        this.currentHitPoints = this.maximumHitPoints;

        this.armourClass = this.class.armourClass;
        this.armourName = this.class.armourName;

        this.attacks = [];
        this.attacks += this.class.attack;

        this.inventory =["bundle of torches", "5 days' rations"];
        this.inventory += this.class.inventory;

        this.size = this.race.size;

        this.skills = new Skills(this.abilityScores, this.proficiencyBonus, this.class.expertiseSkills);

        this.proficiencies = [];
        this.proficiencies += this.race.proficiencies;
        this.proficiencies += this.class.proficiencies;

        this.languages = ["Common"];
        this.languages += this.race.languages;

        this.traits = [];
        this.traits += this.race.traits;
        this.traits += this.class.traits;

    }

    /**
     * Heals the character up to their maximumHitPoints
     * @method heal
     * @memberof PlayerCharacter
     * @param {Roll} healRoll The roll to heal the character
     * @instance
     * @public
     * @returns {void}
     */
    heal(healRoll) {
        this.currentHitPoints = Math.min(this.maximumHitPoints, this.currentHitPoints + healRoll.total);
    }

    /**
     * Removes an item from the character's inventory if they have it
     * @param {string} itemName
     * @method removeItem
     * @memberof PlayerCharacter
     * @instance
     * @public
     * @returns {void}
     */
    removeItem(itemName) {
        const hasItem = this.inventory.find(item => item.name === itemName);
        if (hasItem) {
            this.inventory = this.inventory.filter(i => i !== item);
        }
    }

    /**
     * Add an item to the character's inventory 
     * @param {Gear} item
     * @method addItem
     * @memberof PlayerCharacter
     * @public
     * @instance
     * @returns {void}
     */
    addItem(item) {
        this.inventory.push(item);
    }
}