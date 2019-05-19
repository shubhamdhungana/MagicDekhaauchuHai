const btn = document.querySelector(".btn");
const bodybg = document.querySelector("body");

const colors = ["yellow", "blue", "white", "green", "pink"];

btn.addEventListener("click", changecolor);

function changecolor() {
  let random = Math.floor(Math.random() * colors.length);
  bodybg.style.backgroundColor = colors[random];
}
