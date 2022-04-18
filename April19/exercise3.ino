//////////////////////
//// Gravity Wind ////
//////////////////////

int led = 5;             // the PWM pin the LED is attached to

void setup() {
  Serial.begin(9600);    // initiate the serial monitor
  pinMode(led, OUTPUT);  
}

void loop() {
  int potValue = analogRead(A0);     // read values from A0 pin
  while (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();
    switch (inByte) {
      case 0:                        // if statement from p5 sending 0
        digitalWrite(led, LOW);      // LED is off
        break;
      case 1:                        // if statement from p5 sending 1
        digitalWrite(led, HIGH);     // LED is on
        break;
    }
  }
  int mapped;                               // map values for potentiometer for wind emulation
  mapped = map(potValue, 0, 1023, 0, 2);    // potentiometer values between 0 and 2 (for left or right)
  Serial.println(mapped);                   // print the number on serial monitor
}
