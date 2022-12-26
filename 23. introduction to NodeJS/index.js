const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log("user was called");
});

app.listen(4000, () => {
  console.log("listening to port:4000");
});
