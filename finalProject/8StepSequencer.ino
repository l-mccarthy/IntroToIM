void setup() {
  Serial.begin(9600);

  // pushbutton
  pinMode(12, OUTPUT);
 
  // switches
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  int pushbutton = digitalRead(12);

  // order in reverse as they reach easier the physical arduino
  int switch8 = digitalRead(2);
  int switch7 = digitalRead(3);
  int switch6 = digitalRead(4);
  int switch5 = digitalRead(5);
  int switch4 = digitalRead(6);
  int switch3 = digitalRead(7);
  int switch2 = digitalRead(8);
  int switch1 = digitalRead(9);
 
  int pot1Mapped = map(analogRead(A1), 0, 1023, 12, 0);  // pitch (changing samples)
  int pot2Mapped = map(analogRead(A2), 0, 1023, 6, 2);   // tempo (frame rate)
  int pot3Mapped = map(analogRead(A3), 0, 1023, 15000, 100);  // filter frequency
  int pot4Mapped = map(analogRead(A4), 0, 1023, 15, 5);  // resonance

  Serial.print(pushbutton);
  Serial.print(",");
  Serial.print(switch1);
  Serial.print(",");
  Serial.print(switch2);
  Serial.print(",");
  Serial.print(switch3);
  Serial.print(",");
  Serial.print(switch4);
  Serial.print(",");
  Serial.print(switch5);
  Serial.print(",");
  Serial.print(switch6);
  Serial.print(",");
  Serial.print(switch7);
  Serial.print(",");
  Serial.print(switch8);
  Serial.print(",");
  Serial.print(pot1Mapped);
  Serial.print(",");
  Serial.print(pot2Mapped);
  Serial.print(",");
  Serial.print(pot3Mapped);
  Serial.print(",");
  Serial.print(pot4Mapped);
  Serial.println();

  delay(250);
}
