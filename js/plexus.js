let inc = 0.1;

let particules = [];
let sketch = p => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < 70; i++) {
      particules[i] = new Particule(p);
    }
  };

  p.draw = () => {
    p.clear();
    particules.forEach((particule, index) => {
      for (let i = index + 1; i < particules.length; i++) {
        if (
          distBis(
            particules[i].position.x,
            particules[i].position.y,
            particule.position.x,
            particule.position.y
          ) <= 150
        ) {
          p.strokeWeight(1);
          p.stroke(240, 240, 240);
          p.line(
            particules[i].position.x,
            particules[i].position.y,
            particule.position.x,
            particule.position.y
          );
        }
      }
      particule.update();
      particule.show();
      particule.edges();
    });
  };
  let distBis = (x, y, xBis, yBis) => {
    return Math.sqrt(Math.pow(x - xBis, 2) + Math.pow(y - yBis, 2));
  };
};
let Myp5 = new p5(sketch);
