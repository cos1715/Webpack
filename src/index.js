import { hello } from "./hello-world";
import { Button } from "./button";
import { Heading } from "./components/heading";
import { Image } from "./components/image";
import React from 'react';

const button = new Button();
const buttonBye = new Button("Bye");
const h1 = new Heading();
const img1 = new Image();

hello();
img1.render();
h1.render("index");
button.addEvent();
button.render();
buttonBye.addEvent();
buttonBye.render();

console.log(process.env.NODE_ENV);
