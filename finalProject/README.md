# 8 Step Sequencer (Liam & Daniel)

![title](https://user-images.githubusercontent.com/98512628/167965208-554f5a73-2589-4c55-bb6d-a2364d9011c5.png)

![final_design](https://user-images.githubusercontent.com/98512628/167964960-3a12f212-5844-47e4-84f8-23df0ba0ff1a.JPG)

## Description of our project

Daniel and Liam, for the final concept, created an 8 step sequencer, and a step sequencer is a hardware unit that divides a measure of music into a pre-determined number of note values called "steps". So, we asked ourselves the question of how do we elevate / make this different to existing step sequencers? And the answer was to take advantage of using both Arduino and p5.js, analog and digital. Not only is the user be physically interacting with the hardware, but they are also interacting with the display of p5 to see what notes they are sequencing in sort of a "piano roll" feature.

In most modern DAW (digital audio workstation) software, the term "piano roll" refers to a graphical display of, and means of editing, MIDI note data; along with entering the pitch, length and velocity of notes manually, instead of recording the output of a device for entering note data, like a keyboard. Our interface in p5.js shows the user, note only what pitch their note is, but what is the frequency of the filter, the resonance of the sound, the tempo the notes are being played, and what note/step you are currently editing. Furthermore, there are switches that can turn and note on our off, allowing the user to create interesting rhythms.

## Overview of programs (Arduino and p5.js) and circuitry

**p5.js code:**

**Arduino code:**

**Circuitry:**

## Overview of user testing and changes made

Unfortunately the user testing we were able to conduct was with a project that was not _quite_ finished since we were able to finish it merely the day before it was due; so we don't have user testing of the final product. However, user testing with prototypes was beneficial along the way as it guided our attention towards what we should fix and improve as we were creating it.

https://user-images.githubusercontent.com/98512628/167965674-d83f3a46-48ae-47c4-a415-224019559482.mp4

This is more of a preliminary user test as our project is not entirely finished, we told the user that we plan to solder and make our circuit more presentable, because the most obvious criticism is the fact that the potentiometers are so small and difficult to turn due to their position on the breadboard (and the many tangled wires). Another aspect that was not yet added, which retrospectively we should have added before this user test, is to fill the menu screen with instructions on how to use the step sequencer, thus we had to explain to the user how the sequencer works and what potentiometer controls what. Ideally, when we later do a final user test, we hope that the user can read the instructions and correctly use our project with no guidance from us.

Furthermore, the program began to lag and the sounds glitch the longer the program runs, although we are not entirely sure the user noticed this was happening. We also noticed that the user was rarely interacting with the display on p5, rather, directing their attention to the potentiometers and the LEDs. We wondered if this was due to the user's lack of music knowledge that they found the display redundant. Or maybe it is because the display only gave details to the outputs, and the inputs themselves were worth more attention. In the end, we decided to remove the LEDs as they were too distracting and redundant.

## Demo video

https://user-images.githubusercontent.com/98512628/167964810-746a2251-2335-4522-91bf-68ad011903a2.mp4

## Major problems

* Two switches ended up not working when testing the final product, depsite testing each switch individually.

## Major discoveries

* 

## Schematic

## Important links

Link to p5.js sketch: https://editor.p5js.org/l-mccarthy/sketches/48kRVqZTW

Link to Arduino code: https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/8StepSequencer.ino

Link to media folder with all images + sound needed for program: https://github.com/l-mccarthy/IntroToIM/tree/main/finalProject/Media

Link to project journal: https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/journal.md
