import Block, { Position } from '../Block/Block';

export default class Unit extends Block {
    constructor(
        position: Position,
        protected hp: number,
        public attack: number,
        public defense: number,
    ) {
        super(position);
    }

    get HP(): number {
        return this.hp;
    }
    set HP(value: number) {
        this.hp = value;
    }
}
