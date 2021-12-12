let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c within canvas is always context
const c = canvas.getContext('2d');

// --------------------- NOTES ---------------------
// c.fillRect(x, y, width, height) creates a rectangle at x,y cooridnates and the size
// c.moveTo(x, y) draws a line from x to y
// --------------------- ----- ---------------------
c.fillRect(100, 100, 100, 100);