import ME from "./assets/tez.png";

export const addImage = () => {
  const node = document.createElement("img");
  node.setAttribute("alt", "OMG");
  node.setAttribute("width", "300");
  node.setAttribute("src", ME);
  const body = document.getElementById("root");

  body.appendChild(node);
};
