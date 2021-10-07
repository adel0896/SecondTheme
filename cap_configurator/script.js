"use strict";

// The model of all features
const features = {
  drinksholder: false,
  led: false,
  propeller: false,
  shield: false,
  solarfan: false,
};

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  // register toggle-clicks
  document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
}

function toggleOption(event) {
  const target = event.currentTarget;
  console.log(target);
  const feature = target.dataset.feature;
  console.log(feature);
  console.log(features[feature]);

  // TODO: Toggle feature in "model"

  if (features[feature] === false) {
    // console.log(features[feature]);
    console.log("it is true");
    features[feature] = true;
    console.log(features[feature]);
  } else if (features[feature] === true) {
    console.log(features[feature]);
    console.log("it is false");
    features[feature] = false;
  }

  // If feature is (now) turned on:
  // - mark target as chosen (add class "chosen")
  // - un-hide the feature-layer(s) in the #product-preview;
  // - create featureElement and append to #selected ul
  // - create FLIP-animation to animate featureElement from img in target, to
  //   its intended position. Do it with normal animation or transition class!

  // Else - if the feature (became) turned off:
  // - no longer mark target as chosen
  // - hide the feature-layer(s) in the #product-preview
  // - find the existing featureElement in #selected ul
  // - create FLIP-animation to animate featureElement to img in target
  // - when animation is complete, remove featureElement from the DOM

  if (features[feature]) {
    // console.log(features[feature]);
    // feature added

    console.log(`Feature ${feature} is turned on!`);
    target.classList.add("chosen");
    document.querySelector(`#product-preview [data-feature="${feature}"]`).classList.remove("hide");
    const elem = document.createElement("img");
    elem.id = `${feature}created`;
    elem.src = `images/feature_${feature}.png`;
    // console.log(elem.src);
    document.querySelector("#selected ul").append(elem);
    elem.style.height = "8vw";

    animatebox(feature);

    // TODO: More code
  } else {
    console.log(features[feature]);
    // feature removed
    console.log(`Feature ${feature} is turned off!`);
    target.classList.remove("chosen");
    document.querySelector(`#product-preview [data-feature="${feature}"]`).classList.add("hide");
    returnbox(feature);
    // TODO: More code
  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  const li = document.createElement("li");
  li.dataset.feature = feature;

  const img = document.createElement("img");
  img.src = `images/feature_${feature}.png`;
  img.alt = capitalize(feature);

  li.append(img);

  return li;
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
}
function animatebox(feature) {
  console.group(feature);
  const boxcreated = document.querySelector(`img#${feature}created`);
  console.log(boxcreated);
  const firstelem = document.querySelector(`#options [data-feature="${feature}"] img`);
  const firstframe = firstelem.getBoundingClientRect();
  console.log(firstframe);
  const lastframe = boxcreated.getBoundingClientRect();
  console.log(lastframe);
  const deltaX = firstframe.left - lastframe.left;
  const deltaY = firstframe.top - lastframe.top;
  // const deltaW = firstframe.width / lastframe.width;
  // const deltaH = firstframe.height / lastframe.height;

  boxcreated.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translate(${deltaX}px,${deltaY}px)`,
      },
      {
        transformOrigin: "top left",
        transform: "none",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
    }
  );
  // document.querySelectorAll(".option").forEach((option) => option.removeEventListener("click", toggleOption));
  // start();
}
function returnbox(feature) {
  console.group(feature);
  const boxcreated = document.querySelector(`img#${feature}created`);
  console.log(boxcreated);
  const firstelem = document.querySelector(`#options [data-feature="${feature}"] img`);
  const firstframe = firstelem.getBoundingClientRect();
  console.log(firstframe);
  const lastframe = boxcreated.getBoundingClientRect();
  console.log(lastframe);
  const deltaX = firstframe.left - lastframe.left;
  console.log(deltaX);
  const deltaY = firstframe.top - lastframe.top;
  // const deltaW = firstframe.width / lastframe.width;
  // const deltaH = firstframe.height / lastframe.height;

  boxcreated.animate(
    [
      {
        transformOrigin: "top left",
        transform: "none",
      },
      {
        transformOrigin: "top left",
        transform: `translate(${deltaX}px,${deltaY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );
  boxcreated.style.pointerEvents = "none";
  // document.querySelectorAll(".option").forEach((option) => option.removeEventListener("click", toggleOption));

  // start();

  // boxcreated.remove();
  // boxcreated.style.animationFillMode = forwards;
  // setTimeout(cleanup(feature), 5000);
}

// function cleanup(feature) {
//   features[feature] = false;
//   // document.querySelector("#selected ul img").remove();

//   document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
// }
