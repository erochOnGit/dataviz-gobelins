// P_2_2_4_01

"use strict";
console.log(store);
let country = getUrlParam("country");
let maxCount = 0;
let year = "1990";
let setCountryCount = (currentCountry, year) => {
  return map(
    getCo2PerCountryPerYear(currentCountry, year),
    0,
    3000000000,
    0,
    1000
  ); // max count of the cirlces
};

var currentCount = 1;
var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 600);
  strokeWeight(0.5);
  init();
}

let init = () => {
  maxCount = setCountryCount(country, year);
  currentCount = 1;

  // first circle
  x[0] = width / 2;
  y[0] = height / 2;
  r[0] = 10;
  background(255);
  frameCount = 1;
  loop();
};

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
  if (currentCount >= maxCount) {
    noLoop();
  }
}

function keyReleased() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}

let handleSelect = selectedCountry => {
  country = selectedCountry;
  maxCount < 1 ? (maxCount = 5) : null;
  init();
};
// let handleTimeline = () => {
//   init();
// };

// console.log(init());

function timeline() {
  let container = document.querySelector("#container__timeline"),
    ul = document.querySelector("#container__timeline__ul");

  let yearForText = store.year;

  for (let i = 0; i <= 48; i++) {
    // Create element html
    let liNode = document.createElement("li");
    liNode.setAttribute("class", "container__timeline__ul__li");

    let li = document.querySelectorAll(".container__timeline__ul__li");
    ul.appendChild(liNode);
    //ul.insertBefore(liNode, li.firstChild)

    let spanText = document.createElement("span");
    spanText.setAttribute("class", "container__timeline__li__span");
    liNode.appendChild(spanText);

    let spanYear = document.createElement("span");
    spanYear.setAttribute("class", "container__timeline__li__year");
    liNode.appendChild(spanYear);

    spanYear.innerHTML = yearForText--;
  }

  let li = document.querySelectorAll(".container__timeline__ul__li");

  function changeActiveClass() {
    // Init active
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("active");

      if (li[i].lastElementChild.innerHTML == store.year) {
        li[i].className += " active";
      }
    }
  }

  changeActiveClass();

  // Set active in click
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener(
      "click",
      e => {
        for (let o = 0; o < li.length; o++) {
          li[o].classList.remove("active");
        }

        e.target.className += " active";
        init();
      },
      false
    );
  }

  window.addEventListener("wheel", e => {
    let firstyearOfList = document.querySelector(
        ".container__timeline__ul__li:first-child"
      ).lastElementChild.innerHTML,
      lastYearOfList = document.querySelector(
        ".container__timeline__ul__li:last-child"
      ).lastElementChild.innerHTML;

    /*
        if (store.year === firstyearOfList--) {
            
            store.year = firstyearOfList--
            //return false

        } else if (store.year === lastYearOfList++) {
            
            store.year = lastYearOfList++
            //return false
        }
        */

    if (Math.sign(e.wheelDeltaY) == 1) {
      store.year++;
    } else {
      store.year--;
    }
    init();
    changeActiveClass();
  });
}
timeline();
