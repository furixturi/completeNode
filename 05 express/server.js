const express = require("express");

const app = express();

const fs = require("fs");

// app.use let us use middleware
// The built-in express.static middleware takes the absolute path to the folder
app.use(express.static(__dirname + "/public"));

// Custom middleware
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `Request: ${now}\n> method: ${req.method}\n> url: ${req.url}\n`;
  console.log(log);

  fs.appendFile("server.log", log, err => {
    if (err) {
      console.log("Unable to append to server.log");
    }
  });
  next();
});

app.get("/", (req, res) => {
  // res.send("<h1>Hello express!</h1>");
  res.send({
    name: "Xiaoli",
    likes: ["eating", "travel"]
  });
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
