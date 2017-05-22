

var friendsData = require("../data/friends");
module.exports = function (app) {

app.post("/api", function(req, res){
 	console.log(req.body);
  	var newFriend = req.body;
    friendsData.push(newFriend);
    res.json(newFriend);
});

//get request for a json response
app.get("/api", function(req, res){
	res.json(friendsData);
});

};

