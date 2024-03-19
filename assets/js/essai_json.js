$(document).ready(function() {


$.getJSON("assets/js/the_district.json", function(data) {
  
    let categories = $("#categories");

    for (i=0; i<data.categorie.length; i++) {

        let element = document.createElement("div");
        element.className="mb-3 mt-3 mb-lg-5 mt-lg-5";

        let carte_categorie = document.createElement("div");
        carte_categorie.className = "card w-100 border-4 bordures rounded-5 ";

        let image_categorie = document.createElement("img");
        image_categorie.src = data.categorie[i].image;
        image_categorie.className = "card-img-top p-3 rounded-5";

        let libelle_categorie = document.createElement("a");
        libelle_categorie.textContent = data.categorie[i].libelle;
        libelle_categorie.className = "card-text fs-3 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
        libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[i].id_categorie;

categories.append(element);
element.append(carte_categorie);
carte_categorie.append(image_categorie, libelle_categorie);}});


$.getJSON("assets/js/the_district.json", function(data2) {

  let plats = $("#plats");

  for (i=0; i<data2.plat.length; i++) {

      let element_plats = document.createElement("div");
      element_plats.className="col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";

      let carte_plat = document.createElement("div");
      carte_plat.className = "card w-100 border-4 bordures rounded-5 ";

      let image_plat = document.createElement("img");
      image_plat.src = data2.plat[i].image;
      image_plat.className = "card-img-top p-3 rounded-5";

      let libelle_plat = document.createElement("h5");
      libelle_plat.textContent = data2.plat[i].libelle;
      libelle_plat.className = "card-text fs-3 fw-medium ms-3";

      let description_plat = document.createElement("p");
      description_plat.textContent = data2.plat[i].description;
      description_plat.className = "card-text fst-italic fw-medium ms-3 me-3";

      let commander_plat = document.createElement("a");
      commander_plat.textContent = "Commander";
      commander_plat.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
      commander_plat.href = "commande_json.html?id=" + data2.plat[i].id_plat;

plats.append(element_plats);
element_plats.append(carte_plat);
carte_plat.append(image_plat, libelle_plat, description_plat, commander_plat);}});


$.getJSON("assets/js/the_district.json", function(data3) {

  let commande = $("#commande");

  for (i=0; i<data3.plat.length; i++) {

      let element_commande = document.createElement("div");
      element_commande.className="col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";

      let carte_commande = document.createElement("div");
      carte_commande.className = "card w-100 border-4 bordures rounded-5 ";

      let image_commande = document.createElement("img");
      image_commande.src = data3.plat[i].image;
      image_commande.className = "card-img-top p-3 rounded-5";

      let libelle_commande = document.createElement("h5");
      libelle_commande.textContent = data3.plat[i].libelle;
      libelle_commande.className = "card-text fs-3 fw-medium ms-3";

      let description_commande = document.createElement("p");
      description_commande.textContent = data3.plat[i].description;
      description_commande.className = "card-text fst-italic fw-medium ms-3 me-3";

      let prix_commande = document.createElement("p");
      prix_commande.textContent = data3.plat[i].prix;
      prix_commande.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";

commande.append(element_commande);
element_commande.append(carte_commande);
carte_commande.append(image_commande, libelle_commande, description_commande, prix_commande);}});


});


