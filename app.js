const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("./tasks.json"));
  res.json(tasks);
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
