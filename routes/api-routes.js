var express = require("express");
var db = require("../models")

var router = express.Router();
// var orm = require("../config/orm.js");


router.get("/", function(req, res) {
  res.render("index");
});

router.get("/scriptz", function(req, res) {
  // express callback response by calling burger.selectAllBurger
 db.scriptz.findAll().then(function(scriptzWeFound) {
          console.log('these are our perscriptions', scriptzWeFound);
    });
});


module.exports = router;