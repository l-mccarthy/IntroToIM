// Global variables
let redValue = 255;
let greenValue = 255;

function setup() {
  createCanvas(720, 700);

  // 'For' loops regarding x and y of lines
  for (
    let linesXPos = 0;
    linesXPos < width;
    linesXPos = linesXPos + random(80, 150)
  ) {
    for (
      let linesYPos = 0;
      linesYPos < height;
      linesYPos = linesYPos + random(80, 150)
    ) {
      drawLinesAt(linesXPos, linesYPos);
    }
  }
}

// 'Draw' function for animating background colour
function draw() {
  // Change the value of red
  if (redValue == 0) redValue = 255;
  redValue -= 1;

  // Change the value of green
  if (greenValue == 0) greenValue = 255;
  greenValue -= 1;

  // Select the fill for background
  rectColour = color(redValue, greenValue, 0);
  // Select opacity for background
  rectColour.setAlpha(2);
  fill(rectColour);
  noStroke();
  // Draw background as rectangle encompassing the canvas
  rect(0, 0, 720, 700);
}

// Function of temporary variables on where to put lines
function drawLinesAt(x, y) {
  strokeWeight(5);
  // Top 'shadow' line
  stroke(0);
  line(x + 25, y + 20, x + 80, y + 20);
  // Middle right line
  stroke(126);
  line(x + 80, y + 20, x + 80, y + 75);
  // Bottom 'light' line
  stroke(255);
  line(x + 80, y + 75, x + 25, y + 75);
}
