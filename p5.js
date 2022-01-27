function setup() {
  createCanvas(300,400);
  background(25);
  
  // circle and rectangle default colors
  circle(300/2,400/2,50);
  rect(200,80,80,20);
  
  //stroke and fill change
  fill(180,0,0);
  stroke(0,0,180);
  circle(80,80,80);
  ellipse(200,280,80,20);
  
  //change stroke only
  stroke(0,180,0);
  line(0,0,300,300);
  
  let foo = radians(90);
  
  arc(150,55,
      50,50,
      0,foo);
}
