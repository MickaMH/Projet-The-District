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


<?php

// Set the path to the PHPMailer library
$path = '/home/micka/Bureau/Projet-The-District/PHPMailer/src';

// Require the PHPMailer library
require $path . '/PHPMailer.php';
require $path . '/Exception.php';
require $path . '/SMTP.php';

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Set the SMTP settings
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = ('MickaAfpa47@gmail.com'); // utiliser une variable d'environnement
$mail->Password = ('Enigma@Echange#09'); // utiliser une variable d'environnement
$mail->SMTPSecure = 'ssl'; // utiliser SSL/TLS
$mail->Port = 465; // Port for SSL

// Set the email sender and recipient
$mail->setFrom('MickaAfpa47@gmail.com', 'The District');
$mail->addAddress('MickaAfpa47@gmail.com', 'Mr.Moi');

// Set the email subject and body
$mail->Subject = 'Confirmation de votre commande';
$mail->Body = 'Nous vous confirmons votre commande.';
$mail->CharSet = 'UTF-8'; // définir le charset UTF-8

// Send the email
try {
    if ($mail->send()) {
        echo 'E-mail sent successfully!';
    } else {
        echo 'Error: '. $mail->ErrorInfo;
    }
} catch (Exception $e) {
    echo 'Error: '. $e->getMessage();
}

// Close the SMTP connection
$mail->SmtpClose();

// Unset the PHPMailer instance
unset($mail);

?>