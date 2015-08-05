var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');
var path = require('path');




router.use('/:param/:param2', function (req,res,next){
	res.sendFile(path.join(__dirname, "../public/", req.params.param, "/", req.params.param2));
})

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;