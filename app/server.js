// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// API routes
var routesHtml = require("./routing/htmlRoutes.js");
var routesApi = require("./routing/apiRoutes.js");



// Express setup
var app = express();
var PORT = 8080;

// Data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());














// server listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});