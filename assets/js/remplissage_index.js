$(document).ready(function() {
  
    $.getJSON("assets/js/the_district.json", function(data) {
      
        let categorie_1 = $("#promo_categorie");
    
        let indexCategorieChoisie = 7;
    
        let element = document.createElement("div");
        element.className = "mb-3 mt-3";

        let panneau_carte = document.createElement("div");
        panneau_carte.className = "fs-5 ms-5 d-flex align-items-center justify-content-center fw-medium panneaux";
        panneau_carte.textContent = "Veggie Food";
        panneau_carte.style = "width: 9rem; height: 4rem;";

        let carte_categorie = document.createElement("div");
        carte_categorie.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_categorie = document.createElement("img");
        image_categorie.src = data.categorie[indexCategorieChoisie].image;
        image_categorie.className = "card-img-top p-3 rounded-5";
    
        let libelle_categorie = document.createElement("a");
        libelle_categorie.textContent = data.categorie[indexCategorieChoisie].libelle;
        libelle_categorie.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
        libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[indexCategorieChoisie].id_categorie;
    
        categorie_1.append(element);
        element.append(panneau_carte, carte_categorie);
        carte_categorie.append(image_categorie, libelle_categorie);
    });


    $.getJSON("assets/js/the_district.json", function(data1) {

        let plat_1 = $("#promo_plat_1");
  
        let indexPlat1 = 0;

        let element_plats1 = document.createElement("div");
        element_plats1.className = "mb-3 mt-3";

        let panneau_carte_plat1 = document.createElement("div");
        panneau_carte_plat1.className = "fs-5 ms-5 d-flex align-items-center justify-content-center fw-medium panneaux";
        panneau_carte_plat1.textContent = "Spécialité The District";
        panneau_carte_plat1.style = "width: 14.5rem; height: 4rem;";
    
        let carte_plat1 = document.createElement("div");
        carte_plat1.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_plat1 = document.createElement("img");
        image_plat1.src = data1.plat[indexPlat1].image;
        image_plat1.className = "card-img-top p-3 rounded-5";
    
        let libelle_plat1 = document.createElement("h5");
        libelle_plat1.textContent = data1.plat[indexPlat1].libelle;
        libelle_plat1.className = "card-text fs-3 fw-medium ms-3";

        let div_accordion = document.createElement("div");
        div_accordion.className = "accordion-item";

        let h2_accordion = document.createElement("h2");
        h2_accordion.className = "accordion-header";

        let button_accordion = document.createElement("button");
        button_accordion.className = "accordion-button collapsed";
        button_accordion.textContent = "Lire";

        let div_accordion_collapse = document.createElement("div");
        div_accordion_collapse.className = "accordion-collapse collapse";

        let div_description = document.createElement("div");
        div_description.className = "accordion-body";

        let description_plat1 = document.createElement("p");
        description_plat1.textContent = data1.plat[indexPlat1].description;
        description_plat1.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat1 = document.createElement("a");
        commander_plat1.textContent = "Commander";
        commander_plat1.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat1.href = "commande.html?id=" + data1.plat[indexPlat1].id_plat;
    
        plat_1.append(element_plats1);
        element_plats1.append(panneau_carte_plat1, carte_plat1);
        carte_plat1.append(image_plat1, libelle_plat1, div_accordion, commander_plat1);
        div_accordion.append(h2_accordion, div_accordion_collapse);
        h2_accordion.append(button_accordion);
        div_accordion_collapse.append(div_description);
        div_description.append(description_plat1);

    });


        $.getJSON("assets/js/the_district.json", function(data2) {

        let plat_2 = $("#promo_plat_2");

        let indexPlat2 = 4;

        let element_plats2 = document.createElement("div");
        element_plats2.className = "mb-3 mt-3";

        let panneau_carte_plat2 = document.createElement("div");
        panneau_carte_plat2.className = "fs-5 ms-5 d-flex align-items-center justify-content-center fw-medium panneaux";
        panneau_carte_plat2.textContent = "A ne pas rater !";
        panneau_carte_plat2.style = "width: 10.5rem; height: 4rem;";
    
        let carte_plat2 = document.createElement("div");
        carte_plat2.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_plat2 = document.createElement("img");
        image_plat2.src = data2.plat[indexPlat2].image;
        image_plat2.className = "card-img-top p-3 rounded-5";
    
        let libelle_plat2 = document.createElement("h5");
        libelle_plat2.textContent = data2.plat[indexPlat2].libelle;
        libelle_plat2.className = "card-text fs-3 fw-medium ms-3";

        let description_plat2 = document.createElement("p");
        description_plat2.textContent = data2.plat[indexPlat2].description;
        description_plat2.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat2 = document.createElement("a");
        commander_plat2.textContent = "Commander";
        commander_plat2.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat2.href = "commande.html?id=" + data2.plat[indexPlat2].id_plat;
    
        plat_2.append(element_plats2);
        element_plats2.append(panneau_carte_plat2, carte_plat2);
        carte_plat2.append(image_plat2, libelle_plat2, description_plat2, commander_plat2);
    });

});


