$(document).ready(function() {

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
  
    carte_plat.append(image_plat, libelle_plat, description_plat, commander_plat);}
  
});

})