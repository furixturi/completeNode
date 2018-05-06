const express = require("express");

const app = express();



// app.use let us use middleware
// The built-in express.static middleware takes the absolute path to the folder
app.use(express.static(__dirname + '/public'))

// Custom middleware
app.use((req, res, next) => {
  const now = new Date().toString();

  console.log(`========= New request ${now} ==========`)
  console.log(`method: ${req.method}, url: ${req.url}`)
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
  console.log('Server is up on port 3000');
});