$(document).ready(function() {
  
    $.getJSON("assets/js/the_district.json", function(data) {
      
        let categorie_1 = $("#promo_categorie_mobile");
    
        let indexCategorieChoisie = 7;
    
        let element = document.createElement("div");
        element.className = "mb-3 mt-3";

        let panneau_carte = document.createElement("div");
        panneau_carte.className = "fs-5 ms-5 d-flex align-items-center justify-content-center fw-medium panneaux";
        panneau_carte.textContent = "Veggie Food";
        panneau_carte.style = "width: 9rem; height: 4rem;";
    
        let carte_categorie = document.createElement("div");
        carte_categorie.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_categorie = document.createElement("img");
        image_categorie.src = data.categorie[indexCategorieChoisie].image;
        image_categorie.className = "card-img-top p-3 rounded-5";
    
        let libelle_categorie = document.createElement("a");
        libelle_categorie.textContent = data.categorie[indexCategorieChoisie].libelle;
        libelle_categorie.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
        libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[indexCategorieChoisie].id_categorie;
    
        categorie_1.append(element);
        element.append(panneau_carte, carte_categorie);
        carte_categorie.append(image_categorie, libelle_categorie);
    });


    $.getJSON("assets/js/the_district.json", function(data1) {

        let plat_1 = $("#promo_plat_1_mobile");
  
        let indexPlat1 = 0;

        let element_plats1 = document.createElement("div");
        element_plats1.className = "mb-3 mt-3";

        let panneau_carte_plat1 = document.createElement("div");
        panneau_carte_plat1.className = "fs-5 ms-5 d-flex align-items-center justify-content-center fw-medium panneaux";
        panneau_carte_plat1.textContent = "Spécialité The District";
        panneau_carte_plat1.style = "width: 14.5rem; height: 4rem;";
    
        let carte_plat1 = document.createElement("div");
        carte_plat1.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_plat1 = document.createElement("img");
        image_plat1.src = data1.plat[indexPlat1].image;
        image_plat1.className = "card-img-top p-3 rounded-5";
    
        let libelle_plat1 = document.createElement("h5");
        libelle_plat1.textContent = data1.plat[indexPlat1].libelle;
        libelle_plat1.className = "card-text fs-3 fw-medium ms-3";

        let description_plat1 = document.createElement("p");
        description_plat1.textContent = data1.plat[indexPlat1].description;
        description_plat1.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat1 = document.createElement("a");
        commander_plat1.textContent = "Commander";
        commander_plat1.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat1.href = "commande.html?id=" + data1.plat[indexPlat1].id_plat;
    
        plat_1.append(element_plats1);
        element_plats1.append(panneau_carte_plat1, carte_plat1);
        carte_plat1.append(image_plat1, libelle_plat1, description_plat1, commander_plat1);

    });


        $.getJSON("assets/js/the_district.json", function(data2) {

        let plat_2 = $("#promo_plat_2_mobile");

        let indexPlat2 = 4;

        let element_plats2 = document.createElement("div");
        element_plats2.className = "mb-3 mt-3";

        let panneau_carte_plat2 = document.createElement("div");
        panneau_carte_plat2.className = "fs-5 ms-5 d-flex align-items-center justify-content-center fw-medium panneaux";
        panneau_carte_plat2.textContent = "A ne pas rater !";
        panneau_carte_plat2.style = "width: 10.5rem; height: 4rem;";
    
        let carte_plat2 = document.createElement("div");
        carte_plat2.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_plat2 = document.createElement("img");
        image_plat2.src = data2.plat[indexPlat2].image;
        image_plat2.className = "card-img-top p-3 rounded-5";
    
        let libelle_plat2 = document.createElement("h5");
        libelle_plat2.textContent = data2.plat[indexPlat2].libelle;
        libelle_plat2.className = "card-text fs-3 fw-medium ms-3";

        let description_plat2 = document.createElement("p");
        description_plat2.textContent = data2.plat[indexPlat2].description;
        description_plat2.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat2 = document.createElement("a");
        commander_plat2.textContent = "Commander";
        commander_plat2.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat2.href = "commande.html?id=" + data2.plat[indexPlat2].id_plat;
    
        plat_2.append(element_plats2);
        element_plats2.append(panneau_carte_plat2, carte_plat2);
        carte_plat2.append(image_plat2, libelle_plat2, description_plat2, commander_plat2);
    });

});
