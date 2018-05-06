const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // res.send("<h1>Hello express!</h1>");
  res.send({
    name: "Xiaoli",
    likes: ["eating", "travel"]
  });
});

app.get('/about', (req, res) => {
  res.send('About page')
});

app.listen(3000);
