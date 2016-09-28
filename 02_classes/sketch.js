//Sketch 1: Class and array of class objects
//inspired from Cars example by Brad Borevitz and adapted from code written in Processing
//by Aditi Surana

// var num = 10; // number of ships
var ufos = []; 
//var exVariable; 


function setup() {
  createCanvas(500, 500);
  // ufo = new Ship();
  // Create objects
  for (var i=0; i<50; i++) {
    ufos.push(new Ship());
  }

}

function draw() {
  background(255);
  fill(200);
  // ellipse(ufo.x, ufo.y, 100, 30);
  for (var i=0; i<ufos.length; i++) {
    ufos[i].moveShip();
    ufos[i].drawShip();
  }
  
  
}

function Ship(){
  //properties, this refers to the future instance of this object
  this.col = color(random(256), random(256), random(256), random(256));
  this.x = random(width); 
  this.y = random(height);
  this.speed = random(1, 10);
  
    // methods
  this.drawShip = function() { // draw spaceship
    
    noStroke();
    fill(this.col);
    
    ellipse(this.x, this.y, 50, 20);
    ellipse(this.x, this.y-10,20,20);
    
    
  };
 
  this.moveShip = function() { //move spaceship
    
    // increase value of x based on speed
    this.x+= this.speed;
    // check boundary conditions and reset values
    if (this.x>width && this.speed>0) {
      this.x = -20;
      this.x+= this.speed;
    }
    
    
  };
  
}