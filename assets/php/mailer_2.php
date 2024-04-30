<?php

require_once "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {

    // Configuration SMTP, destinataire, etc.
    // ...
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'MickaAfpa47@gmail.com'; // Remplacez par votre adresse Gmail
    $mail->Password = 'Enigma@Echange#09'; // Remplacez par votre mot de passe Gmail
    $mail->SMTPSecure = 'tls'; // Utilisez TLS
    $mail->Port = 465; // Utilisez le port 465 pour SSL/TLS
    
    $mail->setFrom('MickaAfpa47@gmail.com', 'The District');
    $mail->addAddress('MickaAfpa47@gmail.com', 'Mr.Moi');
    $mail->Subject = 'Confirmation de votre commande';
    $mail->Body = 'Nous vous confirmons votre commande.';
    $mail->CharSet = 'UTF-8'; // Définir le charset UTF-8
    


    // Envoi de l'e-mail
    $mail->send();
    echo "E-mail envoyé avec succès !";

} catch (Exception $e) {
    echo "Erreur lors de l'envoi de l'e-mail : " . $mail->ErrorInfo;
}

?>
