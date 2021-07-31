<?php

    $to = "info@escenic-arts.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Tenes un mensaje de Escenic&Arts Web";

    $fields = array();
    $fields{"Fname"}    = "Nombre";
    $fields{"Lname"}    = "Apellido";
    $fields{"email"}    = "Email";
    $fields{"phone"}    = "Telefono";
    $fields{"sub"}    = "Asunto";
    $fields{"message"}   = "Mensaje";
    

    $body = "Este es el mensaje:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>