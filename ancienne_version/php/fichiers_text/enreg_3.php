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
$id = $_POST['idCommande'];
$prix = $_POST['prixCommande'];
$quantite = $_POST['quantiteCommande'];
$nom = $_POST['nomCommande'];
$prenom = $_POST['prenomCommande'];
$phone = $_POST['phoneCommande'];
$mail = $_POST['mailCommande'];
$adresse = $_POST['adresseCommande'];

$nom_client = $nom . ' ' . $prenom ;

$total = ($prix*$quantite);

$sql = "INSERT INTO commande_test_6 (id_plat, quantite, total, nom_client, telephone_client, email_client, adresse_client)
        VALUES ('$id', '$quantite', '$total', '$nom_client', '$phone', '$mail', '$adresse')";

// Exécutez la requête
$conn->exec($sql);

echo "Données insérées avec succès !";

?>



