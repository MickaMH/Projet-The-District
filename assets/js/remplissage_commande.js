$(document).ready(function() {

    $.getJSON("assets/js/the_district.json", function(data) {

    let full_url = document.URL;

    let url_array = full_url.split('=');

    let plat_id = url_array[url_array.length - 1];

    $("#controle_id").text(plat_id);
    console.log(plat_id);

/* 
        if( data3.plat.id_plat === plat_id){

            let commande = $("#commande");

            let element_commande = document.createElement("div");
            element_commande.className="col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";

            let carte_commande = document.createElement("div");
            carte_commande.className = "card w-100 border-4 bordures rounded-5 ";

            let image_commande = document.createElement("img");
            image_commande.src = data3.plat.id_plat.image;
            image_commande.className = "card-img-top p-3 rounded-5";

            let libelle_commande = document.createElement("h5");
            libelle_commande.textContent = data3.plat.id_plat.libelle;
            libelle_commande.className = "card-title fs-3 fw-medium ms-3";

            let description_commande = document.createElement("p");
            description_commande.textContent = data3.plat.id_plat.description;
            description_commande.className = "card-text fst-italic fw-medium ms-3 me-3";

            let prix_commande = document.createElement("p");
            prix_commande.textContent = data3.plat.id_plat.prix;
            prix_commande.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";

    commande.append(element_commande);

    element_commande.append(carte_commande);

    carte_commande.append(image_commande, libelle_commande, description_commande, prix_commande);

} */

let searchValue = plat_id;

$.each(data.plat.id_plat, function(key, value) {

  if(value === searchValue) {

    console.log("La clé correspondante à la valeur recherchée est : " + key);
  }


})

})})
