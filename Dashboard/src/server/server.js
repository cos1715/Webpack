const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 9080;

app.use("/", express.static(path.resolve(__dirname, "../../dist")));

app.get("*", (req, res) => {
  const pathToFile = path.resolve(__dirname, "../../dist/index.html");
  const content = fs.readFileSync(pathToFile, "utf-8");

  res.send(content);
});

app.listen(port, () => {
  console.log("Running on " + port);
});