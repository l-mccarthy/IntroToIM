// LED pins
const int greenLED = 6;
const int redLED1 = 10;
const int redLED2 = 9;

// Sensor pins
const int pushButton = 2;  // digital
const int pinLDR = A0;     // analog

void setup() {
  pinMode(greenLED, OUTPUT);
  pinMode(redLED1, OUTPUT);
  pinMode(redLED2, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(pushButton); // check if button is pressed
  int valueLDR = analogRead(pinLDR);         // reading lightness
  if (buttonState == HIGH) {                 // button on: turn on each LED with 1 second delay
    digitalWrite(redLED1, HIGH);             // red LEDs will turn on first, then the green one
    delay(1000);                             // the LEDs will stay on as along as button is pressed
    digitalWrite(redLED2, HIGH);
    delay(1000);
    digitalWrite(greenLED, HIGH);
  }
  else {                          // button not on: turn off greenLED and blink the two redLEDs
    digitalWrite(greenLED, LOW);  // initially, all LEDs turn off
    digitalWrite(redLED1, LOW);
    digitalWrite(redLED2, LOW);
    delay(valueLDR);              // longer delay the brighter the room
    digitalWrite(redLED1, HIGH);
    delay(valueLDR);
    digitalWrite(redLED1, LOW);
    digitalWrite(redLED2, HIGH);
    delay(valueLDR);
    digitalWrite(redLED2, LOW);
  }
}
