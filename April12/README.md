# Musical Instrument - A Theremin (of sorts?)

Named after its inventor, Leon Theremin, who patented the device in 1928, the theremin is an electronic musical instrument controlled without physical contact by the person playing it. In fact, the theremin is considered to be the first electronic musical instrument ever made. While an actual theremin works by generating electromagnetic fields around two antennae, the closest component to mirror this lack of physical contact is the ultrasonic sensor - which formed the basis of our musical instrument.

![theremin](https://github.com/l-mccarthy/IntroToIM/blob/main/April12/Media/theremin.jpg)

Essentially, we designed this instrument to play a specific note depending on how far away your hand (or an object) is from the sensor. Below is a video of the final product in use, note what happens to the pitches when the ruler moves closer and away from the sensor, as well as when the button is pressed:

https://user-images.githubusercontent.com/98512628/162845787-fed67868-493d-4784-9c70-b53a32f33076.mp4

### Schematic

![schematic](https://github.com/l-mccarthy/IntroToIM/blob/main/April12/Media/schematic.png)

### Process, Problems, and Discoveries

* Since the idea of a theremin-like instrument was already in my mind before actively building the circuit, choosing which would be analog sensor and digital sensor was simple as the ultrasonic sensor (analog) is "invisible" to the human eye giving it that illusion akin to a theremin.
* First, knowing how to use the ultrasonic sensor was the initial step of the process before progressing further. I found this great website that explained the component as well as provide an example, which ended up being the basis of our code https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/.
* The example provided me with the necessary calculations to convert the milliseconds read by the sensor into a distance measurement of centimeters, how far away roughly an object is. Using a 15cm ruler I tested the calculations and they were fairly accurate, the only issue was that I had to account the error that the sensor starts its "zero" around 0.8cm ahead of actual zero.
* Next, attaching the piezo buzzer and pushbutton (all in parallel) went smoothly as it is something I am familiar with. I did not want to add a resistor for the buzzer as I prefer how loud it is on its own.
* I also distinctly kept in mind not to use pins 3 and 11 as use of the tone() function will interfere with PWM output on those pins! I orignially did have a component attached to pin 11 but quickly realised I needed to move it elsewwhere.

![circuit2](https://github.com/l-mccarthy/IntroToIM/blob/main/April12/Media/circuit2.jpg)

* As for the code, it was a matter of combining our knowledge of what we did with the pushbutton, the puzzer, and our newfound understanding of the sensor.
* The code used the built-in toneMelody example as a starting point, and the array of notes was modified to fit the C Major scale so everything will sound in tune not matter what note or combination of notes the user plays.
* Then, the reading from the sensor, now convereted into centimeters is then used for a bunch of if statements that assign a specific cm reading to a note for the buzzer to play. Since the buzzer all the time would become annoying, the decision to have noTone after 15cm or more was implemented.
* The digital sensor implementation is that when the button is pressed the notes played will "jump" an octave higher, and what the code is doing is moving all the assigned notes for each if statement "up" the array by adding 7. And 7 because those are the number of notes that are in the scale.
* The 15 cm ruler next to the analog sensor was left there as part of the design as a signifier for the user to realise they are playing a different note depending on the distance, and thus the ability to manipulate this relationship, almost like invisible piano keys.
* I color coded red wires for 5V, black wires for GND, a white wire for the buzzer, a blue wire for the blue pushbutton, and the rest of the colors (green and yellow) were applied to the ultrasonic sensor (trig and echo).
* Below is what the final circuit looks like:

![circuit1](https://github.com/l-mccarthy/IntroToIM/blob/main/April12/Media/circuit1.jpg)

