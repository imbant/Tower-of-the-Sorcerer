import Block, { Position } from '../Block/Block';

// 钥匙、锁、墙、楼梯
export default class Entity extends Block {
    constructor(position: Position) {
        super(position);
    }

    private canEnter: boolean;

    public OnEnter(): void {
        if (!this.canEnter) {
            return;
        }
    }
}
