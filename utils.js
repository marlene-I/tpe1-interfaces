export const getRadians = (degrees) => Math.PI/180*degrees;

export const getRandomInteger = (limit) => Math.floor(Math.random() * limit);


/**
 * Creates a random color pallete with 4 tetradic harmonic colors and 2 extra colors for each one of these obtained
 * changing saturation.
 * Returns a list with the HSL color string.
 */
export const getRandomColorPallete = () => {
    const hue = Math.round(Math.random() * 360);
    const huePallete = harmonize(hue, 30, 90, 30);
    const pallete = []

    for (let i = 0; i < huePallete.length; i++) {
        const hslPairs = [ `hsl(${huePallete[i]}, 100%, 80%, 0.9)`]; /* `hsl(${huePallete[i]}, 40%,50%)`, */
        pallete.push(...hslPairs);
    }

    // Creating two last colors, closer to white to set canvas and body background
    const lastHue = huePallete[huePallete.length-1];
    const backgroundsHue = harmonize(lastHue, 180, 180, 1);
    // next line allows me to destructure the background colors
    const finalPallete = [`hsl(${backgroundsHue[0]}, 50%, 70%,0.8)`, `hsl(${backgroundsHue[1]}, 50%, 70%, 0.8)`, `hsl(${(backgroundsHue[1]+backgroundsHue[0])/2}, 50%, 70%,0.8)`].concat(pallete)
    return finalPallete;
}

/**
 *  Returns a hue palette creating by advancing steps from a starting point, with a step size and a last value
 * @param {Number} hue Hue value to harmonize
 * @param {Number} start Degrees to the first desired harmonic color (from the base hue)
 * @param {Number} end Last desired harmonic color degrees
 * @param {Number} interval Steps to take in degrees from the start to reach the end of the harmony
 * @returns 
 */
const harmonize = (hue, start, end, interval) => {
    const huePallete = [hue]
    for (let i = start; i <= end; i+=interval) {
        const newHue = (hue + i) % 360;
        huePallete.push(newHue);
    }
    return huePallete;
}
