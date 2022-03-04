let myCars = [];
let carSpacingY = 60;
let carFrequency = 15;
let level = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(100);
  fill(255);
  textSize(32);
  text(level, 20, 40);
  createMyCars();
}

function doubleClicked() {
  myCars.length = 0;
  updateMyCars();
  level++;
}

function createMyCars() {
  for (let i = 0; i < myCars.length; i++) {
    myCars[i].show();
    myCars[i].drive();
  }
}

function updateMyCars() {
  for (let i = 0; i < carFrequency; i++) {
    myCars.push(new Car());
  }
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    myCars.length = 0;
    level = 0;
  }
}

///////////////////////////////////////////
/////////////////Car Class/////////////////
///////////////////////////////////////////

function Car() {
  this.carWidth = 60;
  this.carHeight = 30;
  
  // game difficulty increases as speed increases
  this.carSpeed = level;

  // y spacing between cars
  // cars will be generated across 7 even rows
  this.posY = carSpacingY * round(random(1, 7));

  // determining direction of car
  // using a "heads or tails" randomising if statement
  // cars moving left or right will be an even split
  // right-moving cars will appear on the left side of the canvas
  // and vice versa
  if (random(2) < 1) {
    this.posX = random(-250, 250);
    this.direction = "right";
  } else {
    this.posX = random(250, 750);
    this.direction = "left";
  }

  // movement of car
  // if statement to reverse speed (direction) or not
  // nested if statement to have cars reappear once driven off canvas
  this.drive = function () {
    if (this.direction == "right") {
      this.posX += this.carSpeed;
      if (this.posX > 500 + this.carWidth) {
        this.posX = random(-250, 0);
      }
    } else if (this.direction == "left") {
      this.posX -= this.carSpeed;
      if (this.posX < 0 - this.carWidth) {
        this.posX = random(500, 750);
      }
    }
  }
  
  // car wiil be a rectangle at the moment
  // will add wheels and maybe windows later
  this.show = function () {
    rect(this.posX, this.posY, this.carWidth, this.carHeight);
  }
}
