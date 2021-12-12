let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c within canvas is always context
const c = canvas.getContext('2d');

// --------------------- NOTES ---------------------
// c.fillRect(x, y, width, height) creates a rectangle at x,y cooridnates and the size
// c.fillStyle = "rgba( 255, 0, 0 ,0.1)" fills rectangles (0.1 is transparency)
// c.moveTo(x, y) imaginary paintbrush a line from x to y (needs stroke method to actually draw)
// to add color add c.strokeStyle = "rgba() || blue || #f3f3f3"
// --------------------- ----- ---------------------
// rect
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(300, 450, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(700, 307, 100, 100);
// line
c.beginPath()
c.moveTo(50, 300);
c.lineTo(400, 300);
c.lineTo(600, 500);
c.strokeStyle = "red";
c.stroke()