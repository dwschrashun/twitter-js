var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs')





router.use('/public', function (req,res,next){
	console.log(process.cwd() + "/public" + req.path);
	res.sendFile(process.cwd() + "/public" + req.path);
	next();
})

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;