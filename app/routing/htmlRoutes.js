
app.get("", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});




module.exports = function(app) {
	
	//Routes Go Here
	
	
}