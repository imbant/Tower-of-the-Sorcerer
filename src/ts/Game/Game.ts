import Scene from '../Scene/Scene';
import Warrior from '../Unit/Warrior/Warrior';

// 游戏的起点，装载场景，移动勇士
export default class Game {
    private currentSceneIndex: number;
    private scenes: Scene[];

    get CurrentScene(): Scene {
        return this.scenes[this.currentSceneIndex];
    }

    private warrier: Warrior;

    constructor() {
        this.scenes = [];
        this.currentSceneIndex = 0;
    }

    public LoadScenes(): void {
        // from csv?
    }

    public MoveWarrier(direction: string): void {
        // entity ? can enter: onenter
        // monster? battle
        // shop? buy
    }

    private ChangeScene(index: number): void {
        this.currentSceneIndex = index;
    }
}
