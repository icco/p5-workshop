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
  // x,y start -> x,y end
  //line(10, 20, 120, 250)
  

  noFill();

  // draw a circle
  // x, y, width, height
  ellipse(width/2, height/2, 200, 200)

  fill(20, 30, 40);
  stroke(5);

  ellipse(width/4, height/4, 20, 20)
}
