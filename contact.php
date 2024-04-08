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

            <div class="fs-1 fw-medium ms-lg-3 mt-lg-3 text-center">

                <p class="lettres">FORMULAIRE DE CONTACT</p>
            
            </div>

        </div>

        <!-- formulaire de contact -->
        <form action="/contact_traitement.php" method="POST" name="formulaire_contact" id="document_contact" enctype="multipart/form-data" class="row m-sm-1 m-lg-5 d-flex justify-content-center">
            
            <div class="col-sm-10 col-lg-5 mt-3 mt-lg-0 mb-5">
            
                <input type="text" class="form-control fs-4 border-3 bordures fond_input" id="nomContact" placeholder="Nom*" aria-label="First name" required>
                <span id="requisNomContact"></span>
            </div>

            <div class="col-sm-10 col-lg-5 mb-5 ">
                
                <input type="text" class="form-control fs-4 border-3 bordures fond_input" id="prenom" placeholder="Prénom" aria-label="Last name">
                <!-- <span id="requisPrenom"></span> -->
            </div>

            <div class="col-sm-10 col-lg-5 mb-5 mb-lg-4">

                <input type="email" class="form-control fs-4 border-3 bordures fond_input" id="mail" placeholder="Email" aria-label="Email">
                <!-- <span id="requisMail"></span> -->
            </div>

            <div class="col-sm-10 col-lg-5 mb-4">

                <input type="text" class="form-control fs-4 border-3 bordures fond_input" id="phoneContact" placeholder="Téléphone*" aria-label="Phone" required>
                <span id="requisPhoneContact"></span>
            </div>

           <!--  <div class="col-sm-10 col-lg-10 mb-3 d-none">

                <label class="form-label"></label>
                <textarea class="form-control fs-4 border-3 bordures fond_input" rows="3" id="adresse" placeholder="Votre adresse*" required></textarea>
                <span id="requisAdresse"></span>

            </div> -->

            <div class="col-sm-10 col-lg-10 mb-3">

                <label class="form-label"></label>
                <textarea type="text" class="form-control fs-4 border-3 bordures fond_input" id="demandeContact" rows="3" placeholder="Votre demande*" aria-label="Demand" required></textarea>
                <span id="requisDemandeContact"></span>
            </div>

            <div class="col-sm-12 col-lg-10 fs-5 ms-3">

                <p class="lettres_noires"><sup>*</sup> Ces champs sont obligatoires</p>

            </div>

            <!-- bouton envoyer -->
            <div class="col-sm-12 col-lg-12 d-flex justify-content-center">

                <input class="d-flex justify-content-center fw-medium mx-auto shadow-lg fs-5 my-4 rounded-4 bouton_envoyer" id="envoi_contact" 
                        style="width: 10rem; height: 3rem;" type="submit" value="Envoyer">

            </div>

        </form>

    </main>

<?php

    include "footer.php";

?>
   