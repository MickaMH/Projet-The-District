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
  
        let description_plat = document.createElement("div");

        // Créez un élément de bouton pour activer/désactiver l'accordéon
        let bouton_accordeon = document.createElement("button");
        bouton_accordeon.textContent = "Description du plat :";
        bouton_accordeon.className = "accordion-button collapsed fw-medium ms-3 mb-3 text-decoration-none";

        // Créez un élément de div pour contenir le texte de la description
        let contenu_accordeon = document.createElement("div");
        contenu_accordeon.textContent = data2.plat[i].description;
        contenu_accordeon.className = "collapse ms-3 me-3 mb-3 fw-medium fst-italic";
  
        let commander_plat = document.createElement("a");
        commander_plat.textContent = "Commander";
        commander_plat.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat.href = "commande.html?id=" + data2.plat[i].id_plat;
  
    plats.append(element_plats);
  
    element_plats.append(carte_plat);
  
    carte_plat.append(image_plat, libelle_plat, description_plat, commander_plat);

    // Ajoutez les éléments au DOM
    description_plat.appendChild(bouton_accordeon);
      
    description_plat.appendChild(contenu_accordeon);

    // Activez l'accordéon lorsque le bouton est cliqué
    bouton_accordeon.addEventListener("click", function() {
    contenu_accordeon.classList.toggle("show");

});
}});
})