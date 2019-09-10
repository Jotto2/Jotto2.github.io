function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

let rectX1 = 0;
let rectX2 = 0;
let rectX3 = 0;
let rectX4 = 0;
let rectX5 = 0;

let rectWidth = 100;

function draw() {
  // put drawing code here
  background(220);

  strokeWeight(0);

  rect(rectX1, 50, rectWidth, 50);
  rect(rectX2, 150, rectWidth, 50);
  rect(rectX3, 250, rectWidth, 50);
  rect(rectX4, 350, rectWidth, 50);
  rect(rectX5, 450, rectWidth, 50);

  rectX1 += 1;
  rectX2 += 2;
  rectX3 += 3;
  rectX4 += 4;
  rectX5 += 5;

  if(rectX1 >= windowWidth){
    rectX1 = 0 - rectWidth;
  }
  if(rectX2 >= windowWidth){
    rectX2 = 0 - rectWidth;
  }
  if(rectX3 >= windowWidth){
    rectX3 = 0 - rectWidth;
  }
  if(rectX4 >= windowWidth){
    rectX4 = 0 - rectWidth;
  }
  if(rectX5 >= windowWidth){
    rectX5 = 0 - rectWidth;
  }


}
