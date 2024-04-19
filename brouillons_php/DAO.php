<?php

function get_categories() {

    try {

        $pdo = new PDO("mysql:host=localhost;dbname=ma_base_de_donnees", "utilisateur", "mot_de_passe");

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "SELECT * FROM categories";

        $stmt = $pdo->prepare($query);

        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    } catch (PDOException $e) {

        // Gérer l'erreur (par exemple, journaliser ou afficher un message d'erreur)
        echo "Erreur : " . $e->getMessage();
        return [];
    }
}

// Exemple d'utilisation :
$categories = get_categories();

foreach ($categories as $category) {

    echo $category['nom'] . "<br>";
}

?>



<?php
// Informations de connexion à la base de données
$host = 'localhost';
$dbname = 'the_district_base';
$user = 'admin';
$password = 'Afpa1234';

try {
    // Créez une instance PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);

    // Configurez les options PDO (par exemple, afficher les erreurs)
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Utilisez $pdo pour exécuter des requêtes SQL
    // Par exemple : $pdo->query("SELECT * FROM ma_table");

    $pdo->query("SELECT libelle FROM categorie");

} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}