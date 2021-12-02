import ME from "../../assets/tez2.png";
import "./styles.scss";

export class Image {
  constructor(src = ME) {
    this.src = src;
    this.body = document.getElementById("root");
    this.img = document.createElement("img");
  }
  render() {
    this.img.setAttribute("alt", "OMG");
    this.img.setAttribute("width", "300");
    this.img.setAttribute("src", this.src);
    this.img.setAttribute("class", "img");

    if (this.body) {
      this.body.appendChild(this.img);
    }
  }
}
