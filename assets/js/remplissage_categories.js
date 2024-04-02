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
            libelle_categorie.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
            libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[i].id_categorie;
    
    categories.append(element);
    
    element.append(carte_categorie);
    
    carte_categorie.append(image_categorie, libelle_categorie);}

});

})