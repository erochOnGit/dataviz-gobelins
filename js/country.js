// P_2_2_4_01

"use strict";
let country = getUrlParam("country");
let maxCount = 0;
let setCountryCount = (currentCountry) => {
  return  map(
  getCo2PerCountryPerYear(currentCountry, "1990"),
  0,
  3000000000,
  0,
  1000
  ); // max count of the cirlces
}
maxCount = setCountryCount(country);
var currentCount = 1;
var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(600, 600);
  strokeWeight(0.5);
  init();
}

let init = () => {
  currentCount = 1;

 // first circle
  x[0] = width / 2;
  y[0] = height / 2;
  r[0] = 10;
  background(255);
  frameCount = 1;
  loop();
}

function draw() {
  clear();

  // create a random set of parameters
  var newR = random(1, 7);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);

  var closestDist = Number.MAX_VALUE;
  var closestIndex = 0;
  // which circle is the closest?
  for (var i = 0; i < currentCount; i++) {
    var newDist = dist(newX, newY, x[i], y[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }

  // show original position of the circle and a line to the new position
  // fill(230);
  // ellipse(newX, newY, newR * 2, newR * 2);
  // line(newX, newY, x[closestIndex], y[closestIndex]);

  // aline it to the closest circle outline
  var angle = atan2(newY - y[closestIndex], newX - x[closestIndex]);

  x[currentCount] = x[closestIndex] + cos(angle) * (r[closestIndex] + newR);
  y[currentCount] = y[closestIndex] + sin(angle) * (r[closestIndex] + newR);
  r[currentCount] = newR;
  currentCount++;

  // draw them
  for (var i = 0; i < currentCount; i++) {
    fill(50);
    ellipse(x[i], y[i], r[i] * 2, r[i] * 2);
  }
  if (currentCount >= maxCount) {noLoop();}
}

function keyReleased() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}


let handleSelect = (selectedCountry) => {
  country = selectedCountry
  maxCount = setCountryCount(country);
  maxCount<1 ? maxCount = 10 : null 
  init();
}