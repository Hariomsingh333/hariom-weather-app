"use strict";
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
app.set("view engin", "ejs");

// app.use(express.static(path.join("public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/about", (req, res) => {
  res.send("hello about");
});
app.post("/weather", (req, res) => {
  const cityName = req.body.name;
  const weather = async () => {
    const Post = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=30c06c817dfaf455478e39636b9e5619&units=metric`
    );
    const data = await Post.json();
    // console.log(data.main.temp);
    res.render("weatherData.ejs", { data });
  };
  // res.redirect("/");
  weather();
});
app.listen(3000, () => {
  console.log("SERVER IS ON");
});
