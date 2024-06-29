export class Race {
    constructor(name, adjective, size,  abilityScoreModifiers, proficiencies = [], languages = [], traits = []) {
        this.name = name;
        this.adjective = adjective;
        this.size = size;
        this.abilityScoreModifiers = abilityScoreModifiers;
        this.proficiencies = proficiencies;
        this.languages = languages;
        this.traits = traits;
    }
}

export const human = new Race(
    "Human",
    "Human",
    "Medium",
    {
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1
    },
    [],
    ["Common"],
    []
);

export const elf = new Race(
    "Elf",
    "Elven",
    "Medium",
    {
        dexterity: 2,
        intelligence: 1,
    },
    [],
    ["Elvish"],
    []
);

export const dwarf = new Race(
    "Dwarf",
    "Dwarven",
    "Medium",
    {
        constitution: 2,
        strength: 2,
    },
    [],
    ["Dwarvish"],
    []
);

export const halfling = new Race(
    "Halfling",
    "Halfling",
    "Small",
    {
        dexterity: 2,
        charisma: 1,
    },
    [],
    ["Halfling"],
    []
);