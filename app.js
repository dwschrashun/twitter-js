var express = require( 'express' );
var swig = require('swig');

var app = express(); // creates an instance of an express application

var server = app.listen(3000);
console.log("server listening");

// var mySwig = new swig.Swig({varControls: ["{{","}}"], tagControls: ["{%", "%}"]});
var rendered = swig.renderFile(__dirname + '/views/index.html',
	{title: "An Example", 
	 people: [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]
	},  

	function(err,output){
	if (err)
		console.error(err);
	else
		console.log(output);
})


app.use(function (request, response, next) {
	console.log(request.method, request.path);
	// response.on("end", function () {
	// 	console.log(request.method, request.path, response.statusCode);
	// });
	next();
});

app.get("/", function (request, response, next) {
	console.log(response.statusCode);
	response.send("Hello World");
});

app.get("/news", function (request, response, next) {
	response.send("this is news");
});