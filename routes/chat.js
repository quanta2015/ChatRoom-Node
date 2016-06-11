var express = require('express');
var router = express.Router();
var mysqlDao = require('../db/mysqldb');



router.get('/:roomID', function (req, res) {
  var roomID = req.params.roomID;

  // 渲染页面数据(见views/room.hbs)
  res.render('chat', {
    roomID: roomID
  });
});

module.exports = router;
