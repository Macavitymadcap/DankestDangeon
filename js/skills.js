import { Dice, Roll } from "./dice.js";
import { AbilityScores } from "./ability-scores.js";


class Skill {
    constructor(name, ability, modifier = 0, proficiencyBonus = 0, expertise=false) {
        this.name = name;
        this.ability = ability;
        this.modifier = modifier;
        this.proficiencyBonus = proficiencyBonus;
        this.expertise = expertise;
        this.bonus = this.calculateBonus();
        this.dice = new Dice(20, this.bonus);
    }

    calculateBonus() {
        return this.abilityModifier + this.proficiencyBonus * (this.expertise ? 2 : 1);
    }

    rollCheck(advantage=false, disadvantage=false) {
        if (advantage && disadvantage) {
            throw new Error("Cannot have both advantage and disadvantage");
        } else if (advantage) {
            return this.dice.roll(advantage=true);
        } else if (disadvantage) {
            this.dice = new Dice(20, this.abilityModifier, -2);
        }
        return ;
    }
}
/**
 * Represents a character's skill proficiencies
 * 
 */
export class Skills {
    constructor(abilityScores, proficiencyBonus, expertiseSkills = []) {
        this.acrobatics = new Skill("Acrobatics", abilityScores.dexterity, proficiencyBonus, expertiseSkills.includes("Acrobatics"));
        this.animalHandling = new Skill("Animal Handling", abilityScores.wisdom, proficiencyBonus, expertiseSkills.includes("Animal Handling"));
        this.arcana = new Skill("Arcana", abilityScores.intelligence, proficiencyBonus, expertiseSkills.includes("Arcana"));
        this.athletics = new Skill("Athletics", abilityScores.strength, proficiencyBonus, expertiseSkills.includes("Athletics"));
        this.deception = new Skill("Deception", abilityScores.charisma, proficiencyBonus, expertiseSkills.includes("Deception"));
        this.history = new Skill("History", abilityScores.intelligence, proficiencyBonus, expertiseSkills.includes("History"));
        this.insight = new Skill("Insight", abilityScores.wisdom, proficiencyBonus, expertiseSkills.includes("Insight"));
        this.intimidation = new Skill("Intimidation", abilityScores.charisma, proficiencyBonus, expertiseSkills.includes("Intimidation"));
        this.investigation = new Skill("Investigation", abilityScores.intelligence, proficiencyBonus, expertiseSkills.includes("Investigation"));
        this.medicine = new Skill("Medicine", abilityScores.wisdom, proficiencyBonus, expertiseSkills.includes("Medicine"));
        this.nature = new Skill("Nature", abilityScores.intelligence, proficiencyBonus, expertiseSkills.includes("Nature"));
        this.perception = new Skill("Perception", abilityScores.wisdom, proficiencyBonus, expertiseSkills.includes("Perception"));
        this.performance = new Skill("Performance", abilityScores.charisma, proficiencyBonus, expertiseSkills.includes("Performance"));
        this.persuasion = new Skill("Persuasion", abilityScores.charisma, proficiencyBonus, expertiseSkills.includes("Persuasion"));
        this.religion = new Skill("Religion", abilityScores.intelligence, proficiencyBonus, expertiseSkills.includes("Religion"));
        this.sleightOfHand = new Skill("Sleight of Hand", abilityScores.dexterity, proficiencyBonus, expertiseSkills.includes("Sleight of Hand"));
        this.stealth = new Skill("Stealth", abilityScores.dexterity, proficiencyBonus, expertiseSkills.includes("Stealth"));
        this.survival = new Skill("Survival", abilityScores.wisdom, proficiencyBonus, expertiseSkills.includes("Survival"));
    }
}