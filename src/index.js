import { hello } from "./hello-world";
import { Button } from "./button";
import { Heading } from "./components/heading";
import { Image } from "./components/image";
import ME2 from "./assets/tez2.png";

const button = new Button();
const buttonBye = new Button("Bye");
const h1 = new Heading();
const img1 = new Image();
const img2 = new Image(ME2);

hello();
img1.render();
img2.render();
h1.render();
button.addEvent();
button.render();
buttonBye.addEvent();
buttonBye.render();

console.log(process.env.NODE_ENV);
