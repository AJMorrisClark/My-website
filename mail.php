<?php
$name = $_POST['Contactname'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "amyclark1@outlook.com";
$subject = "Contact form - www.amymorrisclark.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Uh oh!");
?>

