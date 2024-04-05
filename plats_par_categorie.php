<?php

    include "header.php";

?>

    <!-- MAIN -->
    <main class="container-fluid pb-5">

        <!-- carousel mobile -->
        <div class="fw-medium d-flex justify-content-center position-relative z-1 d-block d-sm-none">

            <div id="carousel_mobile" class="carousel-fade" data-bs-ride="carousel">

                <div class="carousel-inner">

                    <div class="carousel-item active" data-bs-interval="4000">

                        <!-- <img src="..." class="d-block w-100" alt="..."> -->
                        <p class="d-block w-100 bienvenue_mobile ps-3 pe-3">BIENVENUE</p>

                    </div>

                    <div class="carousel-item" data-bs-interval="4000">

                        <!-- <img src="..." class="d-block w-100" alt="..."> -->
                        <p class="d-block w-100 bienvenue_mobile ps-3 pe-3">WELCOME</p>

                    </div>

                    <div class="carousel-item" data-bs-interval="4000">

                        <!-- <img src="..." class="d-block w-100" alt="..."> -->
                        <p class="d-block w-100 bienvenue_mobile ps-3 pe-3">BIENVENIDA</p>

                    </div>

                    <div class="carousel-item" data-bs-interval="4000">

                        <!-- <img src="..." class="d-block w-100" alt="..."> -->
                        <p class="d-block w-100 bienvenue_mobile ps-3 pe-3">WILLKOMMEN</p>

                    </div>

                </div>
                
            </div>
        
        </div>

        <!-- intitulé main -->
        <div class="row">

            <div id="libelle_categorie"></div>

        </div>

        <!-- div remplissage plats par catégorie -->
        <div class="row">

            <div id="plats_par_categorie" class="d-flex flex-wrap justify-content-around"></div>
            
        </div>

        <!-- boutons précédent retour suivant -->
        <div class="row mt-lg-5 mb-lg-5">

            <div class="col-4 col-lg-4 d-flex">

                <!-- <a class="d-flex justify-content-center align-items-center fw-medium mx-auto my-4 shadow-lg fs-5 bouton_precedent" 
                        id="precedent" style="width: 10rem; height: 3rem;" href="#" role="button">Précédent</a> -->

            </div>

            <div class="col-4 col-lg-4 d-flex">

                <a class="d-flex justify-content-center align-items-center fw-medium mx-auto shadow-lg fs-5 rounded-4 bouton_categories" 
                    style="width: 10rem; height: 3rem;" href="categories.php" role="button">Retour</a>
                        
            </div>

            <div class="col-4 col-lg-4 d-flex">

                <!-- <a class="d-flex justify-content-center align-items-center fw-medium mx-auto my-4 shadow-lg fs-5 bouton_suivant" 
                        id="suivant" style="width: 10rem; height: 3rem;" href="#" role="button">Suivant</a> -->
    
            </div>

        </div>

    </main>

<?php

    include "footer.php";

?>

  