let MENU = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  print(mouseX, mouseY)
  background(150);
  fill(255, 0, 0);
  rect(50, 50, 200, 75);
  fill(0, 255, 0);
  rect(50, 200, 200, 75);
  fill(0, 0, 255);
  rect(50, 350, 200, 75);
  textSize(20)
  fill(255);
  text('MATCHING', 90, 100);
  text('CLICKING', 100, 250);
  text('TRACING', 100, 400);
}
  
  if (MENU == 1) {
}

  if (MENU == 2) {
}
  
  if (MENU == 3) {

}


function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        MENU = 2
      }
      if (mouseY < 425 && mouseY > 350) {
        MENU = 3
      }
    }
  }
}
