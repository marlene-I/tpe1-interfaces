import { getComplementaryColor, getRadians } from './utils.js';


export class Figure {
    constructor(posX, posY, width, height, fill, canvas){
        this.posX = posX;
        this.posY = posY;
        this.width = width >= 60 ? width : 60;
        this.height =  height >= 60 ? height : 60;
        this.currentColor = fill; 
        this.fill = fill;
        this.complementaryFill = getComplementaryColor(this.currentColor);
        this.path = {};
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.selected = false;
    }

    draw() { }

    drawStroke() {
        if (this.selected) {
            this.ctx.strokeStyle = 'yellow'
            this.ctx.lineWidth = 4;
            this.ctx.stroke(this.path);
        }
    }

    isPointInsideFigure({x, y}){
        return this.ctx.isPointInPath(this.path, x, y);
    }
}

export class Ellipse extends Figure {

    draw(){
        this.ctx.fillStyle = this.currentColor;
        this.path = new Path2D();
        this.path.ellipse(this.posX, this.posY, this.width, this.height, getRadians(50), 0, getRadians(360));
        this.ctx.fill(this.path);
        this.drawStroke()
    }
}

export class Circle extends Figure {
    constructor(posX, posY, width, height, fill, canvas){
        super(posX, posY, width, height, fill, canvas);
        this.posX = posX;
        this.posY = posY;
        this.width = width >= 40 ? width : 40;
        this.height = this.width;
        this.currentColor = fill; 
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    
    draw(){
        this.ctx.fillStyle = this.currentColor;
        this.path = new Path2D();
        this.path.arc(this.posX, this.posY, this.width, 0, getRadians(360), true);
        this.ctx.fill(this.path);
        this.drawStroke()
    }
}

export class Rectangle extends Figure {
    
    draw(){
        this.ctx.fillStyle = this.currentColor;
        this.path = new Path2D();
        this.path.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fill(this.path);
        this.drawStroke()
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
