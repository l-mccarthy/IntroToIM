# Final Project Journal

## 19/04 Preliminary Concept

![top-10-best-step-sequencers](https://user-images.githubusercontent.com/98512628/164894845-058bb252-0a7c-4383-b535-990448dcb540.jpg)

### Description

I will be creating an 8 step sequencer. A step sequencer is a hardware unit that divides a measure of music into a pre-determined number of note values called "steps". Considering the nature of step sequencers and limitations of both my knowledge and technology available to me, this device will either be a drum machine or bassline sequencer in the vein of the legendary Roland TB-303 Bassline synthesizer. Although, I am wondering if I can do "both" by using states in p5 somehow. Additionally, I believe the majority of step sequencers have 16 steps but incorporating 16 might be too much, but I might give it a shot!

### Arduino

Arduino circuit and program will allow users to control the steps using buttons that are in a row. A potentiometer can control note pitch. Another potentiometer can control which drum sound/sample is used (kick, clap, hi-hat, etc.). Plus, a row of LEDs for every step will light up showing each step used. If I can find a way, I could also add potentiometers to control lowpass and highpass filters.

### p5.js

p5.js will be my "synthesizer" as the signals being sent from Arduino will correspond to a certain sound in the code. I might additionally have a saw wave emulator for the bassline (which is one of the built-in p5.js examples). Moreover, I could also display a sound viusalizer on screen using p5.

### UPDATE 22/04: Daniel's description

For my final project I am thinking to develop a 8-step sequencer with some controls such as BPM (speed of playback), notes on/off, note pitch and change octaves. This part would be mainly the Arduino doing the action. In regards of p5js, I believe I will do some kind of animation or objects moving in relationship to the sounds produce by the sequencer. The idea as of now is still a little raw, but I have found some videos in YouTube that can serve as inspiration to develop this project.

**Relevant links for inspiration/guidance:**

[ARDUINO 8 STEP KEYBOARD SEQUENCER FOR SYNTHESIZERS - LOOK MUM NO COMPUTER](https://www.youtube.com/watch?v=9oGlCfwCoCw)

[LOOK MUM NO COMPUTER - Arduino 8 Step Keyboard Sequencer Project Information](https://www.lookmumnocomputer.com/projects/#/sequencer-keyboard)

[Best Arduino Project - DIY 4 Step Sequencer - Hacktuber](https://www.youtube.com/watch?v=ozSdVL2EzR4)

[Auduino 4-step sequencer - Cassiopeia Ltd](https://cassiopeia.hk/sequencer/)

[How to Play audio with Arduino - Electronics BD](https://www.youtube.com/watch?v=aaqaAXlZbuc)

[Talking Arduino | Playing MP3 audio with Arduino | Arduino PCM audio without audio or mp3 module - electronics GURU](https://www.youtube.com/watch?v=F28Znry0qcw)

## 21/04 Group Partner

Turns out Daniel is doing the exact same project as me! We have decided to partner up.

## 22/04 Preliminary testing + Finalized proposal

Today we attempted figuring out how the lowpass filter works using a p5 built-in example, here is how we tested it and [this is the link to the sound file](https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/Media/sound.mp3) you need to upload if you want to test it. We were surprised by how well catered p5 is to creating, playing, and manipulating sound!

Link to filter testing: https://editor.p5js.org/l-mccarthy/sketches/Xh6LCMQ5k

Another aspect we need to figure out is the delay between notes, that for example it will wait 2-3 seconds until it runs. For when we start making it physically, it will be 4 steps to figure out how it will work, and once we write the code and debug everything for the 4 step sequencer to work, we can add as many more steps as we want - but an 8 step sequencer is the most common and desirable.

### Final project proposal

We decided for the final concept to stick with the 8 step sequencer idea, however the question we asked ourselves was how do we elevate / make this different to existing step sequencers? And the answer is to take advantage of using both Arduino and p5.js, analog and digital. Not only will the user be physically interacting with the hardware, but they will also be interacting with the display of p5 to see what notes they are sequencing in sort of a "piano roll" feature. In most modern DAW (digital audio workstation) software, the term "piano roll" refers to a graphical display of, and means of editing, MIDI note data; along with entering the pitch, length and velocity of notes manually, instead of recording the output of a device for entering note data, like a keyboard. Below is what we envision this feature to look like.

**p5 canvas display:**

![display](https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/Media/p5_Display_Sketch.png)

**What Arduino will do:**
* 8 toggle switch inputs to represent a step in the sequence, a switch that is on will send data to p5.
* Many potentiometers, one for each of the 8 steps to control pitch, plus others to control various effects applied to the overall sound.
* Mapping the various potentiometers.
* Giving each pin used an appropriate variable.

**What p5 will do:**
* Variables for pitch, octave, bpm (beats per minute), frequency, resonance, note number in the sequence.
* Functions to establish how certain variables will alter the sound.
* Class constructor for what the "note" will look like and how it will act.
* Recieve potentiometer data from Arduino which controls all the variables apart from the note's number/order in the sequence.
* Recieve toggle switch data from Arduino which tells p5 which note to play and where.
* Sound will come from p5, we will upload samples to be played.

**A closer look at the "notes" class displayed on p5:**

![notes display](https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/Media/Notes_Sketch.png)

## 25/04 Creating the project

Today Daniel and I gathered in the IM Lab to create the breadboard and Arduino circuit. During this process, we realised we both had conflicting ideas on what we envisioned the final product will look like since I was thinking of having a switch and potentiometer for each step like the more traditional step sequencers and Daniel wanted to have one potentiometer for pitch controlling and toggle through the steps with one button. I agreed to Daniel's proposition as it was easier and required less materials and p5/Arduino code since we will be communicating with less sensors.

**List of materials used for circuit:**
* 4 potentiometers
* 1 push button
* 1 10k ohm resistor
* 2 yellow wires (for the button)
* 4 blue wires (one for each potentiometer)
* 5 red wires
* 5 black wires

**Circuit:**

![pots_button](https://user-images.githubusercontent.com/98512628/165949113-bf7b7fe7-6243-4dfb-a6fe-7222d4d2dbc6.jpg)

Once we had the circuit built the next step was to write the code in Arduino in order to communicate with p5 since almost all of what is important to our project's operations will be from p5. The code below is what we settled upon when mapping the values (and `Serial.print` allows for the communication to occur). To give context: `pot1` controls the pitch so from 0 to 12 covers the range of an entire octave; `pot2` controls frame rate and small values are preferable because otherwise the sounds will loop in succession very, very quickly; `pot3` controls frequency and the 100 to 15000 (hertz) range is what was given in the low-pass filter example so we stuck with it; `pot4` controls resonance and the 5 to 15 range was also included in the same example. For the button we just needed a 0 to 1 (boolean) so `digitalRead` was the most optimal.

```
void loop() {
  int buttonMapped = digitalRead(7);
  int pot1Mapped = map(analogRead(A1), 0, 1023, 0, 12);
  int pot2Mapped = map(analogRead(A2), 0, 1023, 2, 6);
  int pot3Mapped = map(analogRead(A3), 0, 1023, 100, 15000);
  int pot4Mapped = map(analogRead(A4), 0, 1023, 5, 15);

  Serial.print(buttonMapped);
  Serial.print(",");
  Serial.print(pot1Mapped);
  Serial.print(",");
  Serial.print(pot2Mapped);
  Serial.print(",");
  Serial.print(pot3Mapped);
  Serial.print(",");
  Serial.print(pot4Mapped);
  Serial.println();
```

Mapping the potentiometers sketch: https://editor.p5js.org/l-mccarthy/sketches/_G13x4umP.


**Playing a note when mouse is pressed:**

https://user-images.githubusercontent.com/98512628/165950888-ab479875-cbe6-41c4-b468-cd7ec0eb9661.mp4

**Playing a _sequence_ of notes when mouse is pressed:**

https://user-images.githubusercontent.com/98512628/165950771-90eecd09-7144-4574-b054-2ff4ddd51cad.mp4

## 26/04 Alternating pitch and creating steps

**Adding LEDs:**

![circuit1](https://user-images.githubusercontent.com/98512628/165950553-6638bf26-0d00-4b6c-bd5e-3a442398abf6.jpg)

![circuit2](https://user-images.githubusercontent.com/98512628/165950581-0c3a1351-080f-4c7a-a3f1-cd2dc5ddc1e8.jpg)

**Pitch changing demo:**

https://user-images.githubusercontent.com/98512628/165918645-21e68e76-dbc9-4fa1-b817-f4973aa40557.mp4

## 27/04 Resolving the potentiometer problem

* We ran into a problem that took the entire working session to figure out, and it turned out the solution was very simple!
* While we did figure out how to control the pitches, we also wanted to change the tempo, frequency, and resonance of the samples using serial communication from potentiometers. As a result, we simply put the variables of the readings (`pot2`, `pot3`, `pot4`) into the function for the filters, but it did not work.
* To make things simpler for debugging purposes, we created a simplified p5 project file of merely one potentiometer mapped whereby the reading would affect the frame rate. An ellipse would move across the canvas and the greater the frame rate the quicker it would move. A link to the sketch: https://editor.p5js.org/l-mccarthy/sketches/f21EKiizNK.
* We used `print()` to see the readings before and after the filter function would recieve the potentiometer's reading but it looked correct even though the tempo (frame rate) was not changing.
* So then we thought p5 did not allow us to change the frame rate while the program was running, however we replaced the potentiometer readings with a mapped `mouseX` variable and the frame rate did change! So it was not a problem with the frame rate function itself.
* Still doubtful, we decided to look at the p5 reference page for frameRate() (https://p5js.org/reference/#/p5/frameRate) which said: "Calling `frameRate()` with arguments that are not of the type **numbers** or are non positive also returns current framerate."
* STRINGS! We had the potentiometer readings as string variables, so of cource the frame rate (and the frequency filter) was not changing because the values were treated as text.
* So we simply converted the strings to a number value using `int()` for the potentiometers that controlled tempo, frequency, and resonance.

```
let inputs = split(inString, ","); // split the string on the commas
    if (inputs.length === 5) {
      // if there are five elements
      button = inputs[0];
      pot1 = inputs[1];
      pot2 = int(inputs[2]); // receives a string convert into int
      pot3 = int(inputs[3]);
      pot4 = int(inputs[4]);
      }
```

## 28/04 Thursday's class

* Created the menu screen and ability to switch between menu and sequencer display.
* Created a piano roll and outline for the sequencer display.
* The display includes a piano roll (at the moment only a full octave can be seen on the left-hand side) where the user will be able to see the pitch, frequency, and resonance of the note they are playing.
* The display will also show the steps on the bottom and which step the user is on by changing its colour, at the moment we have a placeholder layout for the steps and decided on the colours, the next job is to create a class for the steps to make it interactive.

**Plan for how the colours of notes will change:**

![frequency_colours](https://user-images.githubusercontent.com/98512628/165909640-795af46e-01c8-42b2-bd17-bc614ee935c8.jpg)

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/320HEHZOr

## 29/04 Displaying steps on p5

* Created a class for displaying the step rectangles beneath the piano roll.
* Challenge was changing the colour when the button was pressed, which was solved by:
* `if (buttonState % 4 === 0 && i === 0 )`
* At the moment this is only for this first four steps but we will change this when we get the 6 LEDs on the breadboard, it is most important to know that this aspect is working correctly.
* Diagrams of what we have completed and we still need to do:

![Completed until now](https://user-images.githubusercontent.com/98512628/165952837-6918c979-b383-4e10-a143-b89bc5c759c1.png)

![Missing](https://user-images.githubusercontent.com/98512628/165952858-68000f48-f4ab-4779-af52-f2a3cde7330d.png)

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/ZagAQpUIj

## 01/05 Changing colour and opacity of notes

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/Rt37KSam9

## 02/05 Finishing the piano roll display

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/TNRLu8btt
