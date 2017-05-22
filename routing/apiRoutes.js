


var friendsData = require("../data/friends");
module.exports = function (app) {

app.post("/api", function(req, res){
 	console.log(req.body);
  
});

//get request for a json response
app.get("/api", function(req, res){
	res.json(friendsData);
});

};

//push the new friend to the friends array

