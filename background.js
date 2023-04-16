import { getRadians } from "./utils.js";

// Define static colors for background
export const [bodyBackgroundColor, canvasBackgroundPrimaryColor, canvasBackgroundSecondaryColor] = ["#3c0e8b", "#6051b3", "#130660"]

export const drawBackground = (ctx, canvasWidth, canvasHeight) => {
    // create conic gradient
    const canvasBackgroundGradient = ctx.createConicGradient(getRadians(60), canvasWidth/2, canvasHeight/2);
    
    canvasBackgroundGradient.addColorStop(0, canvasBackgroundSecondaryColor);
    canvasBackgroundGradient.addColorStop(0.05, canvasBackgroundPrimaryColor);
    canvasBackgroundGradient.addColorStop(0.15, bodyBackgroundColor);
    canvasBackgroundGradient.addColorStop(0.25, canvasBackgroundSecondaryColor);
    canvasBackgroundGradient.addColorStop(0.35, canvasBackgroundPrimaryColor);
    canvasBackgroundGradient.addColorStop(0.45, bodyBackgroundColor);
    canvasBackgroundGradient.addColorStop(0.55, canvasBackgroundSecondaryColor);
    canvasBackgroundGradient.addColorStop(0.65, canvasBackgroundPrimaryColor);
    canvasBackgroundGradient.addColorStop(0.75, bodyBackgroundColor);
    canvasBackgroundGradient.addColorStop(0.85, canvasBackgroundPrimaryColor);
    canvasBackgroundGradient.addColorStop(0.95, canvasBackgroundSecondaryColor);
    
    ctx.fillStyle = canvasBackgroundGradient;
    
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}