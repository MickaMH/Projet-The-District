<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    /* $libelleCommande = $_POST["libelleCommande"];
    $prixCommande = $_POST["prixCommande"]; */
    $nomCommande = $_POST["nomCommande"];
    $prenomCommande = $_POST["prenomCommande"];
    $mailCommande = $_POST["mailCommande"];
    $phoneCommande = $_POST["phoneCommande"];
    $adresseCommande = $_POST["adresseCommande"];

    $timestamp = date("D-m-y-H-i-s");
    $nom_fichier = "$timestamp.txt";

    $contenu = "Nom: $nomCommande / Prénom: $prenomCommande / E-mail: $mailCommande / Téléphone: $phoneCommande / Adresse: $adresseCommande /";

    file_put_contents($nom_fichier, $contenu, FILE_APPEND);

    echo "Données extraites du formulaire Commande le $nom_fichier.";
}

?>
