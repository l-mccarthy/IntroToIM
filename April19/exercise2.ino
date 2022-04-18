////////////////////////////////////////
// Controlling LED Brightness from p5 //
////////////////////////////////////////

int led = 5;            // the PWM pin the LED is attached to
int brightness = 0;     // how bright the LED is initially
int fadeAmount = 10;    // how many points to fade the LED by

void setup() {
  Serial.begin(9600);   // initiate the serial monitor
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, brightness);
  while (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();
    switch (inByte) {
      case 1:                                      // if "1" is sent
        analogWrite(led, brightness);
        brightness = brightness - fadeAmount;      // decrese LED brightness by increment
        break;
      case 2:                                      // if "2" is sent
        analogWrite(led, brightness);
        brightness = brightness + fadeAmount;      // increase LED brightness by increment
        break;
    }
    if (brightness <= 0 || brightness >= 255) {    // if the LED gets too bright (or too dim)
    fadeAmount = -fadeAmount;                      // reverse the fading direction
    }
  }
}
