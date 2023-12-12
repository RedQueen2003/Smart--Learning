
let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = -1;

function preload() {
  myImage = loadImage('media/click on me.jpg');
  
}

function setup() {
  createCanvas(600, 480);
}

function draw() {
 clear(255, 255, 255, 10);
  image(myImage, x, y, 220, 140);
  
  x = x + xspeed;
  y = y + yspeed;
  
 
  if (x < 0 || x > width - 100) {
    
    xspeed = -xspeed;    
  }

  if (y < 0 || y > height - 160) {
    
    yspeed = -yspeed;    
  }

  
  
}