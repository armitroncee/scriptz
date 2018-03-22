var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var mysql = require("mysql");
var db = require("./models")


// var bars = require("express-handlebars")

var app = express();
var PORT = process.env.PORT || 8080;

=======
var path = require("path")
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.static(path.join(__dirname, "public")));

>>>>>>> 15b71565c101125658cf36ded665f67901794be1
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
<<<<<<< HEAD
app.use(express.static("app/public"));
app.use(express.static("public"));
=======

>>>>>>> 15b71565c101125658cf36ded665f67901794be1
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
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

=======
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
>>>>>>> 15b71565c101125658cf36ded665f67901794be1
});