let pencilSize = 15;
let colorSize = 50;

let colorY = {
  red: 25 * 1,
  orange: 25 * 4,
  yellow: 25 * 7,
  green: 25 * 10,
  lightblue: 25 * 13,
  darkblue: 25 * 16,
  purple: 25 * 19,
  pink: 25 * 22,
  eraser: 25 * 25
}

let backgroundColor = {
  r: 220,
  g: 220,
  b: 220
}

let color = {
  r: 0,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(windowWidth, windowHeight - 3.3);
  background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
  frameRate(120);
}

function draw() {
  strokeWeight(2);
  stroke(255, 255, 255);

  // red
  fill(255, 55, 55);
  rect(25, 25 * 1, colorSize, colorSize);

  // orange
  fill(227, 167, 57);
  rect(25, 25 * 4, colorSize, colorSize);

  // yellow
  fill(232, 227, 67);
  rect(25, 25 * 7, colorSize, colorSize);

  // green
  fill(100, 189, 74);
  rect(25, 25 * 10, colorSize, colorSize);

  // lightblue
  fill(90, 198, 219);
  rect(25, 25 * 13, colorSize, colorSize);

  // darkblue
  fill(45, 72, 194);
  rect(25, 25 * 16, colorSize, colorSize);

  // purple
  fill(164, 66, 207);
  rect(25, 25 * 19, colorSize, colorSize);

  // pink
  fill(247, 59, 235);
  rect(25, 25 * 22, colorSize, colorSize);

  noStroke();
  // eraser
  fill(255, 255, 255);
  rect(25, 25 * 25, colorSize, colorSize);
  fill(220, 220, 220);
  rect(27, 25 * 25 + 2, colorSize - 4, colorSize - 4);

  fill(255, 255, 255);
  rect(40, 25 * 25 + 10, 20, 10);
  fill(29, 85, 163);
  rect(40, 25 * 25 + 20, 20, 20);

  fill(255, 255, 255);
  rect(width - 210, 10, 200, 75);

  // size
  fill(0, 0, 0);
  circle(width - 185, 47.5, 5);
  circle(width - 167, 47.5, 15);
  circle(width - 142, 47.5, 25);
  circle(width - 105, 47.5, 40);
  circle(width - 50, 47.5, 60);


  if (mouseIsPressed) {
    if (mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.red & mouseY < colorY.red + colorSize){
      // red
      color.r = 255;
      color.g = 55;
      color.b = 55;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.orange & mouseY < colorY.orange + colorSize){
      // orange
      color.r = 227;
      color.g = 167;
      color.b = 57;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.yellow & mouseY < colorY.yellow + colorSize){
      // yellow
      color.r = 232;
      color.g = 227;
      color.b = 67;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.green & mouseY < colorY.green + colorSize){
      // green
      color.r = 100;
      color.g = 189;
      color.b = 74;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.lightblue & mouseY < colorY.lightblue + colorSize){
      // lightblue
      color.r = 90;
      color.g = 198;
      color.b = 219;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.darkblue & mouseY < colorY.darkblue + colorSize){
      // darkblue
      color.r = 45;
      color.g = 72;
      color.b = 194;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.purple & mouseY < colorY.purple + colorSize){
      // purple
      color.r = 164;
      color.g = 66;
      color.b = 207;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.pink & mouseY < colorY.pink + colorSize){
      // pink
      color.r = 247;
      color.g = 59;
      color.b = 235;
    } else if(mouseX > 25 & mouseX < 25 + colorSize & mouseY > colorY.eraser & mouseY < colorY.eraser + colorSize){
      // eraser
      color.r = backgroundColor.r;
      color.g = backgroundColor.g;
      color.b = backgroundColor.b;
    }


    noStroke();
    fill(color.r, color.g, color.b);
    line(mouseX, mouseY, pencilSize);
  }
