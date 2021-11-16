import { hello } from "./hello-world";
import { addImage } from "./image";
import { Button } from "./button";


const button = new Button();
const buttonBye = new Button('Bye');

hello();
addImage();
button.addEvent();
button.render();
buttonBye.addEvent();
buttonBye.render();
