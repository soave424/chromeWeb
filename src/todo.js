const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const todoS = [];

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todoS));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todoS.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);
