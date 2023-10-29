let rains = []

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
let gravity = createVector(0, 0.2);
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