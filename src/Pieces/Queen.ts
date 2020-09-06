import * as IconWhite from '../../assets/queen_white.svg';
import * as IconBlack from '../../assets/queen_black.svg';
import Piece, { Position } from './Piece';

export default class Queen extends Piece
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

        let counter = 0;
        for (let i = this.position.x; i <= 7; i++) {
            canMoves.push({
                x: i,
                y: this.position.y
            });

            canMoves.push({
                x: this.position.x,
                y: i
            });

            canMoves.push({
                x: i,
                y: this.position.y + counter
            });

            canMoves.push({
                x: i,
                y: this.position.y - counter
            });

            counter++;
        }

        counter = 0;
        for (let i = this.position.x; i >= 0; i--) {
            canMoves.push({
                x: i,
                y: this.position.y + counter
            });

            canMoves.push({
                x: i,
                y: this.position.y - counter
            });

            counter++;
        }
    }
}
