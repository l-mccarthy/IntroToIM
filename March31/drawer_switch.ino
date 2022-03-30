// constants
const int greenLed = 12;        // the number of the Green LED pin
const int redLed = 13;          // the number of the Red LED pin
const int drawerSwitch = A0;    // the number of the drawerSwitch pin

void setup() {
  // initialize the green LED pin as an output:
  pinMode(greenLed, OUTPUT);
  // initialize the red LED pin as an output:
  pinMode(redLed, OUTPUT);
  // initialize the drawerSwitch pin as an input:
  pinMode(drawerSwitch, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  int switchState = digitalRead(drawerSwitch);

  // check if the drawerSwitch is connected. If yes, the switchState is HIGH:
  if (switchState == HIGH) {
    // turn green LED on:
    digitalWrite(greenLed, HIGH);
    // turn ged LED off:
    digitalWrite (redLed, LOW);
  }
  else (switchState == LOW) {
    // turn green LED off:
    digitalWrite (greenLed, LOW);
    // make red LED blink: 
    digitalWrite (redLed, HIGH);
    delay (100);
    digitalWrite (redLed, LOW);
    delay (100);
  }
}
