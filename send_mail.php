<?php
	$nombre = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$asunto = $_REQUEST['subject'];
	$mensaje = $_REQUEST['msg'];

	$headers = "From: ".$email."/r/n";

	mail("jmzuluagah@gmail.com", $asunto, $msg, $headers);
?>