# Final Project Journal

## 19/04 Preliminary Concept

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

Today we attempted figuring out how the lowpass filter works using a p5 built-in example, here is how we tested it and [this is the link to the sound file](https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/Media/sound.mp3) you need to upload if you want to test it.

https://editor.p5js.org/l-mccarthy/sketches/Xh6LCMQ5k

Another aspect we need to figure out is the delay between notes, that for example it will wait 2-3 seconds until it runs. For when we start making it physically, it will be 4 steps to figure out how it will work, and once we write the code and debug everything for the 4 step sequencer to work, we can add as many more steps as we want - but an 8 step sequencer is most economical.

### Final project proposal

We decided for the final concept to stick with the 8 step sequencer idea, however the question we asked ourselves was how do we elevate / make this different to existing step sequencers? And the answer is to take advantage of using both Arduino and p5.js, analog and digital. Not only will the user be physically interacting with the hardware, but they will also be interacting with the display of p5 to see what notes they are sequencing in sort of a "piano roll" feature. In most modern DAW (digital audio workstation) software, the term "piano roll" refers to a graphical display of, and means of editing, MIDI note data; along with entering the pitch, length and velocity of notes manually, instead of recording the output of a device for entering note data, like a keyboard. Below is what we envision this feature to look like.

**p5 canvas display:**

![display](https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/Media/p5_Display_Sketch.png)

**A closer look at the "notes" class displayed on p5:**

![notes display](https://github.com/l-mccarthy/IntroToIM/blob/main/finalProject/Media/Notes_Sketch.png)
