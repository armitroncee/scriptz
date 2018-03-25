var db = require("../models");
var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/", function(req, res) {
    res.redirect("/home")
  });

  app.get("/pill-box", function(req,res){
    db.scriptz.findAll({
      where: {
        TimeFrame: "Morning"
      }
    }).then(function(data){
      console.log(data)
      db.scriptz.findAll({
        where: {
          TimeFrame: "Dinner"
        }
      }).then(function(dinner){
        console.log(dinner)
        db.scriptz.findAll({
          where: {
            TimeFrame: "Lunch"
          }
        }).then(function(lunch){
          console.log(lunch)
          db.scriptz.findAll({
            where: {
              TimeFrame: "Bed"
            }
          }).then(function(bed){
            console.log(bed)
            res.render("pill-box", {scriptz: data, scriptzDinner: dinner, scriptzLunch: lunch, scriptzBed: bed});
          })
        })
      })
    })
  })

  app.get("/med-list", function(req, res) {
    db.scriptz.findAll({}).then(function(data){
        res.render("med-list", {scriptz: data})
      });
    })

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "../public/about.html"))
  })
}