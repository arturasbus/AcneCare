<?php

    if (isset($_POST['submit'])){
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $message = ($_POST['message']);

    
            $toEmail = 'arturasbus@gmail.com';
            $subject = 'Laiškas nuo '.$name;
            // Email Headers
            $headers = "From: " .$name;

            echo $name.' '.$email.' '.$subject.' '.$message.' '.$toEmail.' '.$headers;
            if(mail($toEmail, $subject, $message, $headers));{
                echo 'Good!';
            }else{
                echo 'Not good!';
            }
    }

?>