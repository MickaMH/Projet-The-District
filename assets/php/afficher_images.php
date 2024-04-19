
<!-- AFFICHER IMAGES -->
<?php

function get_images() {

    try {

    $pdo = new PDO("mysql:host=localhost;dbname=the_district_base", "admin", "Afpa1234");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "SELECT * FROM images";

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
$images_base = get_images();

foreach ($images_base as $image_item) {

/*  echo $category['image'] . "<br>";
    echo $category['libelle'] . "<br>"; */

/* $libelle = ($plat['libelle']); */

echo " {$image_item['chemin_image']} <br> {$image_item['categorie_id']} <br>";
}

?>

