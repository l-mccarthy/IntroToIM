# Final Project Journal

## Preliminary Concept 19/04

### Description

I will be creating an 8 step sequencer. A step sequencer is a hardware unit that divides a measure of music into a pre-determined number of note values called "steps". Considering the nature of step sequencers and limitations of both my knowledge and technology available to me, this device will either be a drum machine or bassline sequencer in the vein of the legendary Roland TB-303 Bassline synthesizer. Although, I am wondering if I can do "both" by using states in p5 somehow. Additionally, I believe the majority of step sequencers have 16 steps but incorporating 16 might be too much, but I might give it a shot!

### Arduino

Arduino circuit and program will allow users to control the steps using buttons that are in a row. A potentiometer can control note pitch. Another potentiometer can control which drum sound/sample is used (kick, clap, hi-hat, etc.). Plus, a row of LEDs for every step will light up showing each step used. If I can find a way, I could also add potentiometers to control lowpass and highpass filters.

### p5.js

p5.js will be my "synthesizer" as the signals being sent from Arduino will correspond to a certain sound in the code. I might additionally have a saw wave emulator for the bassline (which is one of the built-in p5.js examples). Moreover, I could also display a sound viusalizer on screen using p5.
