
<?php


function get_plats() {


    try {


    $pdo = new PDO("mysql:host=localhost;dbname=the_district_base", "admin", "Afpa1234");

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $query = "SELECT * FROM plat";


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

$plats = get_plats();


foreach ($plats as $plat) {


$libelleMajuscules = ucfirst($plat['libelle']);


echo " {$plat['image']} <br> {$libelleMajuscules} <br> ";

}


?>

<?php

$servername = "localhost";
$username = "admin";
$password = "Afpa1234";
$dbname = "the_district_base";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Chemin vers l'image
    $imagePath = "assets/img/plats";

    // Lisez le contenu de l'image
    $imageContent = file_get_contents($imagePath);

    // Échappez les caractères spéciaux pour l'insertion
    $escapedImageContent = $conn->quote($imageContent);

    // Insérez l'image dans la table
    $sql = "INSERT INTO plat (libelle, image) VALUES ('Nom du plat', $escapedImageContent)";
    $conn->exec($sql);
    echo "Image insérée avec succès !";

} catch (PDOException $e) {

    echo "Erreur : " . $e->getMessage();
}

$conn = null;

?>