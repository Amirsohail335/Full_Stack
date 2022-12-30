const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log("user was called");

  res.send({
    name:"Amir",
    age: 24,
  });
});

app.get("/", (req, res) => {
    // res.send("server is now working");
    // res.sendFile(__dirname + "/index.html");
    res.json({
        success: true,
    });
    // res.send({
    //     success: true,
    // });
});

app.listen(4000, () => {
  console.log("listening to port:4000");
});
