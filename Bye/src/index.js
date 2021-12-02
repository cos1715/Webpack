import { Heading } from "./components/heading";
import { Image } from "./components/image";

const h1 = new Heading();
const img2 = new Image();

img2.render();
h1.render("index 2");

console.log(process.env.NODE_ENV);
