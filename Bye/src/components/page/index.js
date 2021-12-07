import { Heading } from "../heading";
import { Image } from "../image";

export class ByePage {
  render() {
    const h1 = new Heading();
    const img2 = new Image();

    img2.render();
    h1.render("index 2");

    console.log(process.env.NODE_ENV);
  }
}
