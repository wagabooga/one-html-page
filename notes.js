// --------------------- NOTES ---------------------

// c.fillRect(x, y, width, height) creates a rectangle at x,y cooridnates and the size
// c.fillStyle = "rgba( 255, 0, 0 ,0.1)" fills rectangles (0.1 is transparency)

// c.moveTo(x, y) imaginary paintbrush a line from x to y (needs stroke method to actually draw)
// to add color add c.strokeStyle = "rgba() || blue || #f3f3f3"

// c.arc(x, y, radius:int, startAngle, Float)  startAngle/float are radians
// see - https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:trig/x2ec2f6f830c9fb89:radians/v/introduction-to-radians

// IDEAS
// on a grid, get spinners to randomly pop up at different speed/sizes, and maybe color

// refer dancing_man for spinners, different frames and playing

// BABY STEPS
// first, get a spinner to pop up on a page
// figure out coloring and positioning and animation
// create new spinner for display


// change the display of the page to be reactive, maybe even mobile friendly (later TODO?)
// try to get an animated spinner 

// canvas, see ant farm window



// have spinner rotating around cursor, on click u spawn a firework effect from that angle
// size bar

// -- make a randomizer helper function colors for colors
// ---------------------------------


//  example code 
rect
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(300, 450, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(700, 307, 100, 100);

line
c.beginPath()
c.moveTo(50, 300);
c.lineTo(400, 300);
c.lineTo(600, 500);
c.strokeStyle = 'red';
c.stroke()

arc / circle


for (var i = 0; i < 2; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2)
    c.strokeStyle = 'blue';
    c.stroke()
}