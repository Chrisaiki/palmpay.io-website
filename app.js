var compression = require("compression");
var createError = require("http-errors");
var express = require("express");
var path = require("path");

var app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/marketing",express.static(path.join(__dirname, 'public')));
app.use("/", express.static(path.join(__dirname, "./client/build")));
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

module.exports = app;
