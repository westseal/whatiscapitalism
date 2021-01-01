
let bubbles = [];

let figures = [];





function preload(){


 for(let i = 0; i < 59; i++) {

 figures[i] = loadImage('capitalism/fig' + i + '.jpg');

 }

 

  }                         

  



function setup() {

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 59; i++) {

    let fig = random(figures);

    let x = random(width);

    let y = random(height);

    let r = random(100, 600);

    let b = new Bubble(x, y, r, fig);

bubbles.push(b);

  }

}


function mousePressed() {

for (let i = 0; i < bubbles.length; i++) {

   bubbles[i].clicked(mouseX, mouseY);

  }

}


function mouseDragged() {

       for (let i = 0; i < bubbles.length; i++) {

         bubbles[i].dragged(mouseX, mouseY);

         

      }

   }






function draw() {

 //background(0,0,255);

  for (let i = 0; i < bubbles.length; i++) {

  

    bubbles[i].move();

    bubbles[i].show();

    //fill(255,0,0);

    //ellipse(this.x, this.y, 60);

    

    //fill("red");

    if (mouseX > this.r && mouseY > this.r) {

        cursor('grab');

      }else{ 

        cursor(CROSS);



    
      }

}

}


class Bubble {

  constructor(x, y, r, img) {

    this.x = x;

    this.y = y;

    this.r = r;

    this.fig = img;

 


  

 



}

  


  clicked(px, py) {

    let d = dist(px, py - 500, this.x, this.y);

    if (d < this.r - 5) {

    this.fig= random(figures); 

    cursor('capitalism/dollar.png');

   

    

        

    }

  }


  rollover(px, py) {

    let d = dist(px, py, this.x, this.y);

    if (d < this.r) {

       return true;

    }else{

return false;

    }

  }


  move() {

    this.x = this.x + random(-20,20);

    this.y = this.y + random(-20,20);

    

  }


  show() {

    

    

    image(this.fig, this.x, this.y, this.r, this.r);

   //ellipse(this.x + this.r - 5, this.y + 10, 40);

    //fill(255,0,0);

    

    //stroke(255);

    //strokeWeight(4);

    //fill(this.brightness, 125);

    //ellipse(this.x, this.y, this.r * 2);

  }


  

}

  