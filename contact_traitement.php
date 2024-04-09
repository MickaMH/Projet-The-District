<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nomContact = $_POST["nomContact"];
    $phoneContact = $_POST["phoneContact"];
    $demandeContact = $_POST["demandeContact"];

    $timestamp = date("D-m-y-H-i-s");
    $nom_fichier = "$timestamp.txt";

    $contenu = "Nom: $nomContact / Téléphone: $phoneContact / Demande: $demandeContact /";

    file_put_contents($nom_fichier, $contenu, FILE_APPEND);

    echo "Données extraites du formulaire Contact le $nom_fichier.";
}

?>
