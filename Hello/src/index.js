import { Button } from "./button";
import { Heading } from "./components/heading";
import { Image } from "./components/image";

const button = new Button();
const buttonBye = new Button("Bye");
const h1 = new Heading();
const img1 = new Image();


img1.render()
h1.render("index");
button.addEvent();
button.render();
buttonBye.addEvent();
buttonBye.render();

console.log(process.env.NODE_ENV);
