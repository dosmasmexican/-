let rains = []

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i = i + 1) {
    let rain = new Rain(random(width),200);
    rains.push(rain);
  }
}

function draw() {
  background(20);
  for(let rain of rains){
rain.display()
  }
}

class Rain{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.len = random(15,30);
  }

  display(){
    stroke(255);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y+this.len)
  }
}