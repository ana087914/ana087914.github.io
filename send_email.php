<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

   
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
       
        $to = "ana.t08@yahoo.com"; 
        $subject = "Contact Form Message from $name";

        
        $email_body = "You have received a new message.\n\n";
        $email_body .= "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Message:\n$message\n";

       
        $headers = "From: $email\r\n";
        if (mail($to, $subject, $email_body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message. Please try again.";
        }
    } else {
        echo "Invalid input. Please fill all the fields correctly.";
    }
} else {
    echo "Form not submitted properly.";
}
?>
