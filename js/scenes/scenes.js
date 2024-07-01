export const scenes = {
    0: {
        type: "narrative",
        title: "New Game",
        description: [
            "Well met traveller. This is a hyper text love letter to adventure game books of yore, where YOU are the hero (or what passes for one these days), who dcides the fate of the story.",
            "You will fight vicious monsters, converse with bizzare characters and solve fiendish puzzles in a fantasy (sorry, Dantasy) world of my own creation.",
            "Mechanically the game is based on Dungeons and Dragons 5th edition, but with a simplified ruleset and a focus on narrative and exploration.",
            "You start your quest by creating your character, the hero of our tale who will face all the dangers of this, the Dankest of Dangeons.",
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
        title: "The Morning After",
        description: [
           "You awaken, and the mere act of coming to consciousness starts a dull throbbing in your head, which crescendos to rapid-fire pusles of pain as you prise your eyes apart.",  
           "The world is a carousel of blurred shapes, dull colours and muffled sounds. Gradually it slows, and the vague impressions coalesce into something you can work with.",
           "The bed your are in is (mercifully) comfortable, and you lie in it fully clothed reeking of booze. The wider view around you is blocked out by the figure of a halfling woman who leans over you.",
           "\"Morning flower,\" she says, her voice a warm burr. \"How's your head?\"",
        ],
        choices: [
            {
                text: "I've had no complaints",
                sceneId: 3
            },
            {
                text: "I feel like a dragon shat in my head",
                sceneId: 4
            }
        ]
    },
    3: {
        type: "narrative",
        title: "The Night Before",
        description: [
            "She chuckles. \"Glad to see my beer hasn't has damaged that wit of yours.\" she says, getting down with the aid of a wooden step ladder which she pushes back under the bed.",
            "Recollections of the night before filtering into your memory. Yesterday you graduated from the Adventurer's Academy, and to celebrate your status as a full licensed hero you headed to The Stumbling Scholar, a tavern just about in your price range.",
            "Cakes and ale led to wine and laughter; wine and laughter led to shots and shots led to a room for the night because you couldn't quite master the trick of walking with out falling over.",
            "The halfing woman, you remember, is the pub's landlady Jillian Fearnfield. Once an adventurer herself, she retired some years back and with all the treasure she had gained on her travels bought this place.",
            "You look to her and see a smile on her face.",
            "\"Well flower, seeing as your brain's working, there's a little matter I need to discuss with you.\""
        ],
        choices: [
            {
                text: "What is it?",
                sceneId: 5
            }
        ]
    },
    4: {
        type: "narrative",
        title: "The Night Before", 
        description: [
            "She chuckles. \"I'll bet you do, you drank a dragon's sufficiency of beer.\", she says, getting down with the aid of a wooden step ladder which she pushes back under the bed.",
            "Recollections of the night before filtering into your memory. Yesterday you graduated from the Adventurer's Academy, and to celebrate your status as a full licensed hero you headed to The Stumbling Scholar, a tavern just about in your price range.",
            "Cakes and ale led to wine and laughter; wine and laughter led to shots and shots led to a room for the night because you couldn't quite master the trick of walking without bumping into things and falling over.",
            "The halfing woman, you remember, is the pub's landlady Jillian Fearnfield. Once an adventurer herself, she retired some years back and with all the treasure she had gained on her travels bought this place.",
            "\"Which leads me to a little matter I need to discuss with you flower.\""
        ],
        choices: [
            {
                text: "What is it?",
                sceneId: 5
            }
        ]
    }
};
