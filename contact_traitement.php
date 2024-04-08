<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nomContact = $_POST["nomContact"];
    $phoneContact = $_POST["phoneContact"];
    $demandeContact = $_POST["demandeContact"];

    // Autres champs...

    // Générer le nom du fichier avec la date et l'heure actuelles
    $timestamp = date("Y-m-d-H-i-s");

    $nom_fichier = "$timestamp.txt";

    // Écrire les données dans le fichier
    $contenu = "Nom : $nomContact/nTéléphone : $phoneContact/nDemande : $demandeContact/n"; // Ajoutez d'autres champs si nécessaire

    file_put_contents($nom_fichier, $contenu, FILE_APPEND);


    echo "Données enregistrées dans le fichier $nom_fichier.";
}

?>
