var db = require("../models");
var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/", function(req, res) {
    res.redirect("/home")
  });

  // app.get("/pill-box", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pill-box.html"));
  // });

  app.get("/pill-box", function(req,res){
    db.scriptz.findAll({      
      where: {
      TimeFrame: "morning"
    }
  }).then(function(data){
      var hbsObject = { scriptz: data }

      res.render("pill-box", hbsObject);
    })
  })

  app.get("/med-list", function(req, res) {
    db.scriptz.findAll({}).then(function(data){
      var hbsObject = { scriptz: data };
      res.render("med-list", hbsObject);
      })
    // res.sendFile(path.join(__dirname, "../public/med-list.html"));
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "../public/about.html"))
  })
}