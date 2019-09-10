let xPos = innerWidth/2;
let yPos = 10;
let yFart = 0;
let xHinder = innerWidth;
let hinderH = 250;
let hinderW = 50;
let imageW = 150;
let imageH = 150;

function preload(){
  // put preload code here
  img = loadImage('hotDog.png');
}

function setup() {
  // put setup code here
  createCanvas(innerWidth,innerHeight);
  frameRate(60);
}

function draw() {
  // put drawing code here
  fill(random(255),random(255),random(255));
  background("#e6e6ff");
  image(img, xPos, yPos, imageW,imageH);
  rect(xHinder,0,hinderW,hinderH)
  rect(xHinder,innerH - hinderH,hinderW,hinderH)
  yPos += yFart;
  if(yPos < innerHeight){
    yFart += .5;
  } else{
    yFart = 0;
  }
  xHinder -= 3;

  if(xHinder < 0 - 50){
    xHinder = innerWidth;
  }

  if(xPos -  > xHinder && xPos < xHinder + hinderW && yPos < hinderH){
    location.reload();
  };
  if(xPos > xHinder && xPos
     < xHinder + hinderW && yPos > innerHeight - hinderH){
    location.reload();
  };

  window.onkeydown = hopp;

  function hopp(){
    yFart = -10;

  }
}
