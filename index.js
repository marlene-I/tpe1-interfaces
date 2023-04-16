import { Rectangle, Circle, Ellipse } from './Figures.js';
import { getComplementaryColor, getRandomColorPalette, getRandomInteger }  from './utils.js';
import { drawBackground, bodyBackgroundColor, canvasBackgroundPrimaryColor } from './background.js';

const mainCanvas = document.getElementById("principal");
const mainCtx = mainCanvas.getContext("2d");

const leftCanvasPosition = mainCanvas.offsetLeft
const topCanvasPosition = mainCanvas.offsetTop

/*******************************************/ 
/**************** Constants ****************/ 
/*******************************************/ 

const maxElements = 10;
const baseElements = [Rectangle, Circle, Ellipse];
const currentElements = [];
// Generate a color palette of analogous colors and two corresponding shades
const colors = getRandomColorPalette();
let draggedElement = null;
let selectedElement = null;
let keysPressed = {};


/*******************************************/ 
/****************  Styles  *****************/ 
/*******************************************/ 
document.getElementsByTagName("body")[0].style.backgroundColor = bodyBackgroundColor;
mainCanvas.style.boxShadow = `inset 0 -1px 1px ${canvasBackgroundPrimaryColor}, 6px 6px 70px 70px ${canvasBackgroundPrimaryColor}`;
mainCanvas.style.border = `0.1px solid white`;


/*******************************************/ 
/****************  Functions  **************/ 
/*******************************************/ 

/****************  Main  *******************/ 
const main = () => {
    drawBackground(mainCtx, mainCanvas.width, mainCanvas.height);
    for (let i = 0; i < maxElements; i++) {
        const color = colors[getRandomInteger(colors.length - 1)]
        const element = baseElements[getRandomInteger(baseElements.length)];
        const newFigure = new element(getRandomInteger(mainCanvas.width), getRandomInteger(mainCanvas.height), getRandomInteger(200), getRandomInteger(200), color, mainCanvas);
        currentElements.push(newFigure);
        newFigure.draw();
    }
    
    mainCanvas.addEventListener('mousedown', checkMouseDown)
    mainCanvas.addEventListener('mousemove', hover)
}

/****************  Drag & Drop  *******************/ 
const checkMouseDown = (e) => {
    let index = 0
    if(selectedElement){
        selectedElement.selected = false;
        selectedElement = null;
    }
    while (!draggedElement && index < currentElements.length) {
        if(currentElements[index].isPointInsideFigure({x: e.clientX - leftCanvasPosition, y: e.clientY - topCanvasPosition})){
            document.addEventListener("mousemove", drag);
            document.addEventListener("mouseup", drop);
            draggedElement = currentElements[index];
            draggedElement.selected = true;
        } 
        index++
    }
}

const drag = (e) => {
    draggedElement.posX = e.clientX - leftCanvasPosition;
    draggedElement.posY = e.clientY - topCanvasPosition;
    reDrawAll();
}

const drop = (e) => {
    if(draggedElement.isPointInsideFigure({x: e.clientX - leftCanvasPosition, y: e.clientY - topCanvasPosition})){
        document.addEventListener("keydown", walk);
        document.addEventListener("keyup", walk); // keyup is used to know if two keys are being pressed together
        selectedElement = draggedElement;
        selectedElement.selected = true;
        reDrawAll();
    } else {
        draggedElement.selected = false;
    }
    draggedElement = null;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", drop);
}

/****************  Using keypresses to move  *******************/ 
const walk = (e) => {
    keysPressed[e.keyCode] = e.type == "keydown"
    if (keysPressed[37] &&  keysPressed[38]){
        // move in the upper left direction
        move({x: -10, y: -10})
    } else if (keysPressed[37] &&  keysPressed[40]){
        // move in the bottom left direction
        move({x: -10, y: 10})
    }else if (keysPressed[39] &&  keysPressed[38]){
        // move in the upper right direction
        move({x: 10, y: -10})
    }else if (keysPressed[39] &&  keysPressed[40]){
        // move in the bottom right direction
        move({x: 10, y: 10})
    }else {
        switch (e.keyCode) {
            case 37: // left
                move({x: -10, y:0})
                 break;
            case 38: // up
                move({x: 0, y: -10})
                break;
            case 39: // right
                move({x: 10, y: 0})
            break;
            case 40: // down
                move({x: 0, y: 10})
            break;
         }
    }

}

const move = ({x, y}) => {
    selectedElement.posX += x
    selectedElement.posY += y
    reDrawAll()
}


/****************  Color change on hover  *******************/ 
const hover = (e) => {
    let index = 0;
    while (index < currentElements.length) {
        const figure = currentElements[index];
        if(figure.isPointInsideFigure({x: e.clientX - leftCanvasPosition, y: e.clientY - topCanvasPosition})){
            changeColor(figure, figure.complementaryFill);
        } else {
            changeColor(figure, figure.fill);
        }
        index++
    }
}

const changeColor = (figure, color) => {
    figure.currentColor = color;
    reDrawAll();
}


/**************** General functions  *******************/ 
const reDrawAll = () =>{
    mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height)
    drawBackground(mainCtx, mainCanvas.width, mainCanvas.height );
    drawFigures();

}

const drawFigures = () => {
    for (let i = 0; i < currentElements.length; i++) {
        currentElements[i].draw();
    }
}


main()