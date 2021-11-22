import "./styles/style.scss";

export class Button {
  btnClass = "hello";

  constructor(text = "Hello") {
    this.text = text;
    this.body = document.getElementById("root");
    this.button = document.createElement("button");
  }
  render() {
    const x = { x: "fd", y: "dfs" };
    console.log({ ...x });
    this.button.innerText = this.text;
    this.button.setAttribute("class", this.btnClass);

    if (this.body) {
      this.body.appendChild(this.button);
    }
  }
  addEvent() {
    this.button.addEventListener("click", () => {
      const p = document.createElement("p");
      p.innerText = this.text;
      p.setAttribute("class", "text");
      if (this.body) {
        this.body.appendChild(p);
      }
    });
  }
}
