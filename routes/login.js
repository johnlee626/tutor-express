var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', {title: 'login page'});
});

router.post('/', function(req, res, next) {
  console.log(req.body.username);
  const db = require('../db.js');
  res.render('login', {title: 'login page'});
});


module.exports = router;
