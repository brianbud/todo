import "../src/style.css";
import createToDo from "./todo";
import createform from "./form";
const container = document.createElement("div");
container.id = "form-container";
document.body.appendChild(container);
const todosArr = [];

const todoForm = createform();
container.appendChild(todoForm);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  console.log("you clicked");
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  const newToDo = createToDo(title, description, dueDate, priority);
  todosArr.push(newToDo);
  console.log(todosArr);
  form.reset();
});
