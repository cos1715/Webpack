import { hello } from "./hello-world";
import { addImage } from "./image";
import { Button } from "./button";
import { Heading } from "./components/heading";
import ME from "./assets/tez.png";
import ME2 from "./assets/tez2.png";

const button = new Button();
const buttonBye = new Button("Bye");
const h1 = new Heading();

hello();
addImage(ME);
addImage(ME2);
h1.render();
button.addEvent();
button.render();
buttonBye.addEvent();
buttonBye.render();

console.log(process.env.NODE_ENV);
