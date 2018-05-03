// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// API routes
var routesApi = require("./routing/apiRoutes.js");
var routesHtml = require("./routing/htmlRoutes.js")

// HTML routes

// Express setup
var app = express();
var PORT = 5000;

// Data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());














// server listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});