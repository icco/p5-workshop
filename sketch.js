var yCoord = 0;
var rectW = 50;
var r;
var g;
var b;

/** 
You always need a setup function in p5.js.
This gets applied just once upon the initial
load of your sketch.
**/
function setup() {
  createCanvas(800, 600);
  background(128, 100);
  r = random(255);
  g = random(255);
  b = random(255);
}

/** 
You always need a draw function in p5.js.
Right after setup(), gets executed, this gets called continuously 
in the background. You can think of this function as 
your primary animation loop––each "frame" of your sketch.
**/
function draw() {
  fill(170);
  for (var n = 0; n < count; n++) {
    rect(xCoords[n] * n, yCoords[n], 50, 50);
    yCoords[n] = (yCoords[n] + speeds[n]) % height;
  }
  background(128, 100);
}
