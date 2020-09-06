import * as IconWhite from '../../assets/knight_white.svg';
import * as IconBlack from '../../assets/knight_black.svg';
import Piece, { Position } from './Piece';

export default class Knight extends Piece
{
    public constructor(color: string, position: Position) {
        super(color, position);

        if (color === 'white') {
            super.loadUrlIcon(IconWhite.default);
        } else if (color === 'black') {
            super.loadUrlIcon(IconBlack.default);
        }
    }

    public move(): Position[] {
        const canMoves = [
            {x: 2, y: 1},
            {x: 1, y: 2},
            {x: -1, y: 2},
            {x: -2, y: 1},
            {x: -2, y: -1},
            {x: -1, y: -2},
            {x: 1, y: -2},
            {x: 2, y: -1},
        ];

        for (let i = 0; i <= 7; i++) {
            canMoves[i].x += this.position.x;
            canMoves[i].y += this.position.y;
        }

        return canMoves;
    }
}
