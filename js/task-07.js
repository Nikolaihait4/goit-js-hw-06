// Изменение размера текста
const fontSizeControl = document.querySelector("#font-size-control");
const textOut = document.querySelector("#text");
console.log(textOut);

fontSizeControl.addEventListener("click", onClick);

function onClick() {
  const controlValue = fontSizeControl.value;
  textOut.style.fontSize = controlValue + "px";
}
