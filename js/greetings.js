const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const logOutBtn = document.getElementById("log-out");

const HIDDEN_CLASSNAME = "hidden";
let LOCALSTORAGE_ITEM = localStorage.getItem("username");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  LOCALSTORAGE_ITEM = localStorage.getItem("username");
  paintGreetings();
}

function paintGreetings() {
  greeting.innerText = `${LOCALSTORAGE_ITEM}'s todoList`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOutBtn.classList.remove(HIDDEN_CLASSNAME);

  let hiddenClass = document
    .getElementById("todo-form")
    .classList.contains("hidden");
  if (hiddenClass) {
    toDoForm.classList.remove("hidden");
  }
}

if (LOCALSTORAGE_ITEM != null) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}
loginForm.addEventListener("submit", onLoginSubmit);
