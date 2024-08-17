// main.js
const rectangleModule = require('./rectangle'); // Assuming 'rectangle.js' is in the same directory

const length = 10;
const width = 5;

const area = rectangleModule.calculateRectangleArea(length, width);

console.log(`The area of the rectangle is: ${area}`);