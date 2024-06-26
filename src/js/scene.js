import { PlayerCharacter } from "./character.js";

/**
 * Base class for scenes
 * @class
 * @property {HTMLElement} sceneContainer The container for the scene
 * @property {Object} sceneData The data for the scene
 * @property {string} templateId The id of template for the scene
 * @property {Function} render The compiled template
 * @method populateScene Populates the scene with the appropriate functionality
 * @method getChoiceSceneId Gets the scene id from a choice selection event
 * @method getRenderedTemplate Renders the template
 */
class Scene {
    sceneContainer = document.getElementById("scene")
    templateId = ""

    constructor(sceneData) {
        this.sceneData = sceneData;
        this.template = document.getElementById(this.templateId);
        this.render = Handlebars.compile(this.template);
    }

    /**
     * @memberof Scene
     * @returns {void}
     * @instance
     * @method getRenderedTemplate
     * @public
     */
    renderTemplate() {
        this.sceneContainer.innerHTML = this.render(this.sceneData)
    }

    /**
     * Populates the scene with the appropriate functionality
     * @memberof Scene
     * @instance
     * @method populateScene
     * @abstract
     * @returns {void}
     */
    populateScene() {
        // Base implementation, can be overridden by subclasses
        console.error('populateScene() needs to be implemented by subclasses');
    }

    /**
     * 
     * @param {Event} event 
     * @returns {number} The id to which the selected choice corresponds
     * @memberof Scene
     * @instance
     * @method getChoiceSceneId
     * @public
     */
    getChoiceSceneId(event) {
        return event.target.dataset.sceneId;
    } 
}

/**
 * Represents a narrative scene
 * @class NarrativeScene
 * @extends Scene
 * @method populateScene Populates the scene with the ability to select choices
 * @memberof NarrativeScene
 * @property {HTMLElement} sceneContainer The container for the scene
 * @property {Object} sceneData The data for the scene
 * @property {string} templateId The template for the scene
 * @method getChoiceSceneId Gets the scene id from a choice selection event
 * @method populateScene Populates the scene with the ability to select choices
 * @method getRenderedTemplate Renders the template
 */
export class NarrativeScene extends Scene {
    templateId = "narrative-scene-template"
    /**
     * Populates the scene with the ability to select choices
     * @memberof NarrativeScene
     * @instance
     * @method populateScene
     * @returns {void}
     * @override
     * @public
     */
    populateScene() {
        const choices = this.sceneContainer.querySelectorAll(".choices a");
        choices.forEach(choice => {
            choice.addEventListener("click", (event) => {
                event.preventDefault();
                loadScene(this.getChoiceSceneId(event));
            });
        });
    }
}

/**
 * Represents a character creator scene
 * @class CharacterCreatorScene
 * @extends Scene
 * @method populateScene Populates the scene with a form for generating a character
 * @method getRenderedTemplate Renders the template
 * @memberof CharacterCreatorScene
 * @property {HTMLElement} sceneContainer The container for the scene
 * @property {Object} sceneData The data for the scene
 * @property {string} templateId The template for the scene
 */
export class CharacterCreator extends Scene {
    templateId = "character-creator-template"
    /**
     * Populates the scene with the a form for generating a character
     * @memberof CharacterCreatorScene
     * @instance
     * @method populateScene
     * @returns {void}
     * @override
     * @public
     * @instance
     */
    populateScene() {
        const form = this.sceneContainer.querySelector("form");
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
}