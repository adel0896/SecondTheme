"use strict";
document.addEventListener("DOMContentLoaded", start);
let front;
let back;
let sole;
let logo;

async function start() {
  let response = await fetch("shoe-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#shoecontainer").innerHTML = mySvgData;

  front = document.querySelector("#front");
  back = document.querySelector("#back");
  sole = document.querySelector("#sole");
  logo = document.querySelector("#logo");

  init();
}

let currentcolor = "yellow";
function setColor(element, colorString) {
  console.log(element);
  element.style.fill = colorString;
}

function init() {
  console.log("init works");
  setColor(front, currentcolor);
  setColor(back, currentcolor);
  setColor(sole, currentcolor);
  setColor(logo, currentcolor);

  front.addEventListener("click", (event) => {
    console.log("I pressed front");

    setColor(front, currentcolor);
    setColor(back, currentcolor);
    setColor(sole, currentcolor);
    setColor(logo, currentcolor);

    console.log(event.target);
  });
  back.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
    console.log("I pressed back");
  });
  sole.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
    console.log("I pressed sole");
  });
  logo.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
    console.log("I pressed logo");
  });
  document.querySelectorAll("rect").forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event);
      currentcolor = event.target.style.fill;
      // document.querySelector("rect").style.fill = "blue";
      //   crown.style.fill = event.target.style.backgroundColor; ------this is for when you want the color to be changed when you press
      console.log(currentcolor);
    });
  });
}
