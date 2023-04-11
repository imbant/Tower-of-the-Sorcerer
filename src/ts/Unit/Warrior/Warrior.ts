import Unit from '../Unit';

export default class Warrior extends Unit {
    move(direction: 'l' | 'r' | 't' | 'd'): void {
        // TODO: check if the next position is valid
        switch (direction) {
            case 'l':
                this.Position = { x: this.Position.x - 1, y: this.Position.y };
                break;
            case 'r':
                this.Position = { x: this.Position.x + 1, y: this.Position.y };
                break;
            case 't':
                this.Position = { x: this.Position.x, y: this.Position.y - 1 };
                break;
            case 'd':
                this.Position = { x: this.Position.x, y: this.Position.y + 1 };
                break;
            default:
                break;
        }
    }
}
