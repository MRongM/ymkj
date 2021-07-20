var express = require("express");
var ejs = require("ejs");
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

data = {"title":"YMKJ"}

app.get("/",function(req, res){
	res.render("index", data);	
})

app.listen(process.env.PORT || 5000);
