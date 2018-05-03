app.get("/api/friends", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    friends.push(newFriend);
  
    res.json(newcharacter);
  });
  




module.exports = function(app) {
	
	//Routes Go Here
	
	
}