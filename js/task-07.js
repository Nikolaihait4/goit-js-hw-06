// Изменение размера текста
const fontSizeControl = document.querySelector("#font-size-control");
const textOut = document.querySelector("#text");
console.log(textOut);

fontSizeControl.addEventListener("input", onClick);

function onClick() {
  const controlValue = fontSizeControl.value;
  textOut.style.fontSize = controlValue + "px";
}

// fontSizeControl.addEventListener("input", (evt) => {
//   let currentValue = evt.currentTarget.value;
//   textOut.style.fontSize = `${currentValue}px`;
// });
