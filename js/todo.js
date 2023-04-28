const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li);
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  console.log(toDos);
  saveToDos();
  li.remove();
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDos.push(newToDo);
  saveToDos();

  toDoInput.value = "";
  paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}
