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
* Implementing a starting screen with instructions and maybe a "Press [Enter] to try again" screen.
* Creating the moving cars.
* Have any collision with a car end the game.

### How I plan to/have solved these parts

* I will create a function that resets the position of all the shapes in my program (the fox and chicken at the moment), along with adding a number to the "level" counter which will be displayed as text.
* Keeping track of and adding a score count will be solved in tandem the new level function because in my game advancing to the next level will increase your score count by one. There will be an if statement to track and renew a highscore, each number being displayed so that it doesn't interfere with the game mechanics - so likely on the top corners.
* The "restart" will occur when a key gets pressed within the keyPressed function (alongside the arrow keys for movement) and it will bring every shape back to its starting position as well as the level/score count back to zero. I also might want to include a button, likely the escape key, which will bring the user back to the main menu/instructions screen, thereby not only restarting the game.
* _How I plan to solve the rest is to be determined_ (WIP: Obstacles will be an array; obstacles will be faster the higher the level; collision detection using if statements, an endGame function)

### Testing and Progress

_Test programs will be attached as .js files in the midtermProject folder._

Firstly, designing the fox and chicken was the easiest part as I am comfortable with using shapes, so I will not go in detail. What I found most helpful and efficient was assigning global variables to the x, y, height, and width, of the main shape of these avatars and using divisions and multiplications of these values to construct corresponding shapes. As a result, I did not need to use a function to display my mouse coordinates, which probably would have been more time consuming.

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

Next on my list of challenges was trying to find a way to 

```
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (foxX > 0) {
      foxX -= foxIncrement;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (foxX < 500) {
      foxX += foxIncrement;
    }
  } else if (keyCode === UP_ARROW) {
    foxY -= foxIncrement;
  } else if (keyCode === DOWN_ARROW) {
    if (foxY < 500) {
      foxY += foxIncrement;
    }
  } else if (keyCode === BACKSPACE) {
    gameState = true;
    level = 0;
    foxX = 250;
    foxY = 400;
    chickenY = 200;
    loop();
  }
}
```

![testMovement](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/testMovement.gif)
