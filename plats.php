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

                <div class="fs-1 fw-medium ms-sm-0 ms-lg-3 mt-lg-5 text-center">

                    <p class="lettres">TOUS LES PLATS</p>
            
                </div>

            </div>


            <!-- div remplissage plats -->
            <!-- <div class="row">

                <div id="plats" class="d-flex flex-wrap justify-content-around"></div>
            
            </div> -->


            <div class="d-flex flex-wrap justify-content-around">

                <?php
            
                    include('assets/php/remplir_plats.php');

                ?>

            </div>

        </main>

<?php

    include "footer.php";

?>

  