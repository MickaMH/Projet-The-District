<?php

    require('assets/php/PDO.php');

?>

<?php

// Récupération de l'ID depuis l'URL (par exemple, si l'URL est "monsite.com/plat.php?id=123")
if (isset($_GET['id'])) {
    $platId = $_GET['id'];

    // Requête pour récupérer les détails du plat associé à l'ID
    $query = "SELECT * FROM plat WHERE id = :platId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':platId', $platId, PDO::PARAM_INT);
    $stmt->execute();
    $plat = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($plat) {
        // Affichage des détails du plat
         '<div>';
         '<img src="assets/img/plats' . $plat['image'] . '" alt="' . $plat['libelle'] . '">';
         '<h3>' . $plat['libelle'] . '</h3>';
         '<p>' . $plat['description'] . '</p>';
         '<p>Prix : ' . $plat['prix'] . ' €</p>';
         '</div>';
    } else {
        echo 'Plat non trouvé.';
    }
} else {
    echo 'ID du plat non spécifié dans l\'URL.';
}

?>
