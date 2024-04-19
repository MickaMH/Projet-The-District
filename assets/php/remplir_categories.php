<?php

function get_categories() {
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=the_district_base", "admin", "Afpa1234");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

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
            echo '<img src="assets/img/categories/'. $category['image'] .'"class="card-img-top p-3 rounded-5" alt="">';
            echo '<a href = "" class="card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches">'.$libelleMaj.'</a>';
            echo '</div>';
            echo '</div>';  
        }
        
?>