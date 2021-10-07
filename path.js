"use strict";
document.querySelectorAll(".ball").forEach((elem, i) => {
  console.log(elem, i);
  elem.classList.add("ballmove");
  elem.style.animationDelay = `${i}s`;
});
