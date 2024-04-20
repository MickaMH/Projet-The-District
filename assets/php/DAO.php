<!-- Fonction pour récupérer les plats -->
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

    echo '<div class="col-3 p-lg-5 pb-lg-0 mb-3 mt-3">';
    echo '<div class="card w-100 border-4 bordures rounded-5">';
    echo '<img src="assets/img/categories/' . $category['image'] . '" class="card-img-top p-3 rounded-5" alt="">';
    echo '<a href="" class="card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches">' . $libelleMaj . '</a>';
    echo '</div>';
    echo '</div>';
}

?>


<!-- Fonction pour récupérer les plats -->
<?php

function get_plats() {
    global $pdo; // Utilisez la connexion PDO définie précédemment

    try {
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

$plats = get_plats();

foreach ($plats as $plat) {
    
    echo '<div class="col-3 p-lg-5 pb-lg-0 mb-3 mt-3">';
    echo '<div class="card w-100 border-4 bordures rounded-5">';
    echo '<img src="assets/img/plats/' . $plat['image'] . '" class="card-img-top p-3 rounded-5" alt="">';
    echo '<h5 class="card-text fs-3 fw-medium ms-3">' . $plat['libelle'] . '</h5>';
    echo '<div class="mb-3 ms-3 me-3 fw-medium fst-italic">' . $plat['description'] . '</div>';
    echo '<a href="" class="card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches">' . "Commander" . '</a>';
    echo '</div>';
    echo '</div>';
}

?>