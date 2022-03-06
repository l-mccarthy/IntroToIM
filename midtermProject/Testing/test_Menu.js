// determine whether the game has started
let gamemode;

function setup() {
  // initially the game has not started
  gamemode = false;
  createCanvas(500, 500);
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
    playGame();
  }
}

// Contents of the menu screen displayed before game begins
function menuScreen() {
  background(255)
  text("Click anywhere to begin", 30, 40)
}

// function that toggles starting the game
function mouseClicked() {
  gamemode = true;
}

// template of game-related functions
function playGame() {
  background(0)
  circle(250,250,250)
}
