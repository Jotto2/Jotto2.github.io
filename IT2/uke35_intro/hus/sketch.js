let growing = true;
let growspeed = 5;

let smokeX;
let smokeY;
let smokeX2 ;
let smokeY2;
let smokeX3;
let smokeY3;
let smokeX4;
let smokeY4;
let smokeX5;
let smokeY5;

let smokeSize = 4;
let smokeSize2 = 5;
let smokeSize3 = 6;
let smokeSize4 = 7;
let smokeSize5 = 5;

let smokeSpeed = 1.5;
let smokeSpeed2 = 2;
let smokeSpeed3 = 2.5;
let smokeSpeed4 = 3;
let smokeSpeed5 = 2;

let smokeXSpeed = .25;
let smokeXSpeed2 = .5;
let smokeXSpeed3 = .25;
let smokeXSpeed4 = .5;
let smokeXSpeed5 = .25;

let smokeLeft = true;
let smokeLeft2 = true;
let smokeLeft3 = true;
let smokeLeft4 = true;
let smokeLeft5 = true;

let third;


let OldMax;
let OldMin;
let NewMax;
let NewMin;
let OldValue;

let OldRange = (OldMax - OldMin);
let NewRange;
let NewValue;

let NewMaxS;
let NewMinS;

let NewRangeS;
let NewValueS;

let sunX;
let sunY;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight - 3.3);

  starMinSize = 1;
  starMaxSize = 7.5;

  starX = random(windowWidth);
  starY = random(windowHeight);
  starSize = random(starMinSize, starMaxSize);
  starX2 = random(windowWidth);
  starY2 = random(windowHeight);
  starSize2 = random(starMinSize, starMaxSize);
  starX3 = random(windowWidth);
  starY3 = random(windowHeight);
  starSize3 = random(starMinSize, starMaxSize);
  starX4 = random(windowWidth);
  starY4 = random(windowHeight);
  starSize4 = random(starMinSize, starMaxSize);
  starX5 = random(windowWidth);
  starY5 = random(windowHeight);
  starSize5 = random(starMinSize, starMaxSize);
  starX6 = random(windowWidth);
  starY6 = random(windowHeight);
  starSize6 = random(starMinSize, starMaxSize);
  starX7 = random(windowWidth);
  starY7 = random(windowHeight);
  starSize7 = random(starMinSize, starMaxSize);
  starX8 = random(windowWidth);
  starY8 = random(windowHeight);
  starSize8 = random(starMinSize, starMaxSize);
  starX9 = random(windowWidth);
  starY9 = random(windowHeight);
  starSize9 = random(starMinSize, starMaxSize);
  starX10 = random(windowWidth);
  starY10 = random(windowHeight);
  starSize10 = random(starMinSize, starMaxSize);
  starX11 = random(windowWidth);
  starY11 = random(windowHeight);
  starSize11 = random(starMinSize, starMaxSize);
  starX12 = random(windowWidth);
  starY12 = random(windowHeight);
  starSize12 = random(starMinSize, starMaxSize);
  starX13 = random(windowWidth);
  starY13 = random(windowHeight);
  starSize13 = random(starMinSize, starMaxSize);
  starX14 = random(windowWidth);
  starY14 = random(windowHeight);
  starSize14 = random(starMinSize, starMaxSize);
  starX15 = random(windowWidth);
  starY15 = random(windowHeight);
  starSize15 = random(starMinSize, starMaxSize);

  smokeX = windowWidth / 2 + 27.5;
  smokeX2 = windowWidth / 2 + 27.5;
  smokeX3 = windowWidth / 2 + 27.5;
  smokeX4 = windowWidth / 2 + 27.5;
  smokeX5 = windowWidth / 2 + 27.5;

  smokeY = windowHeight / 2 - 95;
  smokeY2 = windowHeight / 2 - 95;
  smokeY3 = windowHeight / 2 - 125;
  smokeY4 = windowHeight / 2 - 95;
  smokeY5 = windowHeight / 2 - 95;

  sunX = windowWidth / 2;
  sunY = windowHeight / 2;
  sunSpeed = 2;

  lineHeight = windowHeight - 50;

  grassX = random(windowWidth / 8 * 3, windowWidth / 8 * 5);
  grassY = random(windowHeight / 12 * 8, windowHeight);
  grassC = [random(106, 59), random(224, 110), random(16, 21)];
  grassX2 = random(windowWidth / 8 * 3, windowWidth / 8 * 5);
  grassY2 = random((windowHeight / 12 * 8), windowHeight);
  grassC2 = [random(106, 59), random(224, 110), random(16, 21)];
  grassX3 = random(windowWidth / 8 * 3, windowWidth / 8 * 5);
  grassY3 = random((windowHeight / 12 * 8), windowHeight);
  grassC3 = [random(106, 59), random(224, 110), random(16, 21)];
  grassX4 = random(windowWidth / 8 * 3, windowWidth / 8 * 5);
  grassY4 = random((windowHeight / 12 * 8), windowHeight);
  grassC4 = [random(106, 59), random(224, 110), random(16, 21)];
  grassX5 = random(windowWidth / 8 * 3, windowWidth / 8 * 5);
  grassY5 = random((windowHeight / 12 * 8), windowHeight);
  grassC5 = [random(106, 59), random(224, 110), random(16, 21)];

  sheepWait = 0;
  sheepX = windowWidth / 2;
  sheepY = windowHeight / 2 + 200;
  sheepDesX = windowWidth / 2;
  sheepDesY = windowHeight / 2 + 200;
}

