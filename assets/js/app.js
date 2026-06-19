const signupFormElement = document.querySelector("#signup-form");

signupFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = event.target.email.value;
  const errorMessageElement = document.querySelector("#form__error");

  if (!pattern.test(emailValue)) {
    errorMessageElement.textContent = "Error, please check your email";
  } else {
    errorMessageElement.textContent = "";
  }
});
