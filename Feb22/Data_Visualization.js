// Global variables
let imdbData;
let myRating;
let movieTitle;
let growAnimation = 0;

function preload() {
  // Preload function to load .csv file
  imdbData = loadTable("ratings.csv", "header");
}

function setup() {
  // Large x value to accommodate long data table
  createCanvas(30000, 600);
  // Numeric values from the "Your Rating" column
  myRating = imdbData.getColumn("Your Rating");
  // Label data from the movie "Title" column
  movieTitle = imdbData.getColumn("Title");
}

function draw() {
  background(0);

  for (let i = 0; i < myRating.length; i++) {
    // Data bars
    fill(210, 190, 0);
    // Height of each value based on the number each component represents
    rect(i * 40, height, 40, -myRating[i] * growAnimation);

    // Text labels
    push();
    // Translation for text to be visible above data bars
    translate(i * 40 + 20, height - myRating[i] * growAnimation - 10);
    // Rotation tilting the text at 90°
    rotate(radians(-90));
    fill(255);
    text(movieTitle[i], 0, 0);
    pop();
  }

  // if loop to animate the data bars "growing"
  if (growAnimation < 40) {
    growAnimation = growAnimation + 1;
  }
}
