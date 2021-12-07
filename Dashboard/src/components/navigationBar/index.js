import "./styles.scss";

export class NavigationBar {
  render(navData) {
    const ul = document.createElement("ul");
    const li = navData.map((item) => {
      return `
      <li>
      <a href="${item.url}">${item.title}</a>
      </li>
      `;
    });
    ul.innerHTML = li.join("");
    ul.classList.add("nav-bar");
    document.getElementById("root").appendChild(ul);
  }
}
