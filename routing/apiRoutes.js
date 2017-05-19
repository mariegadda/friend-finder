var myModule = require("../public/survey.html");

var friends = myModule.friends;

module.exports = function (app) {

app.get("/api", function(req, res){
  return res.json(friends);
});

};