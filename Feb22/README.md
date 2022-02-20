# Data Visualization: Movie Ratings

![gif](https://github.com/l-mccarthy/IntroToIM/blob/main/Feb22/Data_Visualization.gif)

## Reflection

As a film student, it comes without saying that I love movies. Therefore, I wanted to create some sort of data visualization pertaining this topic. Some of my ideas included showing how many movies are being made each year for different countries, or ?. In the end, I decided on a more personal concept as I realised I had this data readily available to me. I use an IMDB account (Internet Movie Database) to keep track of my watchlist as well as movies I have already seen, and once I have seen a movie I would enter a star rating out of 10. Conveniently, the website has a feature where I can export my ratings relative to the movie to a .csv file, as shown below.

![screenshot](https://github.com/l-mccarthy/IntroToIM/blob/main/Feb22/IMDB_Export.JPG)

Now, with a .csv file of nearly 1,000 ratings, I wanted to visualize my personal ratings for each movie along with the name of the movie by using text, which we also recently learned. Using the preload function to asynchronously load the external .csv file, I ran into the problem of not being able to display the text when coding the draw function. After checking the reference page for loadTable I realised I had forgotten to include the "header" option which looks for a header row.

```
function preload() {
  // Preload function to load .csv file
  imdbData = loadTable("ratings.csv", "header");
}
```

Another issue I ran into was dealing with the large amount of data I had. I could have made the .csv file much smaller with only 20 or so ratings so it can all fit on the canvas, but that, in my opinion, would defeat the purpose of my concept. I had thought of representing the data with circles, whereby the size increases with rating, but with text it would look very messy. Hence, I decided to represent my ratings as a bar graph (rectangles) with height increasing relative to the rating. Then the text would be translated to situate "above" the bar and at a 90 degree angle to not clash with other movie titles.

```
// Text labels
    push();
    // Translation for text to be visible above data bars
    translate(i * 40 + 20, height - myRating[i] * growAnimation - 10);
    // Rotation tilting the text at 90°
    rotate(radians(-90));
    fill(255);
    text(movieTitle[i], 0, 0);
    pop();
```

Furthermore, I would have liked to add a function to make the user somehow scroll across my ratings but I tried using translations and it only increased the distance between the rectangles. In the end, I just stretched the canvas to be long enough to fit every rating and scroll using the scrolling bar that is built into the p5.js website, not in my program. Unfortunately, this means, as an entire image, my data visualization is very, very long.

```
function setup() {
  // Large x value to accommodate long data table
  createCanvas(30000, 600);
```
