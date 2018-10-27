var n = 0;
var c = 3;

var points = [];

var start = 0;

function setup() {
  createCanvas(1250, 580);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {

    background(0);
   
    
  rotate(n * 0.3);

  for (var i = 0; i < n; i++) {
      var a = i * 137.8;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    var hu = sin(start + i * 0.5);
    hu = map(hu, -1, 1, 0, 360);
    fill(hu, 255, 255);
    noStroke();
   ellipse(x, y, 4, 4);
    
      textSize(32);
    text('TE AMO VRENDA', 50, r);
    fill(0, 250, 153);
     
  }
  n += 50;
  start += 50;
    

}
