# OOP Generative Artwork: Bubbles That Pop!

![gif](https://github.com/l-mccarthy/IntroToIM/blob/eaf2b64250de24cec1a1307d002d995077a9339e/Feb15/OOP_Generative_Artwork.gif)

## Reflection

The  overall concept of my artwork is to simply showcase the behaviour of bubbles, to watch them as they slowly fall and flutter, and to perhaps interact with them. To try and get some ideas, I was brainstorming common objects that appear in nature which I can program a class out of. As I settled on the bubble, my goal was to elevate Dan Shiffman’s tutorials on Object Oriented Programming (https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) into an artwork with aesthetic appeal. In his tutorial, Shiffman demonstrated how to make a simple class, whereby he used the properties of a bubble as inspiration. As a result, I used his class as a basis for my artwork but changed a few aspects which I found unfit, such as making all the bubbles move uniformly downards and having different random sizes for each bubble. Then I had to think about the "generative" side of the project, since I had the object but I needed to incorporate randomness to achieve this goal. Hence, along with random sizes (1), the bubbles shifted side to side on random intervals (2) and appeared in random locations within the boundaries of the canvas (3). In addition, I made the bubbles fluctuate in colour in order to represent their material properties and shape as if light were bouncing off them (4). Therefore, every time the program runs it displays a different, unique outcome.

### 1
```
    this.radius = random(10, 40);
```
### 2
```
    this.x = this.x + random(-10, 10);
```
### 3
```
for (let bubbleCount = 0; bubbleCount < amount; bubbleCount++) {
    let myBubble = new Bubble(random(width), random(-height));
    bubbles.push(myBubble);
  }
```
### 4
```
      stroke(random(55, 255));
```

While I did have a lot of fun playing around with the artwork's generative aspect, I was unsure on how to keep on adding objects via a loop. I then remembered Prof. Aaron's example with the cars (https://editor.p5js.org/aaronsherwood/sketches/JO7e1p6aDr) and took a look at his code. The rest was simply trial and error, and what helped speed up the process was the console telling me what the error was and printing coordinates with mouseX and mouseY. Looking back on it now, I am not too satisfied with how the bubbles tend to overlap. I did try and lessen the amount of bubbles being generated but then the artwork began to look unappealingly sparse very quickly. So, I sacrificed the sense of realism for something more visually pleasing. However, I would like to explore if I can make the bubbles stick together when they touch, or maybe even pop, so that this overlap won't occur, but this is too complex for me at the moment.
