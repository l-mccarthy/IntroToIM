# Three Serial Communication Exercises

### Links to p5.js sketches:

1. Moving Ellipse Using Potentiometer: https://editor.p5js.org/l-mccarthy/sketches/LTafAzE4X
2. Controlling LED Brightness from p5: https://editor.p5js.org/l-mccarthy/sketches/dn8vqkQLD
3. Gravity Wind: https://editor.p5js.org/l-mccarthy/sketches/wuQ1PNB_5

## Moving ellipse using potentiometer

https://user-images.githubusercontent.com/98512628/163734732-e51dcba3-f42f-4b03-ab3e-e7124aeef7c2.mp4

* A continuation from what we started with in class where we almost figured it out.
* After doing some tests in p5.js, we realised the problem was in our Arduino code.
* More specifically the mapping function: we initially did ```int mapped = map(mapped, 0, 1023, 0, 400);``` instead of ```int mapped = map(sensorValue, 0, 1023, 0, 400);``` which is correct.
* For the first parameter, we had to put in the number to map (value from the potentiometer) instead of the mapping variable itself.
* We had another problem, but this one we could not solve. As seen in the video, the circle is "flickering" rapidly which we thought was too distracting, and this is because we are seeing the loop function in action, creating a new background and ellipse as quick as it can.
* Thinking back, this may have been a browser problem and could have been solved simply with a better internet connection.

## Controlling LED brightness from p5

https://user-images.githubusercontent.com/98512628/163734753-964925bb-675f-4625-8ea5-d5b1c8a63afd.mp4

## Modifying "gravity wind" example

https://user-images.githubusercontent.com/98512628/163734822-c782cea3-a01b-4032-b584-05b7b561638a.mp4

https://user-images.githubusercontent.com/98512628/163734837-711e2a67-bb09-4c19-9de0-bce232e3ea9b.mp4
