import "../src/style.css";
import createToDo from "./todo";

export default function renderDisplay() {
  const element = document.createElement("div");
  let todo1 = createToDo("complete project", "to do desc", "tomorrow", "10");
  element.innerHTML = `
  <h1>To do:</h1>
  <p>${todo1.title}</p>
  <p>${todo1.description}</p>
  <p>${todo1.dueDate}</p>
  <p>${todo1.priority}</p>
  `;
  document.body.appendChild(element);
}

renderDisplay();
