document.addEventListener("DOMContentLoaded", start);
let crown;
let visor;

async function start() {
  let response = await fetch("cap.svg");
  let mySvgData = await response.text();
  document.querySelector("#svgloc").innerHTML = mySvgData;

  crown = document.querySelector("#crown");

  visor = document.querySelector("#visor");

  init();
}

let currentcolor = "yellow";
function setColor(element, colorString) {
  console.log(element);
  element.style.fill = colorString;
}

function init() {
  console.log("init works");
  setColor(crown, currentcolor);
  setColor(visor, currentcolor);
  crown.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
    console.log("I pressed crown");
  });
  visor.addEventListener("click", (event) => {
    setColor(event.target, currentcolor);
  });
  document.querySelectorAll(".color-selector").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentcolor = event.target.style.backgroundColor;
      //   crown.style.fill = event.target.style.backgroundColor; ------this is for when you want the color to be changed when you press
      console.log(currentcolor);
    });
  });
}
// init();
