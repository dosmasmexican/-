class Rain{
    constructor(x,y){
      this.pos = createVector(x,y);
      this.vel = createVector();
      this.acc = createVector();
      this.len = random(15,30);
      this.thick = random(255);
      this.mass = this.len * this.thick
    }
  
    applyforce(force){
      let f = p5.Vector.div(force, this.mass*0.0005);
      this.acc.add(f)
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