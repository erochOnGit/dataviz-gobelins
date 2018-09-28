function Particule(p) {
  this.position = p.createVector(p.random(p.width), p.random(p.height));
  this.velocity = p.createVector(
    p.random(-p.height, p.height) * 0.1,
    p.random(-p.width, p.width) * 0.1
  );
  this.acceleration = p.createVector(0, 0);
  this.maxSpeed = 0.5;

  this.prevPosition = this.position.copy();

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  this.show = function() {
    p.stroke(230, 230, 230);
    p.strokeWeight(4);
    p.point(this.position.x, this.position.y);
    // this.updatePrev();
  };

  this.updatePrev = function() {
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;
  };

  this.edges = function() {
    if (this.position.x > p.width) {
      this.position.x = 0;
      this.updatePrev();
    }
    if (this.position.x < 0) {
      this.position.x = p.width;
      this.updatePrev();
    }
    if (this.position.y > p.height) {
      this.position.y = 0;
      this.updatePrev();
    }
    if (this.position.y < 0) {
      this.position.y = p.height;
      this.updatePrev();
    }
  };

  this.follow = function(vectors) {
    let x = p.floor(this.position.x / scale);
    let y = p.floor(this.position.y / scale);
    let index = x + y * comlumns;
    let force = vectors[index];
    this.applyForce(force);
  };
}
