<?php

    include "assets/php/header.php";

?>

    <!-- MAIN -->
        <main class="container-fluid pb-5">

            <?php

                include "assets/php/carousel_mobile.php";

            ?>

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