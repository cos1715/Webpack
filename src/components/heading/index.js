import _ from "lodash";
import "./styles.scss";

export class Heading {
  constructor(text = "Hello") {
    this.text = text;
    this.h1 = document.createElement("h1");
    this.body = document.getElementById("root");
  }
  render(pageName = "") {
    this.h1.innerText = `${this.text} '${_.upperFirst(pageName)}' page`;
    this.h1.setAttribute("class", "text-h1");

    if (this.body) {
      this.body.appendChild(this.h1);
    }
  }
}
