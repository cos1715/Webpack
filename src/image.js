

export const addImage = (img) => {
  const node = document.createElement("img");
  node.setAttribute("alt", "OMG");
  node.setAttribute("width", "300");
  node.setAttribute("src", img);
  const body = document.getElementById("root");

  body.appendChild(node);
};
