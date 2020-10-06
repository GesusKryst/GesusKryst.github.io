<?php
    $message = $_POST["a_message"];
    $host = "testymailclient@gmail.com";

    mail($host, "Message from GCMunoz.com!", $message);
?>