<?php
// Informations de connexion à la base de données
$servername = "localhost";
$database = "the_district_base";
$username = "root";
$password = "";

// Créez une connexion à la base de données MySQL
$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

// Définissez les options pour gérer les erreurs
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Requête d'insertion
$quantite = $_POST['quantiteCommande'];
$nom = $_POST['nomCommande'];
$prenom = $_POST['prenomCommande'];
$phone = $_POST['phoneCommande'];
$mail = $_POST['mailCommande'];
$adresse = $_POST['adresseCommande'];

$sql = "INSERT INTO commande_test (quantite, nom_client, prenom_client, telephone_client, email_client, adresse_client)
        VALUES ('$quantite', '$nom', '$prenom', '$phone', '$mail', '$adresse')";

// Exécutez la requête
$conn->exec($sql);

echo "Données insérées avec succès !";

?>



