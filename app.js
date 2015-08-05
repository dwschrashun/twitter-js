var express = require( 'express' );
var app = express(); // creates an instance of an express application

var swig = require('swig');
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + '/views/');
swig.setDefaults({cache:false});

var routes = require('./routes/')
app.use('/', routes);

var server = app.listen(3000);
console.log("server listening");