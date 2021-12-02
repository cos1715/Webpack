import { hello } from "./hello-world";
import { Heading } from "./components/heading";
import { Image } from "./components/image";
import ME2 from "./assets/tez2.png";

const h1 = new Heading();
const img2 = new Image(ME2);

hello();
img2.render();
h1.render("index 2");

console.log(process.env.NODE_ENV);
