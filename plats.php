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

                    <p class="lettres">TOUS LES PLATS</p>
            
                </div>

            </div>


            <!-- div remplissage plats -->
            <!-- <div class="row">

                <div id="plats" class="d-flex flex-wrap justify-content-around"></div>
            
            </div> -->
            <div class="row d-flex justify-content-around">

                <?php
            
                    include('assets/php/remplir_plats.php');

                ?>
                
            </div>

        </main>

<?php

    include "assets/php/footer.php";

?>

  