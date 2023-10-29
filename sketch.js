let rains = []

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(20);
let gravity = createVector(0, random(0.2,1));
let windA = createVector(0.1, 0);
let windB = createVector(-0.1, 0);

  for(let rain of rains){
    rain.applyforce(gravity);
    if (keyIsDown(37)) {
      rain.applyforce(windA);
    }
    if (keyIsDown(39)) {
      rain.applyforce(windB);
    }
    rain.update();
rain.show()
  }
  
  for (let i = 0; i < 7; i = i + 1) {
    let rain = new Rain(random(width),0);
    rains.push(rain);
  }
}

class Rain{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.len = random(15,30);
    this.thick = random(255);
  }

  applyforce(force){
    this.acc.add(force)
  }

update(){
  this.vel.add(this.acc);
  this.pos.add(this.vel);

  this.acc.mult(0);

  if (this.pos.y - this.len > height) {
    rains.shift();
  }

  if(this.pos.y>height+50){
    this.pos.y = height+50
  }
}
  show(){
    stroke(255,this.thick);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.len)
  }
}