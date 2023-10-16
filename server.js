//load express
const express = require("express");
const path = require("path");

// require to do database

const pizzaDb = require("./data/pizzaDb");
//create express app

const app = express();
//configure the app(app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//mount middleware(app.use)

//mount routes

//define a root route directly on app
//next lesson will use better practice

app.get("/", function (req, res) {
  res.redirect("/todos");
});

app.get("/home", function (req, res) {
  res.render("home.ejs");
});
app.get("/todos", function (req, res) {
  const pizzaTypes = pizzaDb.getAll();
  res.render("pizzas/index", { pizzaTypes });
});
app.listen(3000, function () {
  console.log("Listening on Port 3000");
});
