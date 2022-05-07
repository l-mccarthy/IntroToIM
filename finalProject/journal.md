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

The sketch used to authorize serial communication and verifying the readings of potentiometers: https://editor.p5js.org/l-mccarthy/sketches/_G13x4umP.

Once we had the serial communication we needed to upload the samples to p5 so Daniel opened up a DAW (Digital Audio Workstation), chose a plugin with a sound we liked and exported a sound file in mp3 for each note in a total of four octaves. We created a folder called samples in p5 and uploaded them there. The samples would then be added to the `soundsList` array so the samples can be called upon. However, we had to add each sound file individually to the preload function which would be very tedious so instead a `for` loop was made to print what needed to be written, along with a variable that would change the sample number:

```
 samples = loadSound("Samples/00.mp3");
  soundsList.push(samples);
```
^ this x48, then copy-pasted from the p5 console into the code.

Unfortunately, p5 would keeping loading for at least 3-4 minutes until we decided to stop the program. We tried preloading only 11 samples (one ocatve) and it loaded in a comfortable time of around 5 seconds. Unless we find some other way to speed it up we will stick with one, maybe two, octaves (depsite the effort made to fulfill 4 octaves worth of samples). To test if the preload was working, we made a function that would play a chosen sample when the mouse is pressed.

**Playing a note when mouse is pressed:**

https://user-images.githubusercontent.com/98512628/165950888-ab479875-cbe6-41c4-b468-cd7ec0eb9661.mp4

