<?php

require '/home/micka/Bureau/Projet-The-District/libphp-phpmailer/autoload.php';

$mail = new PHPMailer;

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = getenv('MickaAfpa47@gmail.com'); // utiliser une variable d'environnement
$mail->Password = getenv('Enigma@Echange#09'); // utiliser une variable d'environnement
$mail->SMTPSecure = 'ssl'; // utiliser SSL/TLS
$mail->Port = 587;

$mail->setFrom('MickaAfpa47@gmail.com', 'The District');
$mail->addAddress('MickaAfpa47@gmail.com', 'Mr.Moi');
$mail->Subject = 'Confirmation de votre commande';
$mail->Body = 'Nous vous confirmons votre commande.';
$mail->CharSet = 'UTF-8'; // définir le charset UTF-8

try {
    if ($mail->send()) {
        echo 'E-mail sent successfully!';
    } else {
        echo 'Error: '. $mail->ErrorInfo;
    }
} catch (Exception $e) {
    echo 'Error: '. $e->getMessage();
}

$mail->SmtpClose();
unset($mail);

?>