let rains = []

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
let gravity = createVector(0, random(0.2,1));

  for(let rain of rains){
    rain.applyforce(gravity);
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
}
  show(){
    stroke(255,this.thick);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y+this.len)
  }
}