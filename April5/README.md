# Analog and Digital Sensors - Race Track Lights
### Demo Video:

https://user-images.githubusercontent.com/98512628/161628569-78e90983-ee06-4bae-b6a7-79ba07dc75ad.mp4

### Description:

![button](https://github.com/l-mccarthy/IntroToIM/blob/main/April5/Media/button_pushed.JPG)

* The digital sensor is the push-button and the analog sensor is the light-dependent resistor (LDR).
* The circuit emulates a race track light when the button is pressed as the lights count down each second to the green light, as seen in the image and demo video above and in the code below.
```
 if (buttonState == HIGH) {                 // button on: turn on each LED with 1 second delay
    digitalWrite(redLED1, HIGH);             // red LEDs will turn on first, then the green one
    delay(1000);                             // the LEDs will stay on as along as button is pressed
    digitalWrite(redLED2, HIGH);
    delay(1000);
    digitalWrite(greenLED, HIGH);
}
```
* When not pressed, the red lights blink in a downward pattern to signify waiting, as if skipping the final green light.
* The darker the environment, the faster the red lights alternate when the button is not pressed.
```
delay(valueLDR);
```

### Schematic:

![schematic](https://github.com/l-mccarthy/IntroToIM/blob/main/April5/Media/schematic.JPG)

### Process:

* The idea came from brainstorming how lights are used in everyday objects to signify certain things. So, I then first thought about making an ordinary traffic light, but I could not completely figure out what I would use both sensors for as traffic lights are time based.
* Similar to traffic lights are the racing track lights that count down for drivers until the green "GO!" light, which can be started and controlled by a person.
* In terms of the actual wiring on the breadboard, as seen in the image below, I wanted to keep the circuit as tidy as I could. Consequently, I color coded the green LED to the green wire, the blue push-button to the blue wire, the LDR to the white wire, and both red LEDs to yellow wires since the red wire is always connected to 5V.
* Afterwards, I began coding how I will incorporate the sensors and the ways in which they control the three LEDs. Essentially, the code defines two states where certain LED functions are controlled by the analog (in state 0) and certain functions controlled by the digital (in state 1).
* The reasoning for certain choices and variables in the code are outlined as comments within the .ino file.

![circuit](https://github.com/l-mccarthy/IntroToIM/blob/main/April5/Media/circuit.jpg)

### Problems and Discoveries:

* Obviously, this is not accurate to actual race track lights which has more lights and more rows (and sometimes more colors like amber) so it is more the mechanism that's being replicated. Looking back, I might have wanted to add a buzzer, giving the project a sonic element to the countdown.
* I think I have become more comfortable with using Arduino in that I did not run into any problems (compared to previous attempts where I blew out an LED) and that I was able to experiment and, most importantly, have fun with the code once I made the circuit.
* In addition, circuit building for me is adding one element at a time and testing if it works before moving on to the next. Because these components are in parallel, troubleshooting and problemsolving becomes easier.
* I also found creating my schematic using Microsoft PowerPoint's shape tools on a blank slide to be both super organized and time-consuming, so I am not sure if I will go this route again when drawing my schematic. 
* Organization is very important! Colour coding and arranging the wires in tandem with the circuit's various components on the breadboard were crucial when it came to transferring my schematic into a tangible, working product.
