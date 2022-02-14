// Declare an array of bubbles
let bubbles = [];

function setup() {
  createCanvas(700, 500);
  // Slow down frame rate to make movement less erratic
  frameRate(30);
  // create 8 initial bubbles with a for loop in the function below
  addBubbles(8);
}

function addBubbles(amount) {
  // Add an "amount" of bubbles to the bubbles array with a for loop
  for (let bubbleCount = 0; bubbleCount < amount; bubbleCount++) {
    let myBubble = new Bubble(random(width), random(-height));
    // Push each bubble to the array
    // Each bubble begins at random location above and along canvas
    bubbles.push(myBubble);
  }
}

function draw() {
  background(0);
  // Class functions to move and show all bubbles
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  // Every set interval add 8 more bubbles
  if (frameCount % 50 === 0) {
    addBubbles(8);
  }
}

function mousePressed() {
  // Class function to simulate popping for all bubbles
  for (let bubble of bubbles) {
    bubble.pop();
  }
}

//////////////////////////////////////////
///////////////Bubble Class///////////////
//////////////////////////////////////////

class Bubble {
  // Declaring global variables for bubble class
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Vary size of every bubble
    this.radius = random(10, 40);
    // No bubble starts as already "popped" (not visible)
    this.popped = false;
  }

  move() {
    // Falling and fluttering movements of the bubble
    this.x = this.x + random(-10, 10);
    this.y = this.y + 2;
  }

  show() {
    // if statement to display bubble if NOT popped
    if (!this.popped) {
      // Bubble appearance info
      stroke(random(55, 255));
      strokeWeight(4);
      noFill();
      ellipse(this.x, this.y, this.radius * 2);
    }
  }

  pop() {
    let popCheck = dist(this.x, this.y, mouseX, mouseY);
    // if statement to determine if mouse is within/on the bubble
    if (popCheck <= this.radius) {
      this.popped = true;
    }
  }
}
