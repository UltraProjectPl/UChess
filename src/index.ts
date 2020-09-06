import '../style/index.css';

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