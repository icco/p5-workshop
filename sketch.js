var centerX;
var centerY;
var radius;
var totalDegrees = 365;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  centerX = width / 2;
  centerY = height / 2;
  radius = height / 2;
  angleMode(DEGREES);
}

function draw() {
  noFill();
  stroke(255, 25);
  beginShape();
  for (var i = 0; i <= totalDegrees; i++) {
    var noiseFactor = noise(i / 35, frameCount / 60);
    var x = centerX + radius * cos(i) * noiseFactor;
    var y = centerY + radius * sin(i) * noiseFactor;
    curveVertex(x, y);
  }
  endShape();
  radius -= 0.6

  if (radius <= 0) {
    noLoop();
  }
}
