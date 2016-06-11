var express = require('express');
var router = express.Router();
var mysqlDao = require('../db/mysqldb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysqlDao.getChatroom(req, res);
});

router.post('/',function(req, res){
  var roomname = req.body.roomname;
  mysqlDao.saveChatroom(req,res,roomname);
})

module.exports = router;
