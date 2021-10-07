"use strict";
console.log(gsap);
const ball = document.querySelector(".ball");
// gsap.to(ball, { x: "400px", duration: 2 });
// gsap.to(ball, { rotate: "200deg" });
// gsap.to(ball, { delay: 2, scale: 0, y: "-300px" });

const timeline = gsap.timeline({ repeat: 3 });
timeline.to(ball, { x: "400px", duration: 2, rotate: "200deg" }).to(ball, { delay: 1, scale: 0, x: "100vw", y: "-100vh" });
// time1.to(".ball", { duration: 1, y: "-300px" }).to("#ball1", { duration: 1.5, scale: -5 });
