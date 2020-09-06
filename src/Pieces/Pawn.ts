import * as IconWhite from '../../assets/pawn_white.svg';
import * as IconBlack from '../../assets/pawn_black.svg';
import Piece, { Position } from './Piece';

export default class Pawn extends Piece
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
        const canMoves = [];
        const colorMove = this.color === 'black' ? 1 : -1;

        canMoves.push({
            x: this.position.x,
            y: this.position.y + colorMove,
        });

        if ((this.position.y === 1 && this.color === 'black') || (this.position.y === 6 && this.color === 'white')) {
            canMoves.push({
                x: this.position.x,
                y: this.position.y + colorMove * 2,
            });
        }

        return canMoves;
    }
}
