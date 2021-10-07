"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  document.querySelector("#generator").addEventListener("click", generateBox);
}

function generateBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.classList.add("generated-box");
  box.style.backgroundColor = getRandomColor();

  // const hmmFrame = box.getBoundingClientRect();
  // console.log(hmmFrame);
  document.querySelector("#generated").append(box);

  // TODO: Create FLIP animation
  //gives me first positions
  const firstframe = document.querySelector("#generator").getBoundingClientRect();

  console.log(firstframe);
  const lastframe = box.getBoundingClientRect();
  console.log(lastframe);
  const deltaX = firstframe.left - lastframe.left;
  const deltaY = firstframe.top - lastframe.top;
  const deltaW = firstframe.width / lastframe.width;
  const deltaH = firstframe.height / lastframe.height;
  box.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translateX(${deltaX}px) translateY(${deltaY}px)
      scale(${deltaW}, ${deltaH})`,
      },
      {
        transformOrigin: "top left",
        transform: "none",
      },
    ],
    {
      duration: 300,
      easing: "ease-in-out",
    }
  );
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
