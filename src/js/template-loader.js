import scenes from "./scenes.js";
import { PlayerCharacter } from "./character.js";
// import { NarrativeScene, CharacterCreator } from "./scene.js";

const CHARACTER_SHEET_TEMPLATE = document.getElementById("character-sheet-template").innerHTML;
const NARRATIVE_SCENE_TEMPLATE = document.getElementById("narrative-scene-template").innerHTML;
const CHARACTER_CREATOR_TEMPLATE = document.getElementById("character-creator-template").innerHTML;
export const CHARACTER_SHEET_CONTAINER = document.getElementById("sheet");

/**
 * Compile the character creator template
 * @param {object} scene The character-creator scene to be rendered
 * @returns {string} The rendered HTML
 */
const renderCharacterCreator = Handlebars.compile(CHARACTER_CREATOR_TEMPLATE);

/**
 * Compile a narrative scene template
 * @param {object} scene The narrative scene to be rendered
 * @returns {string} The rendered HTML
 */
const renderNarrativeScene = Handlebars.compile(NARRATIVE_SCENE_TEMPLATE);

/**
 * Render the character sheet
 * @param {object} playerCharacter The player character to render
 * @returns {string} The rendered HTML
 */
const renderCharacterSheet = Handlebars.compile(CHARACTER_SHEET_TEMPLATE);


function getSceneId(event) {
    return event.target.dataset.sceneId;
} 
/**
 * Get the rendered HTML for a scene
 * @param {object} scene The scene to render
 * @returns {string} The rendered HTML
 */
function getRenderedTemplate(scene) {
    switch (scene.type) {
        case "character-creator":
            return renderCharacterCreator(scene);
        case "narrative":
            return  renderNarrativeScene(scene);
        default:
            console.error(`Unknown scene type: ${scene.type}`);
    }
}

/**
 * Populate scene container with the character creator form
 * @param {HTMLElement} sceneContainer The conatiner to load the character creator into
 */
function populateCharacterCreator(sceneContainer) {
    const form = sceneContainer.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const characterName = formData.get("character-name");
        const characterClass = formData.get("character-class");
        const playerCharacter = PlayerCharacter.createPlayerCharacter(characterName, characterClass);
        sessionStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));
        loadCharacterSheet();
        loadScene(2);
    });
}

/**
 * Populate scene container with the narrative scene's functionality
 * @param {HTMLElement} sceneContainer The container to load the narrative scene into
 * @returns {void}
 */
function populateNarrativeScene(sceneContainer) {
    const choices = sceneContainer.querySelectorAll(".choices a");
    choices.forEach(choice => {
        choice.addEventListener("click", (event) => {
            event.preventDefault();
            loadScene(getSceneId(event));
        });
    });
}

/**
 * Populate a scene with the appropriate functionality
 * @param {HTMLElement} sceneContainer The container to load the scene into
 * @param {string} type The type of scene to load [character-creator, narrative, combat]
 */
function populateScene(sceneContainer, type) {
    switch (type) {
        case "character-creator":
            populateCharacterCreator(sceneContainer);
            break;
        case "narrative":
            populateNarrativeScene(sceneContainer);
            break;
        default:
            console.error(`Unknown scene type: ${type}`);
    }
}

/**
 * Load a scene into the scene container
 * @param {number} sceneId The id fo the scene to load
 * @returns {void} 
 */
export function loadScene(sceneId) {
    const scene = scenes[sceneId];
    const renderedScene = getRenderedTemplate(scene);
    const sceneContainer = document.getElementById("scene");
    sceneContainer.innerHTML = renderedScene;
    populateScene(sceneContainer, scene.type);
}

export function loadCharacterSheet() {
    const playerCharacter = JSON.parse(sessionStorage.getItem("playerCharacter"));
    const renderedCharacterSheet = renderCharacterSheet(playerCharacter);
    CHARACTER_SHEET_CONTAINER.innerHTML = renderedCharacterSheet;
}