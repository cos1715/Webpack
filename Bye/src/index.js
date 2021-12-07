import { Heading } from "./components/heading";
import { Image } from "./components/image";

const h1 = new Heading();
const img2 = new Image();

img2.render();
h1.render("index 2");

import("HelloApp/Button").then((ButtonModule) => {
  const Button = ButtonModule.Button;
  const button = new Button();
  button.render();
});

console.log(process.env.NODE_ENV);
