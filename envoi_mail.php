<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'envoi d'e-mail</title>
</head>
<body>
    <form action="assets/php/envoyer_email.php" method="post">
        <label for="recipient">Destinataire :</label>
        <input type="email" id="recipient" name="recipient" required><br>

        <label for="subject">Objet :</label>
        <input type="text" id="subject" name="subject" required><br>

        <label for="body">Corps du message :</label>
        <textarea id="body" name="body" rows="4" required></textarea><br>

        <input type="submit" value="Envoi Mail">
    </form>
</body>
</html>
