// Dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// API routes
// Express setup
var app = express();
var PORT = 8080;
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// server listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});