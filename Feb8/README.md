# Simple Artwork: Light and Shadow

![Simple Artwork](https://github.com/l-mccarthy/IntroToIM/blob/main/Feb8/Simple_Artwork.gif)

## Reflection

In the beginning I wanted to create an interesting shape which I would then multiply across the x and y of the canvas using a 'for' loop, and to do that I opted with using lines to outline a shape rather than a simple 'rect' or 'ellipse'. I found that lines are very versatile as you can change the stroke weight and colour in order to simulate an illusion of 3D via light and shadow. As a result, I had each of the three lines correspond with a value in the grayscale in relation to where I wanted the imaginary light to come from. Additionally, there is no fourth line, despite the shape's square look, the viewer "fills in the blanks" in order to heighten the bevelled look.

However, I felt the artwork was too monotonous and orderly, and I also remembered Casey Reas’ talk on chance operations where he mentioned how such artwork can benefit from emulating the chaos of nature. Consequently, I added random variables in the loop to each x and y position, row and column, instead of having the shapes translate by the same increment every time. Still I didn't feel like I had the artwork fulfill my purpose yet as it felt too static, despite the refreshing randomisation. So, I opted to include some simple animation, and way to create the illusion of moving light and shadow was to change the background colour's lightness. Yet, I ran into the problem of having the background being over my shapes as it was not in the 'setup' function unlike my shapes, but I also realised I could not animate if was not in the 'draw' function. Thus, I had to deal with the background literally being over my shapes, but by dialling down on the background colour's opacity I was able to achieve a happy balance of the changing colour and visibility of my shapes.

## JavaScript Code

```
// Global variables
let redValue = 255
let greenValue = 255

function setup() {
  createCanvas(720, 700);
  
  // 'For' loops regarding x and y of lines
  for (let linesXPos = 0;
       linesXPos < width;
       linesXPos = linesXPos + random(80, 150)) {
    for (let linesYPos = 0;
       linesYPos < height;
       linesYPos = linesYPos + random(80, 150)) {
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
  noStroke()
  // Draw background as rectangle encompassing the canvas
  rect(0, 0, 720, 700)
} 

// Function of temporary variables on where to put lines
function drawLinesAt(x, y) {
  strokeWeight(5)
  // Top 'shadow' line
  stroke(0)
  line(x + 25, y + 20, x + 80, y + 20);
  // Middle right line
  stroke(126);
  line(x + 80, y + 20, x + 80, y + 75);
  // Bottom 'light' line
  stroke(255);
  line(x + 80, y + 75, x + 25, y + 75);
}
```
