import { Rectangle, Circle, Ellipse } from './Figures.js';
import { getRadians, getRandomColorPallete, getRandomInteger }  from './utils.js';

/* 
Note: Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression: radians = (Math.PI/180)*degrees.
*/

const mainCanvas = document.getElementById("principal");
const mainCtx = mainCanvas.getContext("2d");

const maxElements = 10;

const baseElements = [Rectangle, Circle, Ellipse];
const currentElements = [];

// First two colors will be closer to white (90% saturation) in order to use them as background colors
const [...colors] = getRandomColorPallete();

// Set body color
document.getElementsByTagName("body")[0].style.backgroundColor = 'rgba(18, 19, 79, 0.8)';

const [canvasBackgroundColor, bodyBackgroundColor, intermediate] = ["#6051b3", "#3c0e8b", "#130660"]

mainCanvas.style.boxShadow = `inset 0 -1px 1px ${canvasBackgroundColor}, 6px 6px 70px 70px ${canvasBackgroundColor}`;
mainCanvas.style.border = `0.1px solid white`;

const middleX = mainCanvas.width / 2;
const middleY = mainCanvas.height / 2;

// const canvasBackgroundGradient = mainCtx.createRadialGradient(middleX, middleY, middleY/10, middleX, middleY, middleY*2);
// canvasBackgroundGradient.addColorStop(0, canvasBackgroundColor);
// canvasBackgroundGradient.addColorStop(0.5, intermediate);
// canvasBackgroundGradient.addColorStop(1, bodyBackgroundColor);

// Conic gradient
const canvasBackgroundGradient = mainCtx.createConicGradient(getRadians(60), middleX, middleY);

canvasBackgroundGradient.addColorStop(0, intermediate);
canvasBackgroundGradient.addColorStop(0.05, canvasBackgroundColor);
canvasBackgroundGradient.addColorStop(0.2, bodyBackgroundColor);
canvasBackgroundGradient.addColorStop(0.3, intermediate);
canvasBackgroundGradient.addColorStop(0.4, canvasBackgroundColor);
canvasBackgroundGradient.addColorStop(0.5, bodyBackgroundColor);
canvasBackgroundGradient.addColorStop(0.6, intermediate);
canvasBackgroundGradient.addColorStop(0.7, canvasBackgroundColor);
canvasBackgroundGradient.addColorStop(0.8, bodyBackgroundColor);
canvasBackgroundGradient.addColorStop(0.9, intermediate);
mainCtx.fillStyle = canvasBackgroundGradient;


// mainCtx.fillStyle = canvasBackgroundColor;
mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

console.log('colors', colors);

for (let i = 0; i < maxElements; i++) {
    // The last two colors 
    const color = colors[getRandomInteger(colors.length - 1)]
    const element = baseElements[getRandomInteger(baseElements.length)];
    const newFigure = new element(getRandomInteger(mainCanvas.width), getRandomInteger(mainCanvas.height), getRandomInteger(200), getRandomInteger(200), color, mainCanvas);
    currentElements.push(newFigure);
    newFigure.draw();
}

// mainCanvas.addEventListener('mousemove', (e) => {console.log(e)})