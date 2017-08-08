$(document).ready(function(){
	$("#send_mail").click(function(){
		if (document.getElementsByName('Nombre')[0].value == "" || document.getElementsByName('Email')[0].value == "" || document.getElementsByName('Asunto')[0].value == "" || document.getElementsByName('Mensaje')[0].value == ""){
			alert("¡Por favor rellena los campos faltantes!");
		}else{
			$.post("send_mail.php", {name:document.getElementsByName('Nombre')[0].value, mail:document.getElementsByName('Email')[0].value, subject:document.getElementsByName('Asunto')[0].value, msg:document.getElementsByName('Mensaje')[0].value}, function(data){

			});
		}
		
	});
});