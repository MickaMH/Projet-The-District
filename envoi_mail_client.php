<?php

$to = 'rayanravisy@gmail.com';

$subject = 'Confirmation de votre commande';

$message = "Voici l'E-mail"; // Contenu de l'e-mail (comme indiqué ci-dessus)

$headers = 'From: webmaster@votre-boutique.com' . "\r\n" .

    'Reply-To: webmaster@votre-boutique.com' . "\r\n" .

    'X-Mailer: PHP/' . phpversion();


mail($to, $subject, $message, $headers);

?>