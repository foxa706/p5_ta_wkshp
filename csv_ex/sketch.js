//using code example from p5 site 

var table;
var val;

function preload() {
  table = loadTable("data/significant_month.csv", "csv", "header");
}

function setup() {
  rectMode(CENTER);
  // println(table.getRowCount() + " total rows in table");
  // println(table.getColumnCount() + " total columns in table");
  createCanvas(1000, 500);
  textSize(24);
  text('Earthquake Magnitudes of the past month', 20, 20);
  
  var row = table.getRowCount();
  // text(col, 100, 100);
  val = width/row;
//this determines the width of the chart bars
    
  for (var i = 0; i<row; i++){
    // println(table.getString(0, i));
    
    println(table.getString(i, 4));
    var magN = table.getString(i, 4);//mag
    fill(0);
    rect(i*val+10, height/2, 20, (magN *10)*-1);
    
    println(table.getString(i, 13));//names
    var loc = table.getString(i, 13);
    textSize(9);
    text(loc, i*val+10, 425, 25, 30);
    // var mag = data.getString(i, 0);
    
    // text(amount + ' ' + unit + ' ' + item + ' ' + source, width/2, rowHeight*(i+1));
  }

  // for (var r = 0; r < table.getRowCount(); r++)
  //   for (var c = 0; c < table.getColumnCount(); c++) {
  //     println(table.getString(r, c));
  // }
  
}

function draw() {
  
}