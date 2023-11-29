import "../src/style.css";

export default function component() {
  const element = document.createElement("div");
  element.innerHTML = `<h1 class="test">Hello World!!!!</h1>`;

  return element;
}

document.body.appendChild(component());
