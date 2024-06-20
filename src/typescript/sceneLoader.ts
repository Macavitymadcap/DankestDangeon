import scenes from "./scenes";
import * as handlebars from "handlebars";

const narrativeSceneTemplate = handlebars.compile(document.getElementById("narrative-scene-template")!.innerHTML);

function loadNarrativeScene(sceneContainer: HTMLElement): void {
    const choices = sceneContainer.querySelectorAll(".choices a");
    choices.forEach(choice => {
        choice.addEventListener("click", (event: Event) => {
            event.preventDefault();
            const link = parseInt((event.target as HTMLAnchorElement).dataset.link!);
            loadScene(link);
        });
    });
}

export function loadScene(sceneId: number): void {
    const scene = scenes[sceneId];
    const sceneContainer = document.getElementById("scene-container") as HTMLElement;

    let renderedScene: string;
    // if (scene.type === "narrative") {
    renderedScene = narrativeSceneTemplate(scene);
    // }

    sceneContainer.innerHTML = renderedScene;

    if (scene.type === "narrative") {
        loadNarrativeScene(sceneContainer);
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     loadScene(1);
// });

