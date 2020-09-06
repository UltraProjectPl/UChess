export interface Position {
    x: number,
    y: number,
}

export default abstract class Piece
{
    protected color: string;

    protected url: string;

    protected position: Position;

    protected constructor(color: string, position: Position) {
        this.color = color;
        this.position = position;
    }

    protected loadUrlIcon(url: string): void
    {
        this.url = url;
    }

    public loadImage(): Promise<HTMLImageElement>
    {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.addEventListener('load', () => resolve(img));
            img.addEventListener('error', () => reject(new Error(`Load ${this.url} fail`)))
            img.src = this.url;
        });
    }
}