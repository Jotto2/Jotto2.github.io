let x = 0;
let y = 0;

let down = true;
let right = true;

let speed = 3;

let imgWidth = 100;
let imgHeight = 50;

function preload() {
  img = loadImage('https://cdn.glitch.com/86f4ab29-647a-47d9-9006-7a356068646c/dvdwhite.png?1553819694869');
}

function draw() {
  createCanvas(windowWidth - 17, windowHeight - 10);
  background(0, 0, 0);

  if(x >= width - imgWidth) {
    right = false;
    RandomColor();
  } else if (x <= 0) {
    right = true;
    RandomColor();
  }

  if(y >= height - imgHeight) {
    down = false;
    RandomColor();
  } else if (y <= 0) {
    down = true;
    RandomColor();
  }


  if(right){
    x += speed;
  } else {
    x -= speed;
  }

  if(down){
    y += speed;
  } else {
    y -= speed;
  }


  image(img, x, y, imgWidth, imgHeight);

}

function RandomColor(){
  tint(random(0, 255), random(0, 255), random(0, 255));
}
