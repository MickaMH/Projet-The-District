<?php

    include "assets/php/header.php";

?>

    <!-- MAIN -->
    <main class="container-fluid pb-5">

        <!-- intitulé main -->
        <div class="row">

            <!-- <div id="libelle_categorie"></div> -->
          

        </div>

        <!-- div remplissage plats par catégorie -->
        <div class="row">

            <!-- <div id="plats_par_categorie" class="d-flex flex-wrap justify-content-around"></div> -->

            <?php
            
                include('assets/php/remplir_plats_categories.php');
                // include('assets\php\PDO.php');
                // echo get_plats();

            ?>

        </div>

        <!-- boutons précédent retour suivant -->
        <div class="row mt-lg-5 mb-lg-5">

            <div class="col-4 col-lg-4 d-flex">

                <a class="d-flex justify-content-center align-items-center fw-medium mx-auto shadow-lg fs-5 bouton_precedent" 
                    id="precedent" style="width: 10rem; height: 3rem;"  href="plats_par_categorie.php?id=<?php echo $categorie_id - 1; ?>" role="button">Précédent</a>

            </div>

            <div class="col-4 col-lg-4 d-flex">

                <a class="d-flex justify-content-center align-items-center fw-medium mx-auto shadow-lg fs-5 rounded-4 bouton_categories" 
                    style="width: 10rem; height: 3rem;" href="categories.php" role="button">Retour</a>
                        
            </div>

            <div class="col-4 col-lg-4 d-flex">

                <a class="d-flex justify-content-center align-items-center fw-medium mx-auto shadow-lg fs-5 bouton_suivant" 
                    id="suivant" style="width: 10rem; height: 3rem;"  href="plats_par_categorie.php?id=<?php echo $categorie_id + 1; ?>" role="button">Suivant</a>
    
            </div>

        </div>

    </main>

<?php

    include "assets/php/footer.php";

?>

  