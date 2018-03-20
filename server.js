var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var db = require("./models")


// var bars = require("express-handlebars")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));
app.use(express.static("public"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get("/", function(req, res){
// 	res.render("index")
// })

var routes = require("./routes/api-routes.js")
app.use(routes)
// var connection = require("./config/connection.js")


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

});