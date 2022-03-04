// fox variables
let foxX = 250;
let foxY = 400;
let foxWidth = 20;
let foxHeight = 40;
// how many pixels the fox moves per key pressed
let foxIncrement = 50;

// chicken variables
let chickenX = 250;
let chickenY = 200;
let chickenWidth = 15;
let chickenHeight = 25;
// how many pixels the chicken moves uniformly
let chickenIncrement = 3

let level = 0;
let highscore = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(126, 200, 80);
  createFox();
  createChicken();
  createLevel();
}

function createFox() {
  noStroke();
  // body
  fill(219, 103, 31);
  rect(foxX, foxY, foxWidth, foxHeight);
  // ears
  fill(50);
  rect(foxX - 8, foxY - 18, foxWidth / 4, foxHeight / 6);
  rect(foxX + 8, foxY - 18, foxWidth / 4, foxHeight / 6);
  // tail
  fill(250);
  rect(foxX, foxY + 18, foxWidth / 2, foxHeight / 4);
}

function createChicken() {
  // body
  fill(250);
  rect(chickenX, chickenY, chickenWidth, chickenHeight);
  // wings
  rect(chickenX + random(8, 12), chickenY + 5, chickenWidth / 3, chickenHeight / 3);
  rect(chickenX - random(8, 12), chickenY + 5, chickenWidth / 3, chickenHeight / 3);
  // comb
  fill(255, 38, 0);
  rect(chickenX, chickenY - 6, chickenWidth / 3, chickenHeight / 3);
  // beak
  fill(255, 123, 15);
  rect(chickenX, chickenY - 15, chickenWidth / 4, chickenHeight / 6);
  // uniform upward movement that clears past the screen
  if (chickenY > -chickenHeight) {
    chickenY -= chickenIncrement;
  }
}

function createLevel() {
  if (foxY == 0) {
    foxY = 500;
    chickenY = 200;
    level++;
    if (level > highscore) {
      highscore = level;
    }
  }
  // level (left) and highscore (right) text
  fill(255);
  textSize(32);
  text(level, 20, 40);
  text(highscore, 460, 40);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (foxX > 0) {
      foxX -= foxIncrement;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (foxX < 500) {
      foxX += foxIncrement;
    }
  } else if (keyCode === UP_ARROW) {
    foxY -= foxIncrement;
  } else if (keyCode === DOWN_ARROW) {
    if (foxY < 500) {
      foxY += foxIncrement;
    }
  } else if (keyCode === BACKSPACE) {
    level = 0;
    foxX = 250;
    foxY = 400;
    chickenY = 200;
  }
}
