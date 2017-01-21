
			function username(){
					$("#container").html("<span style='font-size:23px;color:#f00;'>ChatBox:</span>Welcome to ChatBox");
				}
			
			$(function(){
			
				username();
				$("#textbox").keypress(function(event){
					
					if(event.which == 13){
						if($("#check").prop("checked")){
							$("#send").click();
							event.preventDefault();
						}
					}
				});
			$("#send").click(function(){
					
					var userName="<span class='uname'>You:</span>";
					var msg=$("#textbox").val();
					
					$("#textbox").val("");
					var prevState=$("#container").html();
					if(prevState.length > 3){
						prevState=prevState+ "<br>";
					}
					$("#container").html(prevState + userName + msg);
					$("#container").scrollTop($("#container").prop("scrollHeight"));
					
				
				});
			});