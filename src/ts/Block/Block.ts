export type Position = {
    x: number;
    y: number;
};

export default class Block {
    constructor(private position: Position) {}

    get Position(): Position {
        return this.position;
    }
    set Position({ x, y }: Position) {
        this.position.x = x;
        this.position.y = y;
    }
}
