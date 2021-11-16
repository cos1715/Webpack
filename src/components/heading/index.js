import "./styles.scss";

export class Heading {
  constructor(text = "Hello") {
    this.text = text;
    this.body = document.getElementById("root");
    this.h1 = document.createElement("h1");
  }
  render() {
    this.h1.innerText = this.text;
    this.h1.setAttribute("class", "text-h1");

    if (this.body) {
      this.body.appendChild(this.h1);
    }
  }
}
