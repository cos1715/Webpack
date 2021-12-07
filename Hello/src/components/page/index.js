import { Button } from "../../button";
import { Heading } from "../heading";
import { Image } from "../image";

export class HelloPage {
  render() {
    const button = new Button();
    const buttonBye = new Button("Bye");
    const h1 = new Heading();
    const img1 = new Image();

    img1.render();
    h1.render("index");
    button.addEvent();
    button.render();
    buttonBye.addEvent();
    buttonBye.render();
  }
}
