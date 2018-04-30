// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// API routes
var routesApi = require("/routing/apiRoutes.js");
var routesHtml = require("/routing/htmlRoutes.js")


// HTML routes



// Express setup
var app = express();
var PORT = 5000;

// Data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;

  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  friends.push(newFriend);

  res.json(newcharacter);
});











// server listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});