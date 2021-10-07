"use strict";
let text = document.querySelector(".text").innerHTML;
console.log(text);
let arr = text.split("");
console.log(arr);
arr.forEach((elem, i) => {
  console.log(elem, i);
  //   let string = arr.join("");

  //   let changedstring = string.replaceAll(" ", ".");
  //   const space1 = arr[4];

  document.querySelector("h1").innerHTML = "";
  let spans = document.createElement("span");
  let content = document.createTextNode(`${elem}`);
  spans.appendChild(content);
  // if (elem === " ") {
  //   content = document.createTextNode("..");
  // }
  //   const currenttext = document.querySelector(".text");
  document.querySelector("body").appendChild(spans);
  spans.classList.add("animate");
  spans.style.animationDelay = `${i / 20}s`;
  // set.("animationend", animateagain);
  setTimeout(function () {
    spans.classList.remove("animate");
    // spans.offsetHeight;
    spans.classList.add("animate");
  }, 3000);
  //   elem.classList.add("animate");
  // function animateagain() {
  //   spans.classList.remove("animate");
  //   spans.offsetHeight;
  //   spans.classList.add("animate");
  // }
});
// console.log(string);
// let changedstring = string.replaceAll(" ", ".");
// console.log(changedstring);

// const space2 = arr[9];
// const space3 = arr[13];
// const space4 = arr[16];
// const space5 = arr[19];

// space1.replace("", ".");

// console.log(space1);
