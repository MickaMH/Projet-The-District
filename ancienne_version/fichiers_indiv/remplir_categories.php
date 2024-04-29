<?php

    require('assets/php/PDO.php');

?>

<?php

function get_categories() {
    global $pdo; // Utilisez la connexion PDO définie précédemment

    try {
        $query = "SELECT * FROM categorie";
        $stmt = $pdo->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // Gérer l'erreur (par exemple, journaliser ou afficher un message d'erreur)
        echo "Erreur : " . $e->getMessage();
        return [];
    }
}

$categories = get_categories();

foreach ($categories as $category) {
    $libelle = $category['libelle'];
    $libelleMaj = strtoupper($libelle);

    echo '<div class="col-lg-4 mb-5 mb-lg-5 mt-3 mt-lg-5 d-flex justify-content-around">';

        echo '<div class="card w-auto border-4 bordures rounded-5">';

            echo '<img src="assets/img/categories/' . $category['image'] . '" class="card-img-top p-3 rounded-5" alt="">';
            echo '<a href="plats_par_categorie.php?id=' . $category['id'] . '" class="card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches">' . $libelleMaj . '</a>';
        
        echo '</div>';

    echo '</div>';
}

?>