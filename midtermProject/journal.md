# Midterm Project Journal

_This journal will be edited and updated chronologically (i.e. some things I write will not match with later updates)_

### Initial concept for the project

Everyone has heard the age old "why the chicken crossed the road" joke many times, as well as its countless variations. In fact, a game developer called Hipster Whale made a mobile game back in 2014 called "Crossy Road" that plays with this joke, making a chicken cross an endless amount of roads without being flattened by a speeding vehicle. Movement mechanics are simple: the player must tap to go forward or swipe the screen in the appropriate direction to move the character horizontally or backwards. The game was a smash hit and dominated app stores on iOS and Android.

![Crossy Road](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/crossy_road.jpg)

However, the main concept of the game has been done before, back in 1981 with an arcade game called "Frogger". The object of the game is for the player to direct frogs to their homes one by one by crossing a busy road and navigating a river full of hazards. Very similar! Except, Crossy Road is endless whereas Frogger is contained to a single screen layout.

![Frogger](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/Frogger_game_arcade.png)

As a result, I plan to take this concept and create my own spin on it in p5.js. I wanted to continue with the chicken-crossing-the-road motif established by "Crossy Road" and I remembered a certain variation of the joke:

_Why did the fox cross the road?_
_It was chasing the chicken._

Why not have the player play as the fox? The fox will chase the chicken across this treacherous road and the game ends when the fox catches the chicken. Thus, giving the game a greater objective than simply getting as high a score as possible. However, I am yet to decide if this is the direction I want to go - if the running chicken is part of the game or simply a "carrot and stick" mechanism. Regardless, I will be implementing the high score element whether or not I will need it in the final project, we'll see. In addition, I will obviously have obstacles in the game, likely cars, but I am not sure if I will also have the logs obstacle (the player will cross a body of water on moving logs) as seen in "Frogger" since it seems too complex for me to wrap my head around and code.

### Risky/complex/unknown part(s) of my project

* Resetting/creating a new level.
* Keeping track of score.
* Finding a way to restart the game without closing and restarting the program.
* Creating the moving cars.
* Have any collision with a car end the game.
* Implementing a starting screen with instructions and maybe a "Press [Enter] to try again" screen.

### How I plan to/have solved these parts

* I will create a function that resets the position of all the shapes in my program (the fox and chicken at the moment), along with adding a number to the "level" counter which will be displayed as text.
* Keeping track of and adding a score count will be solved in tandem the new level function because in my game advancing to the next level will increase your score count by one. There will be an if statement to track and renew a highscore, each number being displayed so that it doesn't interfere with the game mechanics - so likely on the top corners.
* The "restart" will occur when a key gets pressed within the keyPressed function (alongside the arrow keys for movement) and it will bring every shape back to its starting position as well as the level/score count back to zero. I also might want to include a button, likely the escape key, which will bring the user back to the main menu/instructions screen, thereby not only restarting the game.
* _How I plan to solve the rest is to be determined_ (WIP: Obstacles will be an array; obstacles will be faster the higher the level; collision detection using if statements, an endGame function)

### Testing and Progress

_Test programs will be attached as .js files in the Testing folder._

#### Update #1

Firstly, designing the fox and chicken will probably one of the easiest parts as I am comfortable with using shapes, so I will not go in detail. What I found most helpful and efficient was assigning global variables to the x, y, height, and width, of the main shape of these avatars and using divisions and multiplications of these values to construct corresponding shapes. As a result, changing the foxX or foxY variable for example will effect all shapes attributed to the fox. In addition, I did not need to use a function to display my mouse coordinates, which probably would have been more time consuming when making the shapes.

#### Update #2

It was difficult to think about what a new level would be defined as, as well as how I would go about doing so in code. I realised I had to think more like a computer and come up with the simplest way to portray such a progression. Below is the function I created to make it look like the game has advanced a level and gives the player the illusion of an endless game, while I am really just resetting the fox's and chicken's positions, making it look like the fox has crossed the border of the first level into the next. The createLevel function is then implemented in the draw function. Later on I will also be adding a section in this function where I generate new obstacles. Plus, when creating a new "level" I added a score count which is then displayed on the canvas. Fortunately, there were no problems with this step so whatever plan I outlined in the bullet points above is essentially how I solved it.

```
function createLevel() {
  if (foxY == 0) {
    foxY = 500;
    chickenY = 200;
    level++;
    if (level > highscore) {
      highscore = level;
    }
  }
  // level (left) and highscore (right) text
  fill(255);
  textSize(32);
  text(level, 20, 40);
  text(highscore, 460, 40);
}
```
![testLevel](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/testLevel.gif)

