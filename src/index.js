import { hello } from "./hello-world";
import { addImage } from "./image";
import "./style.css";
// import ME from "./tez.jpg";
// import MEee from "./assets/tez.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Hello";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

hello();
// addImage();
