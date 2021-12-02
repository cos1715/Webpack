const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 9090;

app.get("/", (req, res) => {
  const pathToFile = path.resolve(__dirname, "../../dist/index.html");
  const content = fs.readFileSync(pathToFile, "utf-8");

  res.send(content);
});

app.get("/2", (req, res) => {
  const pathToFile = path.resolve(__dirname, "../../dist/index2.html");
  const content = fs.readFileSync(pathToFile, "utf-8");

  res.send(content);
});

app.use("/static", express.static(path.resolve(__dirname, "../../dist")));

app.listen(port, () => {
  console.log("Running on " + port);
});
