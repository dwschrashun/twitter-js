var express = require( 'express' );
var app = express(); // creates an instance of an express application

var server = app.listen(3000);
console.log("server listening");

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