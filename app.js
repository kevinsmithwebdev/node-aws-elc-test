const express = require("express");
const app = express();

console.log("\n\n\n");

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.listen(3000, () => {
  console.log("Listening on 3000...");
});
