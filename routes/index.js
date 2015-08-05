var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');
var path = require('path');
var bodyParser = require("body-parser");

router.use(bodyParser.json());


router.get('/users/:name', function(req, res) {
	var searchObj = {modName: req.params.name};
	var user = tweetBank.find(searchObj);
	console.log("here");
	res.render('index', { title: 'Twitter.js', tweets: user});
});

router.use('/:param/:param2', function (req,res,next){
	console.log("here1");
	res.sendFile(path.join(__dirname, "../public/", req.params.param, "/", req.params.param2), function(err){
		next(err);
	});
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log("here3");
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true} );
});

router.post("/submit", function (req, res) {
	//console.log(req);
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
});




module.exports = router;