$(init);

function init() {
	var socket = io();

	username = $.cookie('username');
	socket.emit('join', username);
}
