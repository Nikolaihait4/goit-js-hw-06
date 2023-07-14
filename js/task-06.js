// Валидация по Blur

const form = document.querySelector("#validation-input");

form.addEventListener("blur", onBlur);

function onBlur(e) {
  const length = e.target.value.length;
  if (length === 6) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
}
