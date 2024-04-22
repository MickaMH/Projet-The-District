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

            <div class="fs-1 fw-medium ms-lg-3 mt-lg-3 text-center">

                <p class="lettres">PASSER UNE COMMANDE</p>
            
            </div>

        </div>

        <div class="row">

            <!--Card Verticale -->
            <div class="mt-3 mb-4 d-block d-sm-none">

                <div class="card border-3 bordures rounded-5" style="height: auto;">

                    <div id="image_commande_verticale"></div>

                    <div class="card-body p-3">

                        <div id="libelle_description_commande_verticale" ></div>

                        <div class="d-flex">

                            <label class="fs-5 fw-medium me-2">Prix :</label><div id="prix_commande_verticale" ></div><p class="fs-5 fw-medium ms-2">euros</p>
                        
                        </div>

                        <div>

                            <label class="fs-5 fw-medium">Quantité :</label>
                            <input type="text" name="quantite" class="fs-5 fw-medium ms-2 text-center rounded-3 border-3 bordures" value="1" style="width: 4rem; height: 2.5rem;" readonly>
                        
                        </div>

                    </div>

                </div>

            </div>

            <!--Card Horizontale -->
            <div class="mt-3 mt-lg-5 mb-4 mb-lg-5 d-none d-lg-block">

                <div class="card border-3 bordures rounded-5 flex-row mx-auto" style="width: 50rem; height: auto;">

                    <div id="image_commande_horizontale"></div>

                    <div class="card-body p-3">

                            <div id="libelle_description_commande_horizontale" name="libelleCommande" required></div>

                            <div class="d-flex">

                                <label class="fs-5 fw-medium me-2">Prix :</label><div id="prix_commande_horizontale" name="prixCommande" required></div><p class="fs-5 fw-medium ms-2">euros</p>
                            
                            </div>

                        <div>

                            <label class="fs-5 fw-medium">Quantité :</label>
                            <input type="text" name="quantite" class="fs-5 fw-medium ms-2 text-center rounded-3 border-3 bordures" value="1" style="width: 4rem; height: 3rem;" readonly>
                        
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="row d-flex justify-content-center">

            <!-- formulaire de commande -->
            <form action="traitement_commande.php" method="POST" name="formulaire" id="document" class="row m-sm-1 m-lg-5 d-flex justify-content-center">
            
                <div class="col-sm-10 col-lg-5 mb-5 mt-3 mt-lg-0">

                    <input type="text" class="form-control fs-4 border-3 bordures fond_input" id="nom" name="nomCommande" placeholder="Nom*(sans accents)" required>
                    <span id="requisNom"></span>

                </div>

                <div class="col-sm-10 col-lg-5 mb-5">
                
                    <input type="text" class="form-control fs-4 border-3 bordures fond_input" id="prenom" name="prenomCommande" placeholder="Prénom*(sans accents)" required>
                    <span id="requisPrenom"></span>

                </div>

                <div class="col-sm-10 col-lg-5 mb-5 mb-lg-4">

                    <input type="email" class="form-control fs-4 border-3 bordures fond_input" id="mail" name="mailCommande" placeholder="Email*" required>
                    <span id="requisMail"></span>

                </div>

                <div class="col-sm-10 col-lg-5 mb-4">

                    <input type="text" class="form-control fs-4 border-3 bordures fond_input" id="phone" name="phoneCommande" placeholder="Téléphone*" required>
                    <span id="requisPhone"></span>

                </div>

                <div class="col-sm-10 col-lg-10 mb-3">

                    <label class="form-label"></label>
                    <textarea class="form-control fs-4 border-3 bordures fond_input" rows="3" id="adresse" name="adresseCommande" placeholder="Votre adresse*" required></textarea>
                    <span id="requisAdresse"></span>

                </div>

                <div class="col-sm-12 col-lg-10 fs-5 ms-3">

                    <p class="lettres_noires"><sup>*</sup> Tous les champs sont obligatoires</p>

                </div>

                <!-- bouton commander -->
                <div class="col-sm-12 col-lg-12 d-flex justify-content-center">
                
                    <input class="d-flex justify-content-center fw-medium mx-auto shadow-lg fs-5 my-4 rounded-4 bouton_envoyer" id="envoi_commande" 
                            style="width: 10rem; height: 3rem;" type="submit" value="Commander">

                </div>

            </form>

        </div>

    </main>

<?php

    include "assets/php/footer.php";

?>
