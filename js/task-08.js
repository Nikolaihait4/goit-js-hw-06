// Работа с формой
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => {
    if (value === "") {
      alert("Все поля должны быть заполнены!!!");
    } else {
      console.log("OnFormSubmit: ", name);
      console.log("OnFormSubmit: ", value);
      form.reset();
    }
  });
}
