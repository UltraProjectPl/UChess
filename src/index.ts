import '../style/index.css';
import Rook from './Pieces/Rook';
import Knight from './Pieces/Knight';
import Bishop from './Pieces/Bishop';
import Queen from './Pieces/Queen';
import King from './Pieces/King';
import Pawn from './Pieces/Pawn';
import Piece from "./Pieces/Piece";

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
const chessSquareSize = 100;
const chessPositionX = window.innerWidth / 2 - chessSquareSize * 4;
const chessPositionY = window.innerHeight / 2 - chessSquareSize * 4;

const drawChessboard = (x: number, y: number, size: number): void => {
    const startX = x;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0)) {
                ctx.fillStyle = '#8a674a';
            } else {
                ctx.fillStyle = '#cbc9c9';
            }

            ctx.fillRect(x, y, size, size);

            x += size;
        }

        x = startX;
        y += size;
    }
};

drawChessboard(chessPositionX, chessPositionY, chessSquareSize);

const chessPieces = {
    black: {
        rookWhite: new Rook('black', { x: 0, y: 0 }),
        knightBlack: new Knight('black', { x: 1, y: 0 }),
        bishopWhite: new Bishop('black', { x: 2, y: 0 }),
        queen: new Queen('black', { x: 3, y: 0 }),
        king: new King('black', { x: 4, y: 0 }),
        bishopBlack: new Bishop('black', { x: 5, y: 0 }),
        knightWhite: new Knight('black', { x: 6, y: 0 }),
        rookBlack: new Rook('black', { x: 7, y: 0 }),
        pawn1: new Pawn('black', { x: 0, y: 1 }),
        pawn2: new Pawn('black', { x: 1, y: 1 }),
        pawn3: new Pawn('black', { x: 2, y: 1 }),
        pawn4: new Pawn('black', { x: 3, y: 1 }),
        pawn5: new Pawn('black', { x: 4, y: 1 }),
        pawn6: new Pawn('black', { x: 5, y: 1 }),
        pawn7: new Pawn('black', { x: 6, y: 1 }),
        pawn8: new Pawn('black', { x: 7, y: 1 }),
    },
    white: {
        rookBlack: new Rook('white', { x: 0, y: 7 }),
        knightWhite: new Knight('white', { x: 1, y: 7 }),
        bishopBlack: new Bishop('white', { x: 2, y: 7 }),
        queen: new Queen('white', { x: 3, y: 7 }),
        king: new King('white', { x: 4, y: 7 }),
        bishopWhite: new Bishop('white', { x: 5, y: 7 }),
        knightBlack: new Knight('white', { x: 6, y: 7 }),
        rookWhite: new Rook('white', { x: 7, y: 7 }),
        pawn1: new Pawn('white', { x: 0, y: 6 }),
        pawn2: new Pawn('white', { x: 1, y: 6 }),
        pawn3: new Pawn('white', { x: 2, y: 6 }),
        pawn4: new Pawn('white', { x: 3, y: 6 }),
        pawn5: new Pawn('white', { x: 4, y: 6 }),
        pawn6: new Pawn('white', { x: 5, y: 6 }),
        pawn7: new Pawn('white', { x: 6, y: 6 }),
        pawn8: new Pawn('white', { x: 7, y: 6 }),
    }
};

const drawPieces = async (x: number, y: number, size: number) => {
    for (const [i, color] of Object.entries(chessPieces)) {
        for (const piece of Object.values(color)) {
            const img = await piece.loadImage();
            ctx.drawImage(img, x + (piece.getPosition().x * size), y + (piece.getPosition().y * size), size, size);
        }
    }
};

drawPieces(chessPositionX, chessPositionY, chessSquareSize);