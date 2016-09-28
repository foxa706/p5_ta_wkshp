var img = [];
var value = 1;
var x = 0; 
var size;

function setup() {
  for(var i = 0; i<4; i++){
    img[i] = loadImage('data/' + i +'.jpg');
    console.log("loaded image " + i + " !");
  }
  createCanvas(700, 700);
  // textFont('Modak');
  // textSize(24);
  frameRate(10);
  size = 1;
}

function draw() {
  textSize(size);
  background(value);
  image(img[x], 0, 0, width, 300);
  if (mouseIsPressed){
    fill(255, 0,0);
  }else{
    fill(0, 255, 0 );
  }
  // for(var i = 0; i <=50 ; i++){
  //   fill(0);
  //   rect(0, 0, width, height);
  //   fill(200, 0, 200);
  //   textSize(i);
  text('Hello World', 0, 0, 200, 300);
  // }
  size = size +10;
  console.log(size);
}

function mousePressed(){
  if (value === 1){
    x = 3;
    value = 255;
  }else{
    x = 2
    value = 1;
  }
}