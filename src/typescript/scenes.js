"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scenes = {
    1: {
        type: "narrative",
        title: "The Dark Forest",
        description: "You find yourself in a dark and eerie forest. The trees loom overhead, blocking out most of the light. You can hear the sound of rustling leaves and the occasional snap of a twig. Which way do you want to go?",
        choices: [
            {
                text: "Go north",
                link: 2
            },
            {
                text: "Go east",
                link: 3
            }
        ]
    },
    2: {
        type: "narrative",
        title: "Truffle Snuffling!",
        description: "As you walk north, you come across a family of truffle pigs. They are busy snuffling around in the undergrowth, looking for truffles. What do you do?",
        choices: [
            {
                text: "Join the truffle pigs",
                link: 4
            },
            {
                text: "Continue north",
                link: 5
            }
        ]
    },
    3: {
        type: "narrative",
        title: "Big River",
        description: "Heading east into the forest, you come across a wide river. The water is dark and murky, and you can hear the sound of rushing water. What do you do?",
        choices: [
            {
                text: "Swim across the river",
                link: 6
            },
            {
                text: "Follow the riverbank",
                link: 7
            }
        ]
    },
    4: {
        type: "narrative",
        title: "Truffle Feast",
        description: "You join the truffle pigs in their search for truffles. After a while, you find a huge truffle and the pigs invite you to share it with them. You add a gropup of tasty truffles to your inventory.",
        choices: [
            {
                text: "Continue north",
                link: 5
            }
        ]
    },
    5: {
        type: "narrative",
        title: "The Clearing",
        description: "You continue north and come to a clearing in the forest. The sun is shining and you can see a path leading off to the west, otherwise the path continues northward. What do you do?",
        choices: [
            {
                text: "Follow the path to the west",
                link: 8
            },
            {
                text: "Push on northh",
                link: 9
            }
        ]
    },
    6: {
        type: "narrative",
        title: "Swim the River",
        description: "You decide to swim across the river. The water is cold and fast-flowing, but you manage to make it to the other side. You are now wet and cold, but you have made it across the river and can continue eastwards",
        choices: [
            {
                text: "Continue east",
                link: 10
            }
        ]
    },
    7: {
        type: "narrative",
        title: "Follow the Riverbank",
        description: "You decide to follow the riverbank. The path is narrow and winding, but you make good progress. After a while, you come to a bridge that crosses the river. What do you do?",
        choices: [
            {
                text: "Cross the bridge",
                link: 11
            },
            {
                text: "Continue following the riverbank",
                link: 12
            }
        ]
    },
    8: {
        type: "narrative",
        title: "The Old Ruins",
        description: "You follow the path to the west and come to a set of old ruins. The ruins are overgrown with ivy and moss, and you can see that they have been abandoned for many years. What do you do?",
        choices: [
            {
                text: "Explore the ruins",
                link: 13
            },
            {
                text: "Continue west",
                link: 14
            }
        ]
    },
    9: {
        type: "narrative",
        title: "The Hidden Cave",
        description: "You push on northwards and come to a hidden cave. The cave is dark and foreboding, but you can see a faint light coming from within. What do you do?",
        choices: [
            {
                text: "Enter the cave",
                link: 15
            },
            {
                text: "Continue north",
                link: 16
            }
        ]
    },
    10: {
        type: "narrative",
        title: "The Old Mill",
        description: "You continue eastwards and come to an old mill. The mill is in a state of disrepair, but you can see that it was once a grand building. What do you do?",
        choices: [
            {
                text: "Explore the mill",
                link: 17
            },
            {
                text: "Continue east",
                link: 18
            }
        ]
    },
    11: {
        type: "narrative",
        title: "The Troll Bridge",
        description: "You cross the bridge and come to a troll guarding the path. The troll is large and ugly, with a club in one hand and a bag of gold in the other. What do you do?",
        choices: [
            {
                text: "Fight the troll",
                link: 19
            },
            {
                text: "Bribe the troll",
                link: 20
            }
        ]
    },
    12: {
        type: "narrative",
        title: "The Waterfall",
        description: "You continue following the riverbank and come to a waterfall. The waterfall is huge and powerful, with water cascading down into a pool below. What do you do?",
        choices: [
            {
                text: "Swim in the pool",
                link: 21
            },
            {
                text: "Climb the waterfall",
                link: 22
            }
        ]
    },
    13: {
        type: "narrative",
        title: "The Hidden Treasure",
        description: "You explore the ruins and find a hidden treasure. The treasure is a chest full of gold and jewels, and you can see that it has been hidden here for many years. What do you do?",
        choices: [
            {
                text: "Take the treasure",
                link: 23
            },
            {
                text: "Leave the treasure",
                link: 24
            }
        ]
    },
    14: {
        type: "narrative",
        title: "The Old Forest",
        description: "You continue westwards and come to an old forest. The trees are tall and ancient, and you can see that the forest is full of wildlife. What do you do?",
        choices: [
            {
                text: "Explore the forest",
                link: 25
            },
            {
                text: "Continue west",
                link: 26
            }
        ]
    },
    15: {
        type: "narrative",
        title: "The Dragon\"s Lair",
        description: "You enter the cave and come face to face with a dragon. The dragon is huge and fearsome, with scales as black as night and eyes that burn with fire. What do you do?",
        choices: [
            {
                text: "Fight the dragon",
                link: 27
            },
            {
                text: "Befriend the dragon",
                link: 28
            }
        ]
    },
    16: {
        type: "narrative",
        title: "The Hidden Valley",
        description: "You continue northwards and come to a hidden valley. The valley is lush and green, with flowers blooming and birds singing. What do you do?",
        choices: [
            {
                text: "Explore the valley",
                link: 29
            },
            {
                text: "Continue north",
                link: 30
            }
        ]
    },
    17: {
        type: "narrative",
        title: "The Ghostly Miller",
        description: "You explore the mill and come face to face with the ghost of the miller. The miller is pale and translucent, with a sad look in his eyes. What do you do?",
        choices: [
            {
                text: "Talk to the miller",
                link: 31
            },
            {
                text: "Leave the mill",
                link: 32
            }
        ]
    },
    18: {
        type: "narrative",
        title: "The Old Castle",
        description: "You continue eastwards and come to an old castle. The castle is huge and imposing, with turrets and battlements that reach up to the sky. What do you do?",
        choices: [
            {
                text: "Explore the castle",
                link: 33
            },
            {
                text: "Continue east",
                link: 34
            }
        ]
    },
    19: {
        type: "narrative",
        title: "The Troll\"s Club",
        description: "You fight the troll and manage to defeat him. The troll drops his club and you can see that it is made of solid gold. What do you do?",
        choices: [
            {
                text: "Take the club",
                link: 35
            },
            {
                text: "Leave the club",
                link: 36
            }
        ]
    },
    20: {
        type: "narrative",
        title: "The Troll\"s Gold",
        description: "You bribe the troll and manage to pass safely. The troll takes your gold and lets you continue on your way. What do you do?",
        choices: [
            {
                text: "Continue on your way",
                link: 37
            }
        ]
    },
    21: {
        type: "narrative",
        title: "The Waterfall Pool",
        description: "You swim in the pool and find a hidden cave behind the waterfall. The cave is full of treasure and you can see that it has been hidden here for many years. What do you do?",
        choices: [
            {
                text: "Take the treasure",
                link: 38
            },
            {
                text: "Leave the treasure",
                link: 39
            }
        ]
    },
    22: {
        type: "narrative",
        title: "The Waterfall Climb",
        description: "You climb the waterfall and find a hidden cave at the top. After walking through it for a while, you come across an old dusty chest covered in webs and moss. What do you do?",
        choices: [
            {
                text: "Open the chest",
                link: 40
            },
            {
                text: "Leave the cave and continue west",
                link: 14
            }
        ]
    },
    23: {
        type: "narrative",
        title: "Cave Treasure",
        description: "The chest opens with a creak and you find a jewel encrusted sword. You take the sword and add it to your inventory. What do you do?",
        choices: [
            {
                text: "Continue west",
                link: 14
            }
        ]
    },
    24: {
        type: "narrative",
        title: "Leave the Treasure",
        description: "You decide to leave the treasure where it is and continue on your way. You feel that it is best not to disturb the hidden treasure. What do you do?",
        choices: [
            {
                text: "Continue west",
                link: 14
            }
        ]
    },
    25: {
        type: "narrative",
        title: "The Clearing",
        description: "You explore the forest and find a hidden path that leads to a clearing. The clearing is full of flowers and butterflies, and you can see that it is a peaceful place. What do you do?",
        choices: [
            {
                text: "Explore the clearing",
                link: 41
            },
            {
                text: "Continue west",
                link: 26
            }
        ]
    },
    26: {
        type: "narrative",
        title: "The Old Forest",
        description: "You continue westwards and come to a hidden glade. The glade is full of sunlight and birdsong, and you can see that it is a beautiful place. What do you do?",
        choices: [
            {
                text: "Explore the glade",
                link: 42
            },
            {
                text: "Continue west",
                link: 43
            }
        ]
    },
    27: {
        type: "narrative",
        title: "The Dragon's Hoard",
        description: "You fight the dragon and manage to defeat him. The dragon drops his hoard of treasure and you can see that it is vast and glittering. What do you do?",
        choices: [
            {
                text: "Take the treasure",
                link: 44
            },
            {
                text: "Leave the treasure",
                link: 45
            }
        ]
    },
    28: {
        type: "narrative",
        title: "The Dragon's Friend",
        description: "You befriend the dragon and he offers to take you on a ride through the skies. You climb onto his back and soar into the air, feeling the wind in your hair and the sun on your face. What do you do?",
        choices: [
            {
                text: "Soar through the skies",
                link: 46
            },
            {
                text: "Return to the cave",
                link: 15
            }
        ]
    },
    29: {
        type: "narrative",
        title: "The Hidden Valley",
        description: "You explore the valley and find a hidden cave. The cave is full of treasure and you can see that it has been hidden here for many years. What do you do?",
        choices: [
            {
                text: "Take the treasure",
                link: 47
            },
            {
                text: "Leave the treasure",
                link: 48
            }
        ]
    },
    30: {
        type: "narrative",
        title: "The Hidden Valley",
        description: "You continue northwards and come to a hidden valley. The valley is lush and green, with flowers blooming and birds singing. What do you do?",
        choices: [
            {
                text: "Explore the valley",
                link: 49
            },
            {
                text: "Continue north",
                link: 50
            }
        ]
    },
    31: {
        type: "narrative",
        title: "The Ghostly Miller",
        description: "You talk to the miller and he tells you his story. The miller was once an adventurer like you, but he met a tragic end in the forest. What do you do?",
        choices: [
            {
                text: "Ask the miller about his death",
                link: 51
            },
            {
                text: "Leave the mill",
                link: 32
            }
        ]
    },
    32: {
        type: "narrative",
        title: "Leaving the Mill",
        description: "You decide to leave the mill and continue on your way. You feel that it is best not to disturb the ghostly miller. What do you do?",
        choices: [
            {
                text: "Continue east",
                link: 34
            }
        ]
    },
    33: {
        type: "narrative",
        title: "The Old Castle",
        description: "You explore the castle and find a hidden chamber. The chamber is full of treasure and you can see that it has been hidden here for many years. What do you do?",
        choices: [
            {
                text: "Take the treasure",
                link: 52
            },
            {
                text: "Leave the treasure",
                link: 53
            }
        ]
    },
};
exports.default = scenes;
