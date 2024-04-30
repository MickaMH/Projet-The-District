<?php

require '/home/micka/Bureau/Projet-The-District/vendor/autoload.php';

// Make sure you've included the PHPMailer library
require '/home/micka/Bureau/Projet-The-District/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '/home/micka/Bureau/Projet-The-District/vendor/phpmailer/phpmailer/src/SMTP.php';
require '/home/micka/Bureau/Projet-The-District/vendor/phpmailer/phpmailer/src/Exception.php';

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Configure your SMTP settings (if using SMTP)
$mail->isSMTP();
$mail->Host = 'localhost';
$mail->SMTPAuth = true;
$mail->Username = 'MickaAfpa47@gmail.com';
$mail->Password = 'Enigma@Echange#09';
$mail->Port = 1025; // Adjust the port as needed

// Set other email parameters
$mail->setFrom('MickaAfpa47@gmail.com', 'The District');
$mail->addAddress('recipient@example.com', 'Mr Recipient Client');
$mail->Subject = 'Confirmation de votre commande';
$mail->Body = 'Cher Mr Recipient Client, nous confirmons la validation de votre commande.';

// Send the email
if ($mail->send()) {
    echo 'Email envoyé !';
} else {
    echo 'Error: ' . $mail->ErrorInfo;
}

?>
