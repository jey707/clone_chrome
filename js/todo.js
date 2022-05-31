const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newToDo.id;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);

  span.innerText = newToDo.text;
  toDoList.appendChild(li);
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  console.log(li);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
let parsedToDos = JSON.parse(savedToDos);
// console.log(savedToDos);
// console.log(parsedToDos);
// console.log(parsedToDos.length);
// console.log(LOCALSTORAGE_ITEM);

if (LOCALSTORAGE_ITEM === null) {
  console.log(LOCALSTORAGE_ITEM);
  toDoForm.className = "hidden";
}
if (savedToDos !== null) {
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
