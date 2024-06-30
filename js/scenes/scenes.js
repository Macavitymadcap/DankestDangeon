export default scenes = {
    0: {
        type: "narrative",
        title: "New Game",
        image: "cloaked-figure.webp",
        description: [
            "Well met traveller, be ye brave enough to face the Dankest of All Dangeons?",
            "This is a hyper text love letter to adventure game books of yore, where your decisions shape the story.",
            "Not only is this Dangeon Dank, it also Dangerous, and it is unlikely you will reach then end on your first run.",
            "But fear not, for you can always start again, and try a different path.",
            "So, are you ready to begin your adventure?"
        ],
        choices: [
            {
                text: "Create Character",
                sceneId: 1
            }
        ]
    },
    1: {
        type: "character-creator",
        title: "Character Creator",
        description: ["Choose from the following options to create your character:"],
        characterClasses: [
            "Fighter",
            "Rogue",
            "Wizard"
        ], 
        characterRaces: [
            "Human",
            "Elf",
            "Dwarf",
            "Halfling",
        ],
        choices: [
            {
                text: "Begin Adventure",
                sceneId: 2
            }
        ]
    },
    2: {
        type: "narrative",
        title: "The Dark Forest",
        image: "dark-forest.webp",
        description: [
            "You find yourself in a dark and eerie forest.",
            "Trees loom overhead, blocking out most of the light, and the air is thick with the smell of damp earth.", 
            "To your south and west you are enclosed by the dense forest, to the north and east you can see a faint light filtering through the trees.",
            "Which way do you want to go?"
        ],
        choices: [
            {
                text: "Go north",
                sceneId: 4
            },
            {
                text: "Go east",
                sceneId: 3
            }
        ]
    },
    3: {
        type: "narrative",
        title: "Big River",
        image: "big-river.webp",
        description: [
            "Heading east into the forest, you come across a wide river.",
            "The water is dark and murky, and you can hear the sound of rushing water.", 
            "What do you do?"
        ],
        choices: [
            {
                text: "Swim across the river",
                sceneId: 6
            },
            {
                text: "Follow the riverbank",
                sceneId: 7
            }
        ]
    },
    4: {
        type: "narrative",
        title: "As Pigs in Muck",
        image: "fucked-up-pigs.webp",
        description: [
            "As you walk north, you come across a family of pigs. The pigs at first galnce appear normal, but the more you look the odder they seem.",
            "Almost as if they were the creation of some deity that had heard of pigs but never actually seen one.", 
            "They are busy snuffling around in the undergrowth, covered in filth and oblivious to your presence.", 
            "What do you do?"
        ],
        choices: [
            {
                text: "Join the Pigs",
                sceneId: 5
            },
            {
                text: "Continue North",
                sceneId: 4
            }
        ]
    },
    5: {
        type: "narrative",
        title: "Truffle Feast",
        image: "truffle-feast.webp",
        description:[ 
            "You join the bizarre looking pigs snuffling in the undergrowth. After much searching they begin grunting and reveal truffles in the earth.", 
            "The pigs seem proper chuffed, and start gorging on the hoard of truffle. You join them, and they are delicious and nutritious - healing you of the aches of the road..", 
            "You add a handful of the tasty truffles to your inventory and make your goodbyes to the pigs."
        ],
        choices: [
            {
                text: "Continue north",
                sceneId: 2
            }
        ],
        items: [
            "handful of truffles"
        ]
    },
    6: {
        type: "narrative",
        title: "River Swim",
        description: [
            "You decide to swim across the river.", 
            "The water is cold and fast-flowing, but you manage to make it to the other side.", 
            "You are soaking wet, but you feel refreshed and invigorated."
        ],
        choices: [
            {
                text: "Follow the riverbank",
                sceneId: 7
            }
        ]
    },
    7: {
        type: "narrative",
        title: "Riverbank",
        description: [
            "You follow the riverbank for a while, the sound of the water is soothing.", 
            "You can see a small boat moored up ahead.", 
            "What do you do?"
        ],
        choices: [
            {
                text: "Take the boat",
                sceneId: 8
            },
            {
                text: "Continue along the riverbank",
                sceneId: 9
            }
        ]
    },
    8: {
        type: "narrative",
        title: "Boat Ride",
        description: [
            "You take the boat and row across the river.", 
            "The water is calm and the boat is easy to control.", 
            "You reach the other side and tie up the boat."
        ],
        choices: [
            {
                text: "Continue along the riverbank",
                sceneId: 9
            }
        ]
    },
    9: {
        type: "narrative",
        title: "Riverbank",
        description: [
            "You continue along the riverbank, the sun is starting to set.", 
            "You can see a small clearing up ahead.", 
            "What do you do?"
        ],
        choices: [
            {
                text: "Rest for the night",
                sceneId: 10
            },
            {
                text: "Continue along the riverbank",
                sceneId: 11
            }
        ]
    },
};
