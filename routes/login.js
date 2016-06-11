var express = require('express');
var router = express.Router();
var mysqlDao = require('../db/mysqldb');



router.get('/login',function(req, res){
  res.render('login');
})

router.post('/login',function(req, res){
  var usr = req.body.usr;
  var pwd = req.body.pwd;
  mysqlDao.getUser(req, res, usr, pwd);
})

module.exports = router;
