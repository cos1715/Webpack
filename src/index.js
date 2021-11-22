import { hello } from "./hello-world";
import { addImage } from "./image";
import { Button } from "./button";
import { Heading } from "./components/heading";

const button = new Button();
const buttonBye = new Button("Bye");
const h1 = new Heading();

hello();
addImage();
h1.render();
button.addEvent();
button.render();
buttonBye.addEvent();
buttonBye.render();

console.log(process.env.NODE_ENV);
