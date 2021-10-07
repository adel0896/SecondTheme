"use strict";
console.log(gsap);
// gsap.to(".ball", { y: "-200", stagger: 0.1 });
// gsap.to(".ball", { delay: 10, x: "50" });
// let time1 = gsap.timeline({ repeat: 3 });
// time1.to(".ball", { duration: 1, y: "-300px" }).to("#ball1", { duration: 1.5, scale: -5 });
gsap.to(".ball", { duration: 2, y: "-400px", stagger: 0.2, ease: "bounce" });
