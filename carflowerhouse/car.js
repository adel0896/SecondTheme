document.querySelector(".car").addEventListener("click", movecar);
function movecar() {
  console.log("move works");
  document.querySelector(".car").style.animation = "move 1s linear 1";
}
