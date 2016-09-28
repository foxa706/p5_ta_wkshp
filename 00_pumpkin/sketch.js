var drawNight;

function setup(){
  createCanvas(500, 500);
  background('#99CCFF');
  noStroke();
  drawNight=false;
}

function draw(){
  if(drawNight){
    fill(15);
    rect(0, 0, width, height);
  }else{
    fill('#99CCFF');
    rect(0, 0, width, height);
  }
  //draw the brown ground
  fill('#663300');
  rect(0, 350, 500, 150);
  //draw the pumpkin
  fill('#CC6633');
  ellipse(width/2, height/2, 368, 290);
  //stem
  fill('#003300');
  rect(width/2-12, 64, 24, 45);
  if(mouseIsPressed){
    fill(200, 200, 0);
    drawNight = true;
  }else{
    fill(0);
    drawNight = false;
  }
  // console.log(mouseX + ', ' + mouseY)
  //left eye
  triangle(150, 215, 180, 180, 210, 215);
  //right eye
  var x = 210 + 70;
  triangle(x, 215, x+30, 180, x+60, 215);
  //nose
  triangle(width/2-20, 270, width/2, 225, width/2+20, 270 );
    
  //mouth
  quad(125, 290, 150, 315, 350, 315, 375, 290);

}