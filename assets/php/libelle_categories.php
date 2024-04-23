<?php

if (isset($_GET['id'])) {
    // Récupérez l'ID depuis l'URL
    $categorieId = $_GET['id'];

    // Connectez-vous à votre base de données (vous devrez adapter ces informations à votre configuration)
    $serveur = "localhost";
    $utilisateur = "admin";
    $motDePasse = "Afpa1234";
    $baseDeDonnees = "the_district_base";

    $connexion = new PDO("mysql:host=$serveur;dbname=$baseDeDonnees", $utilisateur, $motDePasse);

    // Requête pour récupérer le libellé de la catégorie correspondante
    $requete = $connexion->prepare("SELECT libelle FROM categorie WHERE id = :categorieId");
    $requete->bindParam(':categorieId', $categorieId);
    $requete->execute();

    // Récupérez le résultat
    $resultat = $requete->fetch(PDO::FETCH_ASSOC);

    if ($resultat) {
        $libelleCategorie = $resultat['libelle'];
        echo "<div class='fs-1 fw-medium ms-sm-0 ms-lg-3 mt-lg-3 mb-3 lettres text-center'>$libelleCategorie</div>";
    } else {
        echo "<div class='fs-1 fw-medium ms-sm-0 ms-lg-3 mt-lg-3 mb-3 lettres text-center'>FIN DES CATEGORIES</div>";
    }
} else {
    echo "<div>Aucun ID de catégorie spécifié dans l'URL.</div>";
}
?>
