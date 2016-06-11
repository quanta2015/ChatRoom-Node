var mysql = require('mysql');
var config = require('../config');
var entries = require('../db/jsonRes');

var connection = mysql.createConnection({
	host: config.dbMysql.host,
	user: config.dbMysql.user,
	password: config.dbMysql.password,
	database: config.dbMysql.database,
	port: config.dbMysql.port
});

connection.query('USE ' + config.dbMysql.database);

exports.getConn = function() {
	return connection;
}

exports.getChatroom = function(req, res) {
	connection.query("SELECT * FROM chatroomtable", function(err, rows) {
     if (err) throw  err;
	  res.render('chatroom', {entries:rows});
   });
}

exports.saveChatroom = function(req, res, roomname) {

	sql = 'insert into chatroomtable(roomname) value(?)';
	connection.query(sql,[roomname], function(err, rows) {
     if (err) throw  err;
	   entries.code = "0";
		entries.msg = "Success";
		entries.data.roomname = roomname;
		entries.data.roomid = rows.insertId;
		res.write(JSON.stringify(entries));   
		res.end();
   });
}

exports.getUser = function(req, res, usr, pwd) {
	connection.query("SELECT * FROM usertable WHERE username = ?", [usr], function(err, rows) {
		if (err)
			throw err;
		if (!rows.length) {
			entries.code = "99";
			entries.msg = "No user found.";
		}else if (pwd != rows[0].password) {
			entries.code = "99";
			entries.msg = "Wrong password.";
		}else{
			entries.code = "0";
			entries.msg = "Success";
			entries.data = rows[0];
			req.session.user = rows[0]; 
		}
		
		res.write(JSON.stringify(entries));   
		res.end();
	});
}