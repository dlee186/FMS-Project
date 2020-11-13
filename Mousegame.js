var x, y, r, g, b;
const radius = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background('white');
  fill(r, g, b);
  ellipse(x, y, radius, radius);
}

function mousePressed() {
  var distance = dist(mouseX, mouseY, x, y);
  if (distance < radius) {
    newEllipse();
  }
}

function newEllipse() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

