import { Dice } from "./dice.js";
import { characterClasses } from "./character-classes.js";

/**
 * Represents a character
 * @class Character
 * @param {string} name The character's name
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
    constructor(name, maximumHitPoints, armourClass, armourName, attack) {
        this.name = name;
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
    constructor(name, maximumHitPoints, armourClass, armourName, attack, characterClass, inventory = []) {
        super(name, maximumHitPoints, armourClass, armourName, attack);
        this.characterClass = characterClass
        this.inventory = inventory;
        this.inventoryString = this.getInventoryString();
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
    static createPlayerCharacter(name, characterClass) {
        const fighter = characterClasses.fighter;
        const wizard = characterClasses.wizard;
        const rogue = characterClasses.rogue;
        switch (characterClass) {
            case "Fighter":
                return new PlayerCharacter(
                    name, 
                    fighter.maximumHitPoints, 
                    fighter.armourClass, 
                    fighter.armourName, 
                    fighter.attack, 
                    characterClass, 
                    fighter.inventory
                );
            
            case "Wizard":
                return new PlayerCharacter(
                    name, 
                    wizard.maximumHitPoints, 
                    wizard.armourClass, 
                    wizard.armourName, 
                    wizard.attack, 
                    characterClass, 
                    wizard.inventory
                );
            
            case "Rogue":
                return new PlayerCharacter(
                    name, 
                    rogue.maximumHitPoints, 
                    rogue.armourClass, 
                    rogue.armourName, 
                    rogue.attack, 
                    characterClass, 
                    rogue.inventory
                );
        
            default:
                console.error(`Invalid character class: ${characterClass}`);
                break;
        }
    }
}