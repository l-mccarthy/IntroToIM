# Three Serial Communication Exercises

### Links to p5.js sketches:

1. Moving Ellipse Using Potentiometer: https://editor.p5js.org/l-mccarthy/sketches/LTafAzE4X
2. Controlling LED Brightness from p5: https://editor.p5js.org/l-mccarthy/sketches/dn8vqkQLD
3. Gravity Wind: https://editor.p5js.org/l-mccarthy/sketches/wuQ1PNB_5

## Moving ellipse using potentiometer

![1](https://github.com/l-mccarthy/IntroToIM/blob/main/April19/Media/schematic1.JPG)

* A continuation from what we started with in class where we almost figured it out.
* After doing some tests in p5.js, we realised the problem was in our Arduino code.
* More specifically the mapping function: we initially did ```int mapped = map(mapped, 0, 1023, 0, 400);``` instead of ```int mapped = map(sensorValue, 0, 1023, 0, 400);``` which is correct.
* For the first parameter, we had to put in the number to map (value from the potentiometer) instead of the mapping variable itself.
* We had another problem, but this one we could not solve. As seen in the video, the circle is "flickering" rapidly which we thought was too distracting, and this is because we are seeing the loop function in action, creating a new background and ellipse as quick as it can.
* Thinking back, this may have been a browser problem and could have been solved simply with a better internet connection.

https://user-images.githubusercontent.com/98512628/163734732-e51dcba3-f42f-4b03-ab3e-e7124aeef7c2.mp4

## Controlling LED brightness from p5

![2](https://github.com/l-mccarthy/IntroToIM/blob/main/April19/Media/schematic2.JPG)

* When doing these exercises we try not to start on a "blank slate" as we often become stuck in our workflow, instead we opened the "Fade" built-in example and deduced what we needed to transfer and change in tandem with Jack's example code for serial communication.
* In terms of p5.js, we did not need to change any of the code from the serial communication example as the keyTyped function is what will be used for the interaction (the draw function was also left completely empty).
* Copying from the "Fade" example, we added an extra two variables: brightness and fadeAmount. Brightness will be the LED's initial brightness, and a brightness of 0 means that the LED will start "off". The fadeAmount is how many increments a press of a key will increase/decrease the brightness. My partner and I fiddled around with this value until we were satisfied with the result.
* Albeit simple, it should be noted that the whole ```brightness = brightness - fadeAmount;``` idea is straight from the example.
* One problem that we ran into was that we initally set the LED as ```HIGH``` and then had the serial read while loop run, and as this is in the loop function, the LED keeps on getting bright (flickering at most) no matter which keys were being pressed as it was getting told to be ```HIGH``` over and over again. So we simply removed this statement and had the LED begin "off" as default.
* We also added an if statement at the end so that the LED won't get too bright and fade back down. I doubt that any voltage from the Arduino will blow out the LED due to the circuit having a resistor, but I guess this is just a precaution that also adds to the overall interactive experience.

https://user-images.githubusercontent.com/98512628/163734753-964925bb-675f-4625-8ea5-d5b1c8a63afd.mp4

## Modifying "gravity wind" example

![3](https://github.com/l-mccarthy/IntroToIM/blob/main/April19/Media/schematic3.JPG)

https://user-images.githubusercontent.com/98512628/163734822-c782cea3-a01b-4032-b584-05b7b561638a.mp4

https://user-images.githubusercontent.com/98512628/163734837-711e2a67-bb09-4c19-9de0-bce232e3ea9b.mp4
