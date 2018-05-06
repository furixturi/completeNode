const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();

// To let nodemon watch hbs changes:
// $ nodemon server.js -e js,hbs
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

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

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home",
    welcomeMessage: "Welcome!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
