function setup() {
  createCanvas(300, 700);

}

function draw() {

  arc(width/2, height/2, width/4, height/4, PI, PI/2)
  ellipse(50, 50, 50, 50);
  line(0,0,300, 700);
  ellipse(150, 150, 100, 100);
  point(width/2, height/2);
  quad(150, 100, 200, 150, 100, 400, 150, 400);
  rect(200, 200, 50, 100);
  rect(210, 210, 50, 100);
  triangle(50, 500, 100, 250, 150, 500);

}
