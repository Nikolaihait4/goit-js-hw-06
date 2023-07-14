const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", onClickEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickEl() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = document.body.style.backgroundColor;
  // console.log(document.body.style.backgroundColor);
}
