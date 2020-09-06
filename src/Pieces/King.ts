import * as IconWhite from '../../assets/king_white.svg';
import * as IconBlack from '../../assets/king_black.svg';
import Piece, { Position } from './Piece';

export default class King extends Piece
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
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: -1},
            {x: 0, y: 1},
            {x: 0, y: -1},
            {x: -1, y: 0},
            {x: -1, y: 1},
            {x: -1, y: -1},
        ];

        for (let i = 0; i <= 7; i++) {
            canMoves[i].x += this.position.x;
            canMoves[i].y += this.position.y;
        }

        return canMoves;
    }
}
