//TO DO//
//draw an image to screen
//image size in aspect with mouseX
//draw text
//link to a google font
//
var otherFont;
var img;
var value;
//can also preload a font directly from data file
// function preload(){
//   otherFont = loadFont('fontName.ttf');
// }

function setup() {
  value = 100;
  img = loadImage('0.jpg');
  createCanvas(600, 400);
  // textFont('Georgia');
  //calling to the loaded font
  textFont('Baloo Bhaina');
  textSize(22);
}

function draw() {
  // background(255);
  fill(0, 0, value)
  text('Hello World', 20, 200);
  //make a box for text
  text('Hello World, it is a beautiful day outside!', 0, 0, 200, 200 );
  
  
  // var aspect = img.height / img.width;
  // var imageWidth = mouseX;
  // var imageHeight = imageWidth + aspect;
  // image(img, 0, 0, imageWidth, imageHeight);
  
}

function keyPressed() {
  if (value === 100) {
    value = 255;
  } else {
    value = 100;
  }
}