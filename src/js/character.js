import { Dice } from "./dice.js";
import { fighter, wizard, rogue } from "./character-class.js";
import { AbilityScores } from "./ability-scores.js";
import { human, elf, dwarf, halfling } from "./character-race.js";

/**
 * Represents a character
 * @class Character
 * @param {string} name The character's name
 * @param {AbilityScores} abilityScores The character's ability scores
 * @param {number} maximumHitPoints The character's maximum hit points
 * @param {number} armourClass The character's armour class
 * @param {string} armourName The character's armour name
 * @param {Attack} attack The character's attack
 * @property {string} name The character's name
 * @property {number} maximumHitPoints The character's maximum hit points
 * @property {number} currentHitPoints The character's current hit points
 * @property {number} armourClass The character's armour class
 * @property {string} armourName The character's armour name
 * @property {Attack} attack The character's attack
 * @method isDead Whether the character is dead
 */
class Character {
    constructor(name, abilityScores, maximumHitPoints, armourClass, armourName, attack) {
        this.name = name;
        this.abilityScores = abilityScores;
        this.maximumHitPoints = maximumHitPoints;
        this.currentHitPoints = maximumHitPoints;
        this.armourClass = armourClass;
        this.armourName = armourName;
        this.attack = attack;
    }

    /**
     * @returns {boolean} Whether the character is dead
     * @method isDead
     * @memberof Character
     * @instance
     * @public
     */
    isDead() {
        return this.currentHitPoints <= 0;
    }
}

/**
 * Represents a player character
 * @class PlayerCharacter
 * @extends Character
 * @param {string} name The character's name
 * @param {AbilityScores} abilityScores The character's ability scores
 * @param {number} maximumHitPoints The character's maximum hit points
 * @param {number} armourClass The character's armour class
 * @param {string} armourName The character's armour name
 * @param {Attack} attack The character's attack
 * @param {string} characterClass The character's class
 * @param {string[]} [inventory=[]] The character's inventory
 * @property {string[]} inventory The character's inventory
 * @property {string} inventoryString The character's inventory as a string
 * @method heal Heals the character
 * @method removeItem Removes an item from the character's inventory
 * @method addItem Adds an item to the character's inventory
 * @method getInventoryString Gets the character's inventory as a string
 * @method createPlayerCharacter Creates a new player character
 */
export class PlayerCharacter extends Character {
    constructor(name, abilityScores,  maximumHitPoints, armourClass, armourName, attack, characterClass, inventory = []) {
        super(name, abilityScores, maximumHitPoints, armourClass, armourName, attack);
        this.class = characterClass
        this.inventory = inventory;
        this.inventoryString = this.getInventoryString();
        this.size = "Medium";
        this.race = "Human";
        this.raceAdjective = "Human";
        this.proficiencies = [];
        this.languages = ["Common"];
        this.traits = [];

    }

    /**
     * Heals the character up to their maximumHitPoints
     * @method heal
     * @memberof PlayerCharacter
     * @instance
     * @public
     * @returns {void}
     */
    heal() {
        const healRoll = new Dice(4, 2, 2).roll();
        this.currentHitPoints = Math.min(this.maximumHitPoints, this.currentHitPoints + healRoll.total);
    }

    /**
     * Removes an item from the character's inventory if they have it
     * @param {string} item 
     * @method removeItem
     * @memberof PlayerCharacter
     * @instance
     * @public
     * @returns {void}
     */
    removeItem(item) {
        const hasItem = this.inventory.find(i => i === item);
        if (hasItem) {
            this.inventory = this.inventory.filter(i => i !== item);
        }
    }

    /**
     * Add an item to the character's inventory 
     * @param {string} item
     * @method addItem
     * @memberof PlayerCharacter
     * @public
     * @instance
     * @returns {void}
     */
    addItem(item) {
        this.inventory.push(item);
    }

    /**
     * @returns {string} The character's inventory as a string
     */
    getInventoryString() {
        return this.inventory.join(", ");
    }

    /**
     * Creates a new player character
     * @param {string} name The character's name
     * @param {string} characterClass The character's class
     * @method createPlayerCharacter
     * @memberof PlayerCharacter
     * @static
     * @returns {PlayerCharacter} The new player character
     */
    static createPlayerCharacter(name, characterClass, race) {
        let character;
        switch (characterClass) {
            case "Fighter":
                character = new PlayerCharacter(
                    name, 
                    fighter.abilityScores,
                    fighter.maximumHitPoints, 
                    fighter.armourClass, 
                    fighter.armourName, 
                    fighter.attack, 
                    fighter.name, 
                    fighter.inventory
                );
                break;
            
            case "Wizard":
                character = new PlayerCharacter(
                    name,
                    wizard.abilityScores,
                    wizard.maximumHitPoints, 
                    wizard.armourClass, 
                    wizard.armourName, 
                    wizard.attack, 
                    wizard.name, 
                    wizard.inventory
                );
                break;
            
            case "Rogue":
                character = new PlayerCharacter(
                    name,
                    rogue.abilityScores,
                    rogue.maximumHitPoints, 
                    rogue.armourClass, 
                    rogue.armourName, 
                    rogue.attack, 
                    rogue.name, 
                    rogue.inventory
                );
                break
        
            default:
                console.error(`Invalid character class: ${characterClass}`);
                break;
        }

        let playerRace;

        switch (race) {
            case "Human":
                playerRace = human;
                break;
                
            case "Elf":
                playerRace = elf;
                break;

            case "Dwarf":
                playerRace = dwarf;
                break;

            case "Halfling":
                playerRace = halfling
                break;

            default:
                console.error(`Invalid race ${race}`);
                break;
        }

        character.race = playerRace.name;
        character.raceAdjective = playerRace.nameAdjective;
        character.size = playerRace.size;
        character.languages += playerRace.languages;
        character.traits += playerRace.traits;
        character.proficiencies += playerRace.proficiencies;
        for (const [key, value] of Object.entries(playerRace.abilityScoreModifiers)) {
            character.abilityScores[key] += value;
        }
        return character;
    }
}