#### Update #3

Next on my list of challenges was trying to find a way to restart the game while _in_ the game. I quickly realized I needed a keyPressed function for the player to interact with my game. Most notably are the arrow keys to move the fox avatar, this was achieved by simple if and else if statements, as well as nested if statements to create borders (the canvas edges) for the avatar which is demonstrated in the GIF below. Of course, there is no border for the up arrow as the player needs to reach y = 0 to advance to the next level. I needed a "restart" key within this function and using the backspace key aptly fitted the action I wanted the key to do when pressed. Like with the createLevel function, parameters on shape positioning were set to a specific amount, which in this case are the starting positions. When incorporating obstacles later in my program, I will have to include a reset on a certain parameter, likely the loop of the amount of obstacles - which will be zero on level zero. 

```
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    if (foxX > 0) {
      foxX -= foxIncrement;
    }
  } else if (keyCode == RIGHT_ARROW) {
    if (foxX < 500) {
      foxX += foxIncrement;
    }
  } else if (keyCode == UP_ARROW) {
    foxY -= foxIncrement;
  } else if (keyCode == DOWN_ARROW) {
    if (foxY < 500) {
      foxY += foxIncrement;
    }
  } else if (keyCode == BACKSPACE) {
    level = 0;
    foxX = 250;
    foxY = 400;
    chickenY = 200;
  }
}
```

![testMovement](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/testMovement.gif)

#### Update #4

The following challenge is creating the array of moving cars. I decided to make a separate p5.js test program to test this crucial aspect of my game. Fortunately, there was already a [similar example](https://editor.p5js.org/aaronsherwood/sketches/JO7e1p6aDr) provided by Prof. Aaron Sherwood where he demonstrated OOP by using cars that drove across the screen. As a result, I amalgamated his code to fit what I wanted, which suprisingly resulted in many deviations to the original. Although, the functions Prof. used _outside_ the class function were very useful, for instance, I am still not sure if I understand what "pushing to the array" is but I know how to use it because of this example's incorporation of it. A notable problem I solved was using randomisation in a Boolean manner to create an even split of cars moving from left to right, though I wonder if I could have used actual Boolean methods for this.

```
  if (random(2) < 1) {
    this.posX = random(-250, 250);
    this.direction = "right";
  } else {
    this.posX = random(250, 750);
    this.direction = "left";
  }
```

Another neat trick was equating the car's speed to the level count, whereby game difficulty increases as the player advances.

```
  this.carSpeed = level;
```

Currently, I am not bothered to worry about the aesthetics yet as the functionality of the code is paramount, which is why it does look a bit bland and nothing like a car. Plus, I am not sure why the cars don't move on level one.

![testCars](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/testCars.gif)

#### Update #5

Collision detection! Initially this was a lofty concept to grasp but it ended up having a fairly simple solution that used an if statement. This time, I was editing and testing directly into the main program. I made a collision checking function inside the car class that checks if the x and/or y coordinates of the player's fox match with or are within  that of a car's. If true, then it calls the gameStop function which ends the loop, thereby ending the game as nothing is moving, and I will add some text that prompts the player to restart the game. Plus, I also realized I had to make a function outside the class that performed the check for every car in the array, which I called "checkForCollision", that was added to the draw function. 

```
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
  }
```

#### Update #6

Although I had all the in-game mechanics finally figured out, my last problem to solve was creating the starting screen. While the main menu should have instructions, be easy to navigate, and be aesthetically pleasing, this is not what I am worrying about. What I need to test is to somehow implement a function that waits until something is called for the game to start, and within this function the main menu will be displayed. Therefore, I created a variable called "gamemode" that when false calls the main menu function and when true, via a mouseClicked funciton, calls the functions relative to the actual game. In the test, it was simply an ellipse and background change. A simple but effective solution.

```
function draw() {
  clear();
  // if statement calls menu function first until gamemode is true
  // this is possible because gamemode starts as false in setup
  if (gamemode == false) {
    menuScreen();
  }
  
  // once gamemode becomes true (via mouseClicked) the game begins
  // all functions related to the game are called
  if (gamemode == true) {
    playGame();
  }
}
```

![testMenu](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/testMenu.gif)

#### Update #7

Later on, past the testing phase, elements like loading in sound and images were added to the project. These additions were much more simple than the rest of the project but still fun to play around with. While important, these elements have been best explained in the comments within the code as there is not much else to say about them. Soon, I will retrieve some feedback from user testing. I am very excited with how this project turned out!

[Link to final project code](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/midtermProject.js)
