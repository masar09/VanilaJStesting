const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const centerComponent = document.querySelector(".center-component");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  centerComponent.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  centerComponent.classList.add(HIDDEN_CLASSNAME);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
  centerComponent.classList.remove(HIDDEN_CLASSNAME);
}
// console.log(savedUsername);
