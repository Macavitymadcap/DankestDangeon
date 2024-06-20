"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scenes_1 = __importDefault(require("./scenes"));
const handlebars_1 = require("handlebars");
const narrativeSceneTemplate = (0, handlebars_1.compile)(document.getElementById("narrative-scene-template").innerHTML);
function loadNarrativeScene(sceneContainer) {
    const choices = sceneContainer.querySelectorAll(".choices a");
    choices.forEach(choice => {
        choice.addEventListener("click", (event) => {
            event.preventDefault();
            const link = parseInt(event.target.dataset.link);
            loadScene(link);
        });
    });
}
function loadScene(sceneId) {
    const scene = scenes_1.default[sceneId];
    const sceneContainer = document.getElementById("scene-container");
    let renderedScene;
    // if (scene.type === "narrative") {
    renderedScene = narrativeSceneTemplate(scene);
    // }
    sceneContainer.innerHTML = renderedScene;
    if (scene.type === "narrative") {
        loadNarrativeScene(sceneContainer);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    loadScene(1);
});
