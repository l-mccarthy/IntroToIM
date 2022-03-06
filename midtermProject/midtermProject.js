///////////////////////////////////////////////////////
//////////////////// Liam McCarthy ////////////////////
//// Midterm Project: "It Was Chasing the Chicken" ////
////////// Introduction To Interactive Media //////////
////////////////////// 8/03/2022 //////////////////////
///////////////////////////////////////////////////////

// determine whether the game has started
let gamemode;

// declare fox variables
let foxX = 250;
let foxY = 400;
let foxWidth = 20;
let foxHeight = 40;
// how many pixels the fox moves per key pressed
let foxIncrement = 50;

// declare chicken variables
let chickenX = 250;
let chickenY = 200;
let chickenWidth = 15;
let chickenHeight = 25;
// how many pixels the chicken moves uniformly
let chickenIncrement = 3;

// declare car array + variables outside of class
let myCars = [];
let carSpacingY = 50;
let carFrequency = 10;

let level = 0;
let highscore = 0;

// asynchronous loading of sound and image files before setup function
function preload() {
  imageFox = loadImage("fox.png"); // fox vector image
  ambience = loadSound("highway_ambience.mp3"); // ambience + chicken
  carSound = loadSound("car_horn.wav"); // car horn sound
}

function setup() {
  // initially the game has not started
  gamemode = false;
  createCanvas(500, 500);
  rectMode(CENTER);
  // loop ambience in setup (not draw) so it doesn't loop constantly
  ambience.loop();
}

function draw() {
  clear();
  // if statement calls menu function first until gamemode is true
  // this is possible because gamemode starts as false
  if (gamemode == false) {
    menuScreen();
  }

  // once gamemode becomes true (via mouseClicked) the game begins
  // all functions related to the game are called
  if (gamemode == true) {
    background(126, 200, 80); // green
    noStroke();
    createFox();
    createChicken();
    createMyCars();
    createLevel();
    checkForCollision();
  }
}

// Contents of the menu screen displayed before game begins
function menuScreen() {
  // using vector image of a fox as the menu background
  image(imageFox, 0, 0);

  // menu on-screen text
  stroke(0); // black
  strokeWeight(3);
  fill(255); // white
  textAlign(CENTER);
  // game title
  textSize(32); // large
  textFont("Harlow Solid");
  text("It Was Chasing the Chicken", 250, 115);
  // game instructions
  textSize(24); // medium
  textFont("Calibri");
  text(
    "Dodge the cars and beat your highscore" +
    "\n Arrow keys to move",
    250, 400
  );
  noStroke();
  fill(0); // black
  textSize(16); // small
  text("Click anywhere to begin", 410, 480);
}

// function that toggles starting the game
function mouseClicked() {
  gamemode = true;
}

function createFox() {
  // body
  fill(219, 103, 31); // orange
  rect(foxX, foxY, foxWidth, foxHeight);

  // ears
  fill(50); // dark grey
  rect(foxX - 8, foxY - 18, foxWidth / 4, foxHeight / 6);
  rect(foxX + 8, foxY - 18, foxWidth / 4, foxHeight / 6);

  // tail
  fill(250); // white
  rect(foxX, foxY + 18, foxWidth / 2, foxHeight / 4);
}

function createChicken() {
  // body
  fill(250); // white
  rect(chickenX, chickenY, chickenWidth, chickenHeight);

  // wings
  rect(
    chickenX + random(8, 12), // random to make wing "flap"
    chickenY + 5,
    chickenWidth / 3,
    chickenHeight / 3
  );
  rect(
    chickenX - random(8, 12), // random to make wing "flap"
    chickenY + 5,
    chickenWidth / 3,
    chickenHeight / 3
  );

  // comb
  fill(255, 38, 0); // red
  rect(chickenX, chickenY - 6, chickenWidth / 3, chickenHeight / 3);

  // beak
  fill(255, 123, 15); // orange
  rect(chickenX, chickenY - 15, chickenWidth / 4, chickenHeight / 6);

  // uniform upward movement that clears past the screen
  if (chickenY > -chickenHeight) {
    chickenY -= chickenIncrement;
  }
}

// function to organise class functions into the draw function
// getting length of myCars array by doing "array name dot length"
function createMyCars() {
  for (let i = 0; i < myCars.length; i++) {
    // accessing the array's elements:
    // two functions describing what makes a car a "car"
    myCars[i].drawCar(); // the car exists
    myCars[i].drive(); // the car drives
  }
}

// creating a certain amount of cars with a for loop
// 10 cars in this case as carFrequency = 10
function updateMyCars() {
  for (let i = 0; i < carFrequency; i++) {
    // push each car to the array
    myCars.push(new Car());
  }
}

// function to make the game advance a level
function createLevel() {
  // if fox leaves the canvas reset its y position to the bottom
  // reset chicken to the near center of canvas
  // add one to the level variable
  if (foxY == 0) {
    foxY = 500;
    chickenY = 200;
    level++;
    // have highscore equate to level if the level variable is greater
    if (level > highscore) {
      highscore = level;
    }
    // reset myCars array otherwise cars will accumulate
    myCars.length = 0;
    // create 10 new cars
    updateMyCars();
  }

  // level (top-left) and highscore (top-right) on-screen text
  fill(255);
  textSize(20);
  text("LEVEL", 30, 25);
  text("HIGHSCORE", 445, 25);
  textSize(32);
  textFont("Impact");
  text(level, 30, 60); // level variable value
  text(highscore, 445, 60); // highscore variable value
}

