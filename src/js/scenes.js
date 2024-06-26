const scenes = {
    0: {
        type: "narrative",
        title: "New Game",
        image: "cloaked-figure.webp",
        description: [
            "Well met traveller, welcome to the Dangeon crawl!",
            "This is a hypertext love-letter to adventure game books, written using D&D 5th edition OL mechanics.",
            "To begin your crawl around the Dangeon, click the button below to start a new game"
        ],
        choices: [
            {
                text: "New Game",
                sceneId: 1
            }
        ]
    },
    1: {
        type: "character-creator",
        title: "Character Creator",
        description: ["Choose from the following options to creae your character:"],
        characterClasses: [
            "Fighter",
            "Rogue",
            "Wizard"
        ], 
        choices: [
            {
                text: "Create Character",
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
            "The trees loom overhead, blocking out most of the light.", 
            "You can hear the sound of rustling leaves and the occasional snap of a twig.",
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
                sceneId: 4
            }
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

export default scenes;