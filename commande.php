<?php

    include "assets/php/fichiers_php/header.php";

?>

    <!-- MAIN -->
    <main class="container-fluid pb-5">

        <?php

            include "assets/php/fichiers_php/carousel_mobile.php";

        ?>

        <!-- intitulé main -->
        <div class="row">

            <div class="fs-1 fw-medium ms-lg-3 mt-lg-3 text-center">

                <p class="lettres">PASSER UNE COMMANDE</p>
            
            </div>

        </div>

        <div class="row">

            <?php
            
                include 'assets/php/dao.php';
            
                $plat = get_commande();

            ?>

            <!--Card Horizontale -->
            <div class="mt-3 mt-lg-5 mb-4 mb-lg-5 d-none d-lg-block">

                <div class="card border-3 bordures rounded-5 flex-row mx-auto" style="width: 52rem; height: auto;">

                    <div>

                        <img src="assets/img/plats/<?php echo $plat['image']; ?>" alt="Image du plat" class= "p-3 rounded-5">

                    </div>

                    <div class="card-body ">

                            <div class= "card-title fs-1 mb-lg-2 fw-medium"><?php echo $plat['libelle'];?></div>

                            <div class= "card-text fst-italic fw-medium fs-5 mb-lg-3 me-lg-2"><?php echo $plat['description'];?></div>

                            <div class="d-flex">

                                <label class= "card-text fw-medium fs-5">Prix :</label><div class= "card-text fw-medium fs-5 ms-lg-2"><?php echo $plat['prix'];?></div><p class="fs-5 fw-medium ms-2">&#8364;</p>
                            
                            </div>

                        <div>

                            <label class="fs-5 fw-medium">Quantité :</label>
                            <input type="text" name="quantite" class="fs-5 fw-medium ms-2 text-center rounded-3 border-3 bordures" value="1" style="width: 4rem; height: 3rem;" readonly>
                        
                        </div>

                    </div>

                </div>

            </div>

            <!--Card Verticale -->
            <div class="mt-3 mb-4 d-block d-sm-none">

                <div class="card border-3 bordures rounded-5" style="height: auto;">

                    <div>

                        <img src="assets/img/plats/<?php echo $plat['image']; ?>" alt="Image du plat" class= "card-img-top p-3 rounded-5">

                    </div>

                    <div class="card-body p-3 pt-0">

                        <div class= "card-title fs-1 mb-2 fw-medium"><?php echo $plat['libelle'];?></div>

                        <div class= "card-text fst-italic fw-medium fs-5 mb-3 me-2"><?php echo $plat['description'];?></div>

                        <div class="d-flex">

                        <label class= "card-text fw-medium fs-5">Prix :</label><div class= "card-text fw-medium fs-5 ms-2"><?php echo $plat['prix'];?></div><p class="fs-5 fw-medium ms-2">&#8364;</p>
                        
                        </div>

                        <div>

                            <label class="fs-5 fw-medium">Quantité :</label>
                            <input type="text" name="quantite" class="fs-5 fw-medium ms-2 text-center rounded-3 border-3 bordures" value="1" style="width: 4rem; height: 2.5rem;" readonly>
                        
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

    include "assets/php/fichiers_php/footer.php";

?>
