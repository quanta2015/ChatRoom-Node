$(init); 


function init() {

	$("#loginBtn").click(login);
}

function login() {
	usr = $("#username").val();
	pwd = $("#password").val();
	$.ajax({  
      type: "POST",    
      url: "/login",
	 	contentType: "application/json", 
      dataType: "json",
	 	data: JSON.stringify({ 'usr': usr, 'pwd': pwd}), 
      success: function(result){  	
			console.log(result);
			if (result.code == 99) {
				alert(result.msg);
			}else{
				$.cookie('username',result.data.username,{expires:30});
				location.href = "/chatroom";
			}
      }
  }); 

}