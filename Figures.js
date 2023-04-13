import { getRadians } from './utils.js';


export class Figure {
    constructor(posX, posY, width, height, fill, canvas){
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.fill = fill; 
        console.log(canvas)
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    draw() { }
}

export class Ellipse extends Figure {

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        console.log('this.width', this.width)
        console.log('this.height', this.height)
        this.ctx.ellipse(this.posX, this.posY, this.width, this.height, getRadians(50), 0, getRadians(360));
        this.ctx.fill();
    }
}

export class Circle extends Figure {
    constructor(posX, posY, width, height, fill, canvas){
        super(posX, posY, width, height, fill, canvas);
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = width;
        this.fill = fill; 
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        console.log('this.width', this.width)
        console.log('this.height', this.height)
        this.ctx.arc(this.posX, this.posY, this.width, 0, getRadians(360), true);
        this.ctx.fill();
    }
}

export class Rectangle extends Figure {

    draw(){
        this.ctx.fillStyle = this.fill;
        console.log('this.width', this.width)
        console.log('this.height', this.height)
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    getPosition() {
        const x = Math.floor((Math.random() * mainCanvas.width)); 
        const y = Math.floor((Math.random() * mainCanvas.height));
        if (x + this.width > this.canvas.width){
            x = x - this.width;
        }

        if (y + this.height > this.canvas.height){
            y = y - this.height;
        }
        return [x, y];
    }
}