function draw() {
  // put drawing code here

  createCanvas(windowWidth, windowHeight - 3.3);

  strokeWeight(0);

  OldMax = windowHeight;
  OldMin = 0;
  //OldValue = sunY;
  OldValue = mouseY;
  OldRange = (OldMax - OldMin);

  NewMaxR = 11;
  NewMinR = 125;

  NewMaxG = 23;
  NewMinG = 245;

  NewMaxB = 77;
  NewMinB = 215;

  NewRangeR = (NewMaxR - NewMinR);
  NewValueR = (((OldValue - OldMin) * NewRangeR) / OldRange) + NewMinR;

  NewRangeG = (NewMaxG - NewMinG);
  NewValueG = (((OldValue - OldMin) * NewRangeG) / OldRange) + NewMinG;

  NewRangeB = (NewMaxB - NewMinB);
  NewValueB = (((OldValue - OldMin) * NewRangeB) / OldRange) + NewMinB;

  background(NewValueR, NewValueG, NewValueB);

  //background(map(mouseY, 0, NewMaxR, windowHeight, NewMinR), map(mouseY, 0, NewMaxG, windowHeight, NewMinG), map(mouseY, 0, NewMaxB, windowHeight, NewMinB));


  // stjerner

  NewMaxStar = 255;
  NewMinStar = 0;

  NewRangeStar = (NewMaxStar - NewMinStar);
  NewValueStar = (((OldValue - windowHeight / 16 * 9) * NewRangeStar) / (windowHeight - windowHeight / 16 * 9)) + NewMinStar;

  fill(207, 185, 89, NewValueStar);
    ellipse(starX, starY, starSize);
    ellipse(starX2, starY2, starSize2);
    ellipse(starX3, starY3, starSize3);
    ellipse(starX4, starY4, starSize4);
    ellipse(starX5, starY5, starSize5);
    ellipse(starX6, starY6, starSize6);
    ellipse(starX7, starY7, starSize7);
    ellipse(starX8, starY8, starSize8);
    ellipse(starX9, starY9, starSize9);
    ellipse(starX10, starY10, starSize10);
    ellipse(starX11, starY11, starSize11);
    ellipse(starX12, starY12, starSize12);
    ellipse(starX13, starY13, starSize13);
    ellipse(starX14, starY14, starSize14);
    ellipse(starX15, starY15, starSize15);

  // sol/måne

  NewMaxSunR = 172;
  NewMinSunR = 250;

  NewMaxSunG = 223;
  NewMinSunG = 188;

  NewMaxSunB = 232;
  NewMinSunB = 17;


  NewRangeSunR = (NewMaxSunR - NewMinSunR);
  NewValueSunR = (((OldValue - OldMin) * NewRangeSunR) / OldRange) + NewMinSunR;

  NewRangeSunG = (NewMaxSunG - NewMinSunG);
  NewValueSunG = (((OldValue - OldMin) * NewRangeSunG) / OldRange) + NewMinSunG;

  NewRangeSunB = (NewMaxSunB - NewMinSunB);
  NewValueSunB = (((OldValue - OldMin) * NewRangeSunB) / OldRange) + NewMinSunB;

  fill(NewValueSunR, NewValueSunG, NewValueSunB);
  ellipse(mouseX, mouseY, 100);
  if(mouseX > sunX){
    sunX += sunSpeed;
  } else if(mouseX < sunX){
    sunX -= sunSpeed;
  }
  if(mouseY > sunY){
    sunY += sunSpeed;
  } else if(mouseY < sunY){
    sunY -= sunSpeed;
  }
  //ellipse(sunX, sunY, 100);

  // planet
  fill(125, 200, 64);
  ellipse(windowWidth / 2, windowHeight / 2 + 421, 750);



  // røyk
  if(smokeY >= 0){
    smokeY -= smokeSpeed;
  } else if(smokeY <= 0){
    smokeY = windowHeight / 2 - 95;
  }
  if(smokeY2 >= 0){
    smokeY2 -= smokeSpeed2;
  } else if(smokeY2 <= 0){
    smokeY2 = windowHeight / 2 - 95;
  }
  if(smokeY3 >= 0){
    smokeY3 -= smokeSpeed3;
  } else if(smokeY3 <= 0){
    smokeY3 = windowHeight / 2 - 95;
  }
  if(smokeY4 >= 0){
    smokeY4 -= smokeSpeed4;
  } else if(smokeY4 <= 0){
    smokeY4 = windowHeight / 2 - 95;
  }
  if(smokeY5 >= 0){
    smokeY5 -= smokeSpeed5;
  } else if(smokeY5 <= 0){
    smokeY5 = windowHeight / 2 - 95;
  }


  if(smokeX < windowWidth / 2 + 22.5){
    smokeLeft = false;
  } else if(smokeX > windowWidth / 2 + 32.5){
    smokeLeft = true;
  }
  if(smokeLeft == true){
    smokeX -= smokeXSpeed;
  } else if(smokeLeft == false){
    smokeX += smokeXSpeed;
  }

  if(smokeX2 < windowWidth / 2 + 22.5){
    smokeLeft2 = false;
  } else if(smokeX2 > windowWidth / 2 + 32.5){
    smokeLeft2 = true;
  }
  if(smokeLeft2 == true){
    smokeX2 -= smokeXSpeed2;
  } else if(smokeLeft2 == false){
    smokeX2 += smokeXSpeed2;
  }

  if(smokeX3 < windowWidth / 2 + 22.5){
    smokeLeft3 = false;
  } else if(smokeX3 > windowWidth / 2 + 32.5){
    smokeLeft3 = true;
  }
  if(smokeLeft3 == true){
    smokeX3 -= smokeXSpeed3;
  } else if(smokeLeft3 == false){
    smokeX3 += smokeXSpeed3;
  }

  if(smokeX4 < windowWidth / 2 + 22.5){
    smokeLeft4 = false;
  } else if(smokeX4 > windowWidth / 2 + 32.5){
    smokeLeft4 = true;
  }
  if(smokeLeft4 == true){
    smokeX4 -= smokeXSpeed4;
  } else if(smokeLeft4 == false){
    smokeX4 += smokeXSpeed4;
  }

  if(smokeX5 < windowWidth / 2 + 22.5){
    smokeLeft5 = false;
  } else if(smokeX5 > windowWidth / 2 + 32.5){
    smokeLeft5 = true;
  }
  if(smokeLeft5 == true){
    smokeX5 -= smokeXSpeed5;
  } else if(smokeLeft5 == false){
    smokeX5 += smokeXSpeed4;
  }


  // tegner røyk
  fill(117, 117, 117);
  ellipse(smokeX, smokeY, smokeSize);
  ellipse(smokeX2, smokeY2, smokeSize2);
  ellipse(smokeX3, smokeY3, smokeSize3);
  ellipse(smokeX4, smokeY4, smokeSize4);
  ellipse(smokeX5, smokeY5, smokeSize5);

  // hus
  fill(244, 69, 66);
  rect(windowWidth / 2 - 50, windowHeight / 2 - 50, 100, 100);

  // pipe
  fill(75, 75, 75);
  rect(windowWidth / 2 + 20, windowHeight / 2 - 95, 15, 30);

  // tak
  fill(88, 88, 88);
  triangle(windowWidth / 2 - 50, windowHeight / 2 - 50, windowWidth / 2, windowHeight / 2 - 100, windowWidth / 2 + 50, windowHeight / 2 - 50);

  // dør
  fill(133, 73, 30);
  rect(windowWidth / 2 - 30, windowHeight / 2 + 10, 25, 40);

  // vindu
  fill(76, 183, 186);
  rect(windowWidth / 2 - 35, windowHeight / 2 - 30, 25, 25);
  rect(windowWidth / 2 + 10, windowHeight / 2 - 30, 25, 25);

  // håndtak
  fill(205, 208, 37);
  ellipse(windowWidth / 2 - 10, windowHeight / 2 + 30, 5);

  // gress

  let grassWidth = 2;
  let grassHeight = 10;

  /*fill(grassC[0], grassC[1], grassC[2]);
  rect(grassX, grassY, grassWidth, grassHeight);

  fill(grassC2[0], grassC2[1], grassC2[2]);
  rect(grassX2, grassY2, grassWidth, grassHeight);

  fill(grassC3[0], grassC3[1], grassC3[2]);
  rect(grassX3, grassY3, grassWidth, grassHeight);

  fill(grassC4[0], grassC4[1], grassC4[2]);
  rect(grassX4, grassY4, grassWidth, grassHeight);

  fill(grassC5[0], grassC5[1], grassC5[2]);
  rect(grassX5, grassY5, grassWidth, grassHeight);*/


  // sau

  /*fill(255, 255, 255);
  ellipse(sheepX, sheepY, 25);

  if(sheepWait < 100){
    sheepWait += 1;
  } else if(sheepWait = 100){
    sheepWait = 0;
    sheepDesX = sheepX - 100, sheepX + 100;
    sheepDesY = sheepY - 100, sheepX + 100;
  }*/

  // vei
  /*fill(245, 229, 176);
  beginShape();
  vertex(45, 363);
  quadraticVertex(199, 97, 285, 85);
  bezierVertex(220, 116, 204, 217, 174, 360);
  endShape(CLOSE);*/

  // filter
  fill(255, 255, 255, 0);
  rect(0, 0, windowWidth, windowHeight);

  // linje

  sLineWidth = 17.5;
  sLineHeight = .5;
  sLineX = 16.5;

  bLineWidth = 25;
  bLineHeight = 1.5;
  bLineX = 12.5;


  fill(255, 255, 255);
  rect(25, 25, 1.5, windowHeight - 50);

  rect(bLineX, 23.5, bLineWidth, bLineHeight);

  rect(sLineX, lineHeight / 8 + 25, sLineWidth, sLineHeight);

  rect(sLineX, lineHeight / 4 + 25, sLineWidth, sLineHeight);

  rect(sLineX, lineHeight / 8 * 3 + 25, sLineWidth, sLineHeight);

  rect(bLineX, windowHeight / 2, bLineWidth, bLineHeight);

  rect(sLineX, lineHeight / 8 * 5 + 25, sLineWidth, sLineHeight);

  rect(sLineX, lineHeight / 4 * 3 + 25, sLineWidth, sLineHeight);

  rect(sLineX, lineHeight / 8 * 7+ 25, sLineWidth, sLineHeight);

  rect(bLineX, windowHeight - 25, bLineWidth, bLineHeight);

  //stroke(207, 207, 207);
  //strokeWeight(1);
  // sol ikon
  fill(250, 188, 17);
  ellipse(65, 30, 30);

  // sol/måne ikon
  fill(211, 205.5, 124.5);
  ellipse(65, windowHeight / 2, 30);

  // måne ikon
  fill(172, 223, 232);
  ellipse(65, windowHeight - 30, 30);
}
