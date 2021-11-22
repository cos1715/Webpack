import "./styles.scss";

export class Heading {
  constructor(text = "Hello") {
    this.text = text;
    this.h1 = document.createElement("h1");
    this.body = document.getElementsByTagName("body")[0];
  }
  render() {
    this.h1.innerText = this.text;
    this.h1.setAttribute("class", "text-h1");

    if (this.body) {
      this.body.appendChild(this.h1);
    }
  }
}
