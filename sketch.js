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
  if (mouseIsPressed) {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    background(r, g, b);
  }
  fill(120, 0, 0, 200);
  rect(width/2 - 50, height/2 - mouseY/2, 100, mouseY);
}
