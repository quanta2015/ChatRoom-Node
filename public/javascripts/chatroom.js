$(init); 


function init() {

	$(".col-btn").click(addChatroom);
}

function addChatroom() {
	roomname = "croom";

	$.ajax({  
      type: "POST",    
      url: "/chatroom",
	 	contentType: "application/json", 
      dataType: "json",
	 	data: JSON.stringify({ 'roomname': roomname}), 
      success: function(result){  	
			console.log(result);
			if (result.code == 99) {
				alert(result.msg);
			}else{
				//alert(result);
				$(".row-room").prepend('<div class="col-md-2 col-room">' + result.data.roomname + result.data.roomid +'</div>')
			}
      }
  }); 

}