Now that we know we can play a sound on p5, we had to figure out how to play a sequence of samples that would loop, which forms the basis of the step sequencer idea. Basically, we assigned an index sound to specific samples (C, D, D#, and A#) using a number representing their position in the array. We then created a `step` variable which would increase until reaching the 4th step where it would reset, thus making the looped sequence. The code and video demo are shown below:

```
  if(mouseIsPressed === true){
    if (step === 0){
    soundsList[indexSound1].play();
      step++
    }
    
    else if(step === 1){
    soundsList[indexSound2].play();  
      step++
    }
    
    else if(step === 2){
      soundsList[indexSound3].play();  
      step++
    }
    else if(step === 3){
      soundsList[indexSound4].play();  
      step = 0
    }
```

**Playing a _sequence_ of notes when mouse is pressed:**

https://user-images.githubusercontent.com/98512628/165950771-90eecd09-7144-4574-b054-2ff4ddd51cad.mp4

## 26/04 Alternating pitch and displaying steps

Despite us planning to have p5 as the main display for the user, the user will also be interacting with the Arduino circuit so we realised that there should be some physical signifiers as well, thus we decided to implement an LED for each step, and have an LED light up to represent what step the user is currently changing.

**Addition to materials used:**
* 4 LEDs (colour does not matter so much right now)
* 4 330 ohm resistors
* 1 more black wire (which ended up being a green wire because we ran out of black wires)
* 4 white wires (one for each LED)

Next, we had to work on the Arduino code to make the first LED light up, and then the next one when the button is pressed. So, we made a variable for the button state and had the state increase every time the button was pressed. Each state is assigned to a certain LED that will turn on and the others off using `if` statements (with a modulo operator of 4). We have gotten the hang of state machines so this task was not too difficult.

```
if (buttonMapped == 1){
    buttonState = buttonState + 1;
  }
```

An example of one of the states, note that only one of the LEDs is turned on and others are being told to turn off at this specific state:

```
if (buttonState%4 == 0){
    digitalWrite(5, HIGH);
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  }
 ```

**Adding LEDs to Arduino:**

![circuit1](https://user-images.githubusercontent.com/98512628/165950553-6638bf26-0d00-4b6c-bd5e-3a442398abf6.jpg)

![circuit2](https://user-images.githubusercontent.com/98512628/165950581-0c3a1351-080f-4c7a-a3f1-cd2dc5ddc1e8.jpg)

After this step we believe we are done with the Arduino code since the LEDs work along with the serial communication, so it was time to focus our efforts to p5 and start with one potentiometer at a time, the most important being pitch (and once we could make this work we would go home for the day). The mapped value of the first potentiometer `pot1` will be used to select the sample from the array, however by doing this we realised it changed the pitch of _all_ the steps at the same time which is not what we want. So, we used a state machine from the button and assigned each `indexSound` to a different state in which the `pot1` reading will only affect the ordered step of what state the sequencer was in (as signified by the newly added LEDs). It was a good decision to add the LEDs just from a workflow viewpoint otherwise it would be more inconvenient to differentiate the steps and observe if our program was truly working correctly!

Code that changes the pitch:
```
if (buttonState % 4 === 0) {
      indexSound1 = pot1;
      counter = 0; // assign counter here
    } else if (buttonState % 4 === 1) {
      indexSound2 = pot1;
      counter = 0;
    } else if (buttonState % 4 === 2) {
      indexSound3 = pot1;
      counter = 0;
    } else if (buttonState % 4 === 3) {
      indexSound4 = pot1;
      counter = 0;
    }
```

**Pitch changing demo:**

https://user-images.githubusercontent.com/98512628/165918645-21e68e76-dbc9-4fa1-b817-f4973aa40557.mp4

## 27/04 Resolving the potentiometer problem

We ran into a problem that took the _entire_ working session to figure out, and it turned out the solution was very simple! While we did figure out how to control the pitches, we also wanted to change the tempo, frequency, and resonance of the samples using serial communication from potentiometers. As a result, we simply put the variables of the readings (`pot2`, `pot3`, `pot4`) into the function for the filters, but it did not work. To make things simpler for debugging purposes, we created a simplified p5 project file of merely one potentiometer mapped whereby the reading would affect the frame rate. An ellipse would move across the canvas and the greater the frame rate the quicker it would move.

A link to the sketch: https://editor.p5js.org/l-mccarthy/sketches/f21EKiizNK

We used `print()` to see the readings before and after the filter function would recieve the potentiometer's reading but it looked correct even though the tempo (frame rate) was not changing. So then we thought p5 did not allow us to change the frame rate while the program was running, however we replaced the potentiometer readings with a mapped `mouseX` variable and the frame rate did change! So it was not a problem with the frame rate function itself. Still doubtful, we decided to look at the p5 reference page for frameRate() (https://p5js.org/reference/#/p5/frameRate) which said: "Calling `frameRate()` with arguments that are not of the type **numbers** or are non positive also returns current framerate."

![framerate](https://user-images.githubusercontent.com/98512628/166923625-f7aba0d4-61e2-444c-87a9-02d4ce93ff42.png)

STRINGS! We had the potentiometer readings as string variables, so of cource the frame rate (and the frequency filter) was not changing because the values were treated as text. As a result, we simply converted the strings to a number value using `int()` for all the potentiometers that controlled tempo, frequency, and resonance.

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

Of course, while the two of us know how to use it, to supposedly give our project to a random person at its current state, they would likely not know what to do or where to start. Hence, the idea of a menu screen giving simple instructions was our next addition. Another reason of including a different screen is so the user can switch back to the menu and vice versa to remind themselves on how to use the sequencer in addition to how all the sound will stop when accessing the menu (the constant noise will probably get very annoying at some point!). Simple shapes and if statements in relation to the mouse's position were created for a button that would provide the ability to switch between both displays.

**Menu template:**

![menu_template](https://user-images.githubusercontent.com/98512628/166948358-a7338eb7-8065-4dbf-8318-e48a9bb9c7e7.png)

**Menu button:**

![menu_button](https://user-images.githubusercontent.com/98512628/166948505-f62025e3-1e26-42a8-aaab-a895e3442489.png)

For the sequencer's display a piano roll placed on the left-hand side is made out of rectangles that form to resemble a typical keyboard. Including this piano roll (only a full octave can be seen on the left-hand side), the display includes signifiers where the user will be able to see the pitch, frequency, and resonance of the note they are playing via colour and alpha. Furthermore, the sequencer display will also show the steps on the bottom and which step the user is on by changing its colour, in addition to the LEDs signifying the same thing. At the moment we ended this class with a simple placeholder layout for the steps and we decided on the colours, the next job is to create a class for the steps to make it interactive.

**Plan for how the colours of notes will change:**

![frequency_colours](https://user-images.githubusercontent.com/98512628/165909640-795af46e-01c8-42b2-bd17-bc614ee935c8.jpg)

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/320HEHZOr

## 29/04 Displaying steps on p5

While we did have the LEDs to delineate the steps, we think that seeing the same information on a display in p5 will also be helpful. As a result, we created a class for displaying the step rectangles and the selected step beneath the piano roll. The challenge was changing the colour whenever the button was pressed, which was solved by incorporating a boolean in the class which checks if the button is pressed, then a rectangle with a different colour is created. The `displayButtonStep` function is called every time the button state changes.

```
displayButtonStep(boolean) {
    if (boolean === true) {
      fill(63, 229, 0);
      rect(this.posX, this.posY, this.width, this.height);
    } else {
      fill(19, 19, 88);
      rect(this.posX, this.posY, this.width, this.height);
    }
```
We chose the colour green for the selected step since that is the colour for a fully opened low-pass filter (highest frequency) and a step that is not selected is the colour for a fully closed low-pass filter (lowest frequency). At the moment this is only for this first four steps but we will change this when we get the 8 LEDs on the breadboard, it is most important to know that this aspect is working correctly.

We also ended this session with brainstorm diagrams of what we have completed and what we still need to do:

![Completed until now](https://user-images.githubusercontent.com/98512628/165952837-6918c979-b383-4e10-a143-b89bc5c759c1.png)

![Missing](https://user-images.githubusercontent.com/98512628/165952858-68000f48-f4ab-4779-af52-f2a3cde7330d.png)

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/ZagAQpUIj

## 01/05 Changing colour and opacity of notes

This was a shorter working session as we had a lot of things due during this period, but we still made some progress in the p5 code. The schedule of working on it for a few hours every day instead of cramming it all in one long working session is beneficial as we entered each session with a clear head and good enthusiasm. We stuck to the plan of creating a series of `if` statements for the colour whereby if the `pot3` reading (frequency) is in a certain range the notes will fill with a certain colour. Each statement covers a range of 1490. This value was derived by the mapping of `pot3` 100-15000 range. Since the minimum starts at 100 and we want 10 different colours, we subtracted 100 from 15000 (= 14900) and divided the result by 10 (= 1490) to arrive with a value that creates an even range.

```
if (pot3 >= 100 && pot3 <= 1590) {
      // increase by increment of 1490
      this.colour = color(19, 19, 88);
    } else if (pot3 >= 1590 && pot3 <= 3080) {
      this.colour = color(95, 0, 187);
```
^ continues for a total of 10 `if` statements.

Changing alpha/transparency will utilise the `setAlpha()` function whereby alpha value is denoted by the `pot4` reading (resonance). We used this example from the p5 reference page and tailored it to our own needs (we actually made it simpler):

![alpha](https://user-images.githubusercontent.com/98512628/166939845-82f7a154-e1a5-4b88-8921-169ac0be82b1.png)

```
    this.colour.setAlpha(pot4 * 17.5); // full range of alpha 0-255
    fill(this.colour);
```

While the value of `17.5` being multiplied to `pot4` is notably a strange choice, it was decided upon from trial-and-error experimentation with a range of values that would best represent the full range of the possible transparency via using the mapped values of `pot4`, since the 5-15 range is too small to generate any noticable difference.

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/Rt37KSam9

## 02/05 Finishing the piano roll p5 display

![image](https://user-images.githubusercontent.com/98512628/167110125-72713c3d-8745-4075-b506-7b764d40c7f0.png)

Finally, we added simple text in the bar at the top of the screen which denoted variables for tempo, frequency, and resonance. We originally wanted tempo to be called "BPM" but converting our potentiometer value for frame rate into a BPM was too complex so instead we opted for words. Moreover, someone unfamiliar with music theory might not know what BPM is, but tempo/speed is something that is universal and therefore a better signifier. So a frame rate of 4, for example, is displayed as "Fast". As for frequency and resonance we just used the values from the potentiometer as they are accurate and even if the user does not know what they mean they can _hear_ the difference when playing with the knobs and deduce that a lower frequency filter essentially "muffles" the sound. It also took us a minute to realise that the reason why other shapes turned grey like the text is because we forgot to include the simple `push` and `pop`.

Link to latest sketch: https://editor.p5js.org/l-mccarthy/sketches/TNRLu8btt

## 05/05 Conducting initial user testing

https://user-images.githubusercontent.com/98512628/167035593-40001229-2a80-4b9f-b52f-baebf42e21d4.mp4

This is more of a preliminary user test as our project is not entirely finished, we told the user that we plan to solder and make our circuit more presentable, because the most obvious criticism is the fact that the potentiometers are so small and difficult to turn due to their position on the breadboard (and the many tangled wires). Another aspect that was not yet added, which retrospectively we should have added before this user test, is to fill the menu screen with instructions on how to use the step sequencer, thus we had to explain to the user how the sequencer works and what potentiometer controls what. Ideally, when we later do a final user test, we hope that the user can read the instructions and correctly use our project with no guidance from us.

Furthermore, the program begins to lag and the sounds glitch the longer the program runs, although I am not entirely sure the user noticed this was happening. At some point we will test our project with a better internet connection (i.e. ethernet), since p5 is working on a browser, to see if this is truly the problem. We also noticed that the user was rarely interacting with the display on p5, rather, directing their attention to the potentiometers and the LEDs. I wonder if this is due to the user's lack of music knowledge that they found the display redundant. Or maybe it is because the display only gave details to the outputs, and the inputs themselves were worth more attention. In the end, the user enjoyed testing our project and said it was very fun.

## 06/05 Friday's class

This class was more of a reflective session where we went over what we've done and then plan our next and final steps. The good news is everything works! We have figured out the fundamentals for our project and now it's time to make it look good. Additionally, we can add extra steps, as many steps as we want - theoretically - but we decided with 8 steps as that was our original plan and works well with rhythm in music. If we went for something like 6 steps the odd time signature that it creates the possibility of throwing the user off; 8 steps is easier to follow.

![Menu_Screens](https://user-images.githubusercontent.com/98512628/167106130-7e7d809e-172c-4e26-b6f0-2d7f99704194.png)
