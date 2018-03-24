var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var app = express();
var PORT = process.env.PORT || 8080;
var methodOverride = require("method-override");

var db = require("./models");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

var hbs = exphbs.create({
  ifEqual: function (val1,val2,options) { 
    if (arguments.length < 3)
    throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
    return options.inverse(this);
    } else {
    return options.fn(this);
  } 
}
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});