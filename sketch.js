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
}

/** 
You always need a draw function in p5.js.
Right after setup(), gets executed, this gets called continuously 
in the background. You can think of this function as 
your primary animation loop––each "frame" of your sketch.
**/
function draw() {
  background(128, 100);
  noFill();
  strokeWeight(5);
  stroke(0, 20, 0);
  ellipse(mouseX, mouseY, 100);
}
