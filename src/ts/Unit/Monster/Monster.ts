import { Position } from '../../Block/Block';
import Unit from '../Unit';

export default abstract class AbstractMonster extends Unit {
    constructor(position: Position) {
        super(position, 10, 1, 1);
    }
}
