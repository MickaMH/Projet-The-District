<?php

    include "assets/php/header.php";

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

                <div class="fs-1 fw-medium mb-3 mb-lg-3 mt-lg-3 text-center">

                    <p class="lettres">LES CATEGORIES DE PLAT</p>
            
                </div>

            </div>


            <!-- div remplissage categories -->
            <!-- <div class="row">

                <div id="categories" class="d-flex flex-wrap justify-content-around"></div>
            
            </div> -->

            <div class="row">

                <?php
            
                    include('assets/php/remplir_categories.php');
                    // include('assets\php\PDO.php');
                    // echo get_categories();

                ?>

            </div>


        </main>

<?php

    include "assets/php/footer.php";

?>