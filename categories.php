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

                <div class="fs-1 fw-medium ms-sm-0 ms-lg-3 mt-lg-3 text-center">

                    <p class="lettres">LES CATEGORIES DE PLAT</p>
            
                </div>

            </div>

            <!-- div remplissage categories -->
            <!-- <div class="row">

                <div id="categories" class="d-flex flex-wrap justify-content-around"></div>
            
            </div> -->


     
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

                // Exemple d'utilisation :
                $categories = get_categories();

                foreach ($categories as $category) {

                /*  echo $category['image'] . "<br>";
                    echo $category['libelle'] . "<br>"; */
                
                $libelleMajuscules = strtoupper($category['libelle']);

                echo " {$category['image']} {$libelleMajuscules} <br> ";
                }

            ?>


        </main>

<?php

    include "footer.php";

?>
