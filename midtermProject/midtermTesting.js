let foxX = 250;
let foxY = 250;
let foxWidth = 20;
let foxHeight = 40;
let level = 0;
let highscore = 0;
let segment = 50;
let gameState = true;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(126, 200, 80);

  checkFox();
  checkLevel();
}

function checkFox() {
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

function checkLevel() {
  if (foxY == 0) {
    foxY = 500;
    level++;
    if (level > highscore) {
      highscore = level;
    }
  }
  // level (left) and highscore (right) text
  textSize(32);
  text(level, 20, 40);
  text(highscore, 460, 40);
}

function keyPressed() {
  switch (keyCode) {
    case 37: // left arrow
      if (foxX > 0) {
        foxX -= segment;
      }
      break;
    case 39: // right arrow
      if (foxX < 500) {
        foxX += segment;
      }
      break;
    case 38: // up arrow
      foxY -= segment;
      break;
    case 40: // down arrow
      if (foxY < 500) {
        foxY += segment;
      }
      break;
    case 32: // spacebar
      gameState = true;
      level = 0;
      foxX = 250;
      foxY = 250;
      loop();
      break;
  }
}
