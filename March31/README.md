# Creating an Unusual Switch - Drawer Switch

https://user-images.githubusercontent.com/98512628/160930411-f43b2304-c438-4763-bf2d-11d40048b40e.mp4

### Description:
* Opening and closing the drawer acts as the switch.
* When the drawer is closed, the green LED is on, the colour signifying that it is "safe" and closed.
* When the drawer is open, the red LED blinks rapidly, telling the user the drawer is open and should be closed as soon as possible.
* There is never a point when both LEDs are off.

### Schematic:

![schematic](https://github.com/l-mccarthy/IntroToIM/blob/main/March31/Media/schematic.png)

### Process:
* The lecture notes included a schematic for a button/switch for one LED and a circuit for two LEDs in parallel (without a button/switch), thus I combined these two schematics to begin planning my circuit.
* I first tested the completed circuit without my creative switch by simply touching the wires in order to see if it worked before I could move on and focus my attention there.
* I decided on using the drawer's opening and closing action as the switch since it can bring two pieces of material together as well as apart.

![wires](https://github.com/l-mccarthy/IntroToIM/blob/main/March31/Media/taped_wires.jpg)

* Above is how I used insulation tape to keep the open ends of the makeshift switch's wires in place at all times.
* I then needed a conductor that would transfer the current: a paperclip!

![paperclip](https://github.com/l-mccarthy/IntroToIM/blob/main/March31/Media/taped_paperclip.jpg)

* Above is how I used insulation tape to keep the paperclip in place, I used a ruler to have the paperclip parallel to the wires.

### Problems and discoveries:
*  There were rare instances - around 1 out of 10 times - where I closed the drawer and the current did not flow (I imagine) because the red LED was still blinking. I am wondering if that is because a paper clip is not the best conductor, or that my wires could be connected in a better manner, or maybe the inslulating tape got in between the conductors.
*  Depending on how short I let the delays for the blinking red LED be, the brighter the green LED shines. I have no idea why this happens. One time I used a full one-second delay and the green LED was just barely lit up, plus the red LED's brightness never changed either way.
* The drawer could never close "fully", which is not good for realism and usability's sake but it works very well as a creative switch.
* I accidently let the current not pass through a resistor during the circuit's early construction and it blew out an LED, there was even a pop sound and a very bright light for a millisecond.
* If I were to add upon it later in the course, I might want to include a beeping sound whenever the drawer opens, in tandem with the red LED blinking.
