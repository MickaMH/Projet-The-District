$(document).ready(function() {


/* $.getJSON("assets/js/the_district.json", function(data) {
  console.log(data);
}); */


/* $.getJSON("assets/js/the_district.json", function(data) {
  $("#div1").text(JSON.stringify(data));
}); */



/* 
$("#id_categorie").html(categorie[0].id_categorie);

$("#libelle_categorie").html(categorie[0].libelle);

$("#image_categorie").html(categorie[0].image);

$("#active_categorie").html(categorie[0].active);



$("#id_plat").html(plat[0].id_plat);

$("#libelle_plat").html(plat[0].libelle);

$("#description_plat").html(plat[0].description);

$("#prix_plat").html(plat[0].prix);

$("#image_plat").html(plat[0].image);

$("#id_categorie_plat").html(plat[0].id_categorie);

$("#active_plat").html(plat[0].active); */



$.getJSON("assets/js/the_district.json", function(data) {
  
    let categories = $("#categories");
    let i;

    for (i=0; i<data.categorie.length; i++) {

        let element = document.createElement("div");
        element.className="d-flex justify-content-center mb-5";

        let carte_categorie = document.createElement("div");
        carte_categorie.className = "card w-100 border-3 bordures rounded-5 ";

        let image_categorie = document.createElement("img");
        image_categorie.src = data.categorie[i].image;
        image_categorie.className = "card-img-top p-3 rounded-5";

        let libelle = document.createElement("a");
        libelle.textContent = data.categorie[i].libelle;
        libelle.className = "card-text fs-3 fw-medium text-center  shadow-lg p-2 mb-3 ms-3 me-3 rounded-4 fond_logo lettres_blanches";
        libelle.href = "plat_test_json.html?id=" + data.categorie[i].id_categorie;

categories.append(element);
element.append(carte_categorie);
carte_categorie.append(image_categorie, libelle);

    }


    let plats = $("#plats");

    for (i=0; i<data.plat.length; i++) {

        let element_plats = document.createElement("div");
        element_plats.className="d-flex justify-content-center mb-5";

        let carte_plat = document.createElement("div");
        carte_plat.className = "card w-100 border-3 bordures rounded-5 ";

        let image_plat = document.createElement("img");
        image_plat.src = data.categorie[i].image;
        image_plat.className = "card-img-top p-3 rounded-5";

        let libelle_plat = document.createElement("h1");
        libelle_plat.textContent = data.plat[i].libelle;
        libelle_plat.className = "card-text fs-3 fw-medium text-center  shadow-lg p-2 mb-3 ms-3 me-3 rounded-4 fond_logo lettres_blanches";
        /* libelle.href = "plat_test_json.html?id=" + data.categorie[i].id_categorie; */

plats.append(element_plats);
element_plats.append(carte_plat);
carte_plat.append(image_plat, libelle_plat);









};
})})
