# Midterm Project: _It Was Chasing the Chicken_

Playing on a variation of the "chicken crossing the road" joke, my game answers the question "why did the _fox_ cross the road?" with "because it was chasing the chicken." As a result, the user plays as a fox that is chasing after an elusive chicken through a busy, chaotic - and seemingly endless - highway. My game would be classified as an endless runner game, which is a subgenre of platform game in which the player character is forced to run for an infinite amount of time while avoiding obstacles, which are cars in this case. While the endless nature of the game may seem daunting to the player, I made sure to make the game slightly more difficult as the player progressed.

Moreover, when finalizing the game's design, I had to make the decision if the objective of the game was for the player to "catch" the chicken or to get as high a score as possible. I can't have both objectives in the game as it would get too convoluted. For the former, chasing and catching the chicken will remove the increasing difficulty aspect since it would be easier to reach the chicken when obstacles are moving slower, which means obstacles would have to move at a uniform speed. For the latter, the chicken aspect of the game merely becomes an aesthetic and thematic choice with no effect on gameplay. I decided to go with the highscore objective as it urges the player to want to play again. Since catching the chicken gives the player a sense of completion, they will likley have no inclination to play again - the game ceases to be endless. When researching which games are the most popular, the majority of them have proven to be very addictive due to their endless nature. The competitive aspect of the game becomes a competition with the user themself, rather than in beating the game.

![gameplay](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/Media/gameplay.gif)

## Game Mechanics & User-Centered Design Elements

* Begins with a menu screen that displays a whimsical [vector image](https://pixabay.com/vectors/fox-animal-mammal-wild-animal-5679446/), simple instructions for the user to follow, and the sound of a highway with brief sporadic chicken clucks which plays as long as the program is running (the image I used is under the creative commons license).
* When the user clicks the mouse to begin, the game begins on level 0 which has no cars. Here, a chicken moves upwards and out of the canvas which signifies to the user where to move. When doing user testing, I realized I did not need to tell the user where to move since they instinctively followed the chicken, which is also hinted by the game's title.
* Another movement signifier is how the user's avatar, the fox, cannot move past the leftmost, rightmost, and bottom parts of the canvas - only the top.
* Then, the fox "advances" to the next level by having its y position immediately equal to the bottom of the canvas. Now an array of cars in up to seven rows appear and reappear, moving from left to right or vice versa. The chicken is also generated and continues to move up.
* Every time the user reaches the top, the level counter increases by one along with their highscore if it is greater than their previous highscore. The speed of the cars is also related to the level variable in which a higher level means higher speeds.
* If the fox collides with a car, the game's loop stops and there is a game over screen with easy to read text that prompts the user to press the [Enter] key to restart. Other signifiers include a loud car horn and the screen tinted red.
* If the user chooses to restart, the game reverts back to the level 0 stage and the same game mechanics apply again, the only element that does not reset is the highscore.

## Important Links

### [Click here to access my project journal](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/journal.md)
* Includes all my documentation with regular updates
* Describes my concept, anticipated problems, and how I solved them

### [Click here to access final project code](https://github.com/l-mccarthy/IntroToIM/blob/main/midtermProject/midtermProject.js)
* Includes detailed comments explaining the code
* To try it for yourself you need to download and upload [these files](https://github.com/l-mccarthy/IntroToIM/tree/main/midtermProject/Media/usedInProject) from the media folder

### [Click here to access code I used for tests](https://github.com/l-mccarthy/IntroToIM/tree/main/midtermProject/Testing)
* Rough code used to test certain aspects of my game:
  * Creating a new level and player movement
  * Generating cars (OOP)
  * Starting menu screen
