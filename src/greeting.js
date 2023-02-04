const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const changeBtn = document.querySelector("#changeBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
changeBtn.classList.add(HIDDEN_CLASSNAME);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  changeBtn.classList.remove(HIDDEN_CLASSNAME);
}

function changeUsername() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  changeBtn.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
changeBtn.addEventListener("click", changeUsername);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  changeBtn.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(username);
}
