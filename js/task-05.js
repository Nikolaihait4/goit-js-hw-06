// Работа с инпутом

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  if (textInput.value === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = textInput.value;
  }
});

// textInput.addEventListener("input", (event) => {
//   textOutput.textContent = event.currentTarget.value;
// });
