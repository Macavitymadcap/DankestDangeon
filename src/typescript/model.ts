
export type Choice = {
    link: number;
    text: string;
}

export const SceneTypes = {
    NARRATIVE: "narrative",
    COMBAT: "combat",
    QUESTION: "question"
} as const;
export type SceneType = typeof SceneTypes[keyof typeof SceneTypes];

export type Scene = {
    type: SceneType;
    title: string;
    description: string;
    choices: Choice[];
}

export type Scenes = {
    [key: number]: Scene;
}