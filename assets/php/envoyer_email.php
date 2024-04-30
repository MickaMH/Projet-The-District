<?php
require_once "assets/php/vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'chemin/vers/PHPMailer/src/Exception.php';
require 'chemin/vers/PHPMailer/src/PHPMailer.php';
require 'chemin/vers/PHPMailer/src/SMTP.php';


$mail = new PHPMailer(true);

try {
    // Récupération des données du formulaire
    $recipient = $_POST['recipient'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    // Configuration SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'MickaAfpa47@gmail.com'; // Remplace par ton adresse Gmail
    $mail->Password = 'Enigma@Echange#09'; // Remplace par ton mot de passe Gmail
    $mail->SMTPSecure = 'tls'; // Utilise TLS
    $mail->Port = 587; // Utilise le port 587 pour TLS

    $mail->setFrom('Enigma@Echange#09', 'Ton Nom');
    $mail->addAddress($recipient, 'Destinataire');
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->CharSet = 'UTF-8'; // Définir le charset UTF-8

    // Envoi de l'e-mail
    $mail->send();
    echo "E-mail envoyé avec succès !";

} catch (Exception $e) {
    echo "Erreur lors de l'envoi de l'e-mail : " . $mail->ErrorInfo;
}
?>

