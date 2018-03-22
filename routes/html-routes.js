var db = require("../models");
var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/", function(req, res) {
    res.redirect("/home")
  });

  app.get("/pill-box", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pill-box.html"));
  });

  app.get("/med-list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/med-list.html"));
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });
}