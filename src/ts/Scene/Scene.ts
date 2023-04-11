import Unit from '../Unit/Unit';
import Wall from '../Entity/Entity';

export type MapCell = Unit | Wall;

export default class Scene {
    static mapSize = 11;

    protected map: MapCell[][];
    public Map(): MapCell[][] {
        return this.map;
    }

    constructor() {
        this.map = new Array<MapCell[]>(Scene.mapSize);
        this.map.forEach((row) => {
            row = new Array<MapCell>(Scene.mapSize);
        });
    }

    loadMap(): void {
        // from csv?
    }
}