// another separate function relating to array
// calls class function that checks if the fox touches a car
function checkForCollision() {
  for (let i = 0; i < myCars.length; i++) {
    myCars[i].collision();
  }
}

// function that stops the game by ending the loop
// this is called if the collision is true
function gameStop() {
  // most video games have a red filter on "game over screens"
  // color is red with some blue to compensate for green background
  squareColor = color(255, 0, 75);
  squareColor.setAlpha(100); // add some transparency
  fill(squareColor);
  rect(250, 250, 500);

  // text to inform player game has ended
  // simple instructions on how to restart game
  stroke(0); // black
  fill(250); // white
  textAlign(CENTER);
  text("GAME OVER" + "\n\n Press [Enter] to try again", 250, 250);

  // plays the car horn sound when collision is detected
  // further signifies to player the game has ended
  carSound.play();
  noLoop();
}

// player can control the fox via if and else if statements
// left and right control x-axis and up and down control y-axis
// remember every increment is 50 pixels
// every arrow key has a canvas boundary except up arrow
// player has ability to restart the game by pressing enter
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    // move left if fox is not on leftmost edge
    if (foxX > 0) {
      foxX -= foxIncrement;
    }
  } else if (keyCode == RIGHT_ARROW) {
    // move right if fox is not on rightmost edge
    if (foxX < 500) {
      foxX += foxIncrement;
    }
  } else if (keyCode == UP_ARROW) {
    // no boundary, foxY needs to equal 0 to advance levels
    foxY -= foxIncrement;
  } else if (keyCode == DOWN_ARROW) {
    // move down if fox is not on the bottom edge
    if (foxY < 500) {
      foxY += foxIncrement;
    }
  } // enter key is the restart key
  else if (keyCode == ENTER) {
    foxX = 250; // reset foxX to starting value
    foxY = 400; // reset foxY to starting value
    chickenY = 200; // reset chickenY to starting value
    myCars.length = 0; // reset myCars array length
    level = 0; // reset level variable (not highscore!)
    loop(); // loop because gameStop function stops the loop
  }
}

///////////////////////////////////////////
//////////////// Car Class ////////////////
///////////////////////////////////////////

function Car() {
  // global variables for each car's dimensions
  this.carWidth = 60;
  this.carHeight = 30;
  this.wheelWidth = this.carWidth * 0.2;
  this.wheelHeight = this.wheelWidth / 2.5;

  // game difficulty increases as speed increases and player advances
  this.carSpeed = level;

  // Deliberate y spacing between cars
  // 50 pixels between center of each car
  // cars will be generated across 7 even lanes
  // lanes would not be even without "round"
  this.posY = carSpacingY * round(random(1, 7));

  // determining direction of car
  // using a "heads or tails" randomising if statement
  // cars moving left or right will be closer to an even split
  // right-moving cars will appear on the left side of the canvas
  // and vice versa
  if (random(2) < 1) {
    this.posX = random(-250, 250);
    this.direction = "right";
  } else {
    this.posX = random(250, 750);
    this.direction = "left";
  }

  // function to determine car movement
  // equating variable to a class function
  // alternative to calling class functions using "this."
  this.drive = function () {
    // if statement to reverse speed (direction) or not
    // nested if statement to have cars reappear once driven off canvas
    // cars will have some randomisation on where they reappear
    // this is to make the looped movement more "natural"
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
  };

  // function for the shapes creating the car
  this.drawCar = function () {
    // car body
    fill(212, 212, 212); // silver
    rect(this.posX, this.posY, this.carWidth, this.carHeight);

    fill(0); // black
    // left top wheel
    rect(
      this.posX - this.carWidth / 2 + this.wheelWidth / 2,
      this.posY - this.carHeight / 2 - this.wheelHeight / 2,
      this.wheelWidth,
      this.wheelHeight
    );
    // right top wheel
    rect(
      this.posX + this.carWidth / 2 - this.wheelWidth / 2,
      this.posY - this.carHeight / 2 - this.wheelHeight / 2,
      this.wheelWidth,
      this.wheelHeight
    );
    // left bottom wheel
    rect(
      this.posX - this.carWidth / 2 + this.wheelWidth / 2,
      this.posY + this.carHeight / 2 + this.wheelHeight / 2,
      this.wheelWidth,
      this.wheelHeight
    );
    // right bottom wheel
    rect(
      this.posX + this.carWidth / 2 - this.wheelWidth / 2,
      this.posY + this.carHeight / 2 + this.wheelHeight / 2,
      this.wheelWidth,
      this.wheelHeight
    );
  };

  // function to create check for collision between car and fox (player)
  this.collision = function () {
    // if statement stops the game if true
    // checks if fox is on either edge of the car (x-axis)
    // and if y positioning are equal
    // possible because foxIncrement and carSpacingY are both 50
    if (
      foxX < this.posX + this.carWidth / 2 + foxWidth / 2 &&
      foxX > this.posX - this.carWidth / 2 - foxWidth / 2 &&
      this.posY == foxY
    ) {
      gameStop();
    }
  };
}
