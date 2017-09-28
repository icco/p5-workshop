var yCoords = [0, 0, 0, 0, 0, 0, 0, 0];
var xCoords = [0, 50, 100, 150, 200, 250, 300, 350];
var speeds = [ ];
var count = 8;

/** 
You always need a setup function in p5.js.
This gets applied just once upon the initial
load of your sketch.
**/
function setup() {
  createCanvas(800, 600);
  // R, G, B or Grey
  //background(120, 0, 148);
  background(128, 100);
  speeds = [
    random(1, 15),
    random(1, 15),
    random(1, 15),
    random(1, 15),
    random(1, 15),
    random(1, 15),
    random(1, 15),
    random(1, 15)
  ];
  xCoords = [
    width / 8,
    width / 8,
    width / 8,
    width / 8,
    width / 8,
    width / 8,
    width / 8,
    width / 8
  ]
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
