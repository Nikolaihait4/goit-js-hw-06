// Работа с формой

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  if (formData.get("email") === "" || formData.get("password") === "") {
    alert("Все поля должны быть заполнены!!!");
  } else {
    const formDataObject = Object.fromEntries(formData.entries());

    console.log(formDataObject);
    loginForm.reset();
  }
});
