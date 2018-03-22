
var db = require("../models")



// app.get("/", function(req, res) {
//   res.render("index");
// });
module.exports = function(app) {
	app.get("/scriptz", function(req, res) {
  // express callback response by calling burger.selectAllBurger
 db.scriptz.findAll({}).then(function(scriptzWeFound) {
          return res.json(scriptzWeFound)
    });
});
}
