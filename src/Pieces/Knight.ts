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
}
