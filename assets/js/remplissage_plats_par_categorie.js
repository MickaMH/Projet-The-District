let full_url = document.URL;
let url_array = full_url.split('=');
let categorie_id = url_array[url_array.length - 1];
console.log(typeof categorie_id, categorie_id);

fetch('assets/js/the_district.json')
  .then((response) => response.json())
  .then((data4) => {

    let data = JSON.parse(data4);
    // Declare id_categorie
    let id_categorie = data.id_categorie;
    console.log(typeof id_categorie, id_categorie);

    let filtre_plats = data.plat.filter(plat => plat.id_categorie === categorie_id);

    const platsCategorie = document.getElementById("plats_par_categorie");

    filtre_plats.forEach(plat => {
        
        let element_plats = document.createElement("div");
        element_plats.className = "col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";
      
        let carte_plat = document.createElement("div");
        carte_plat.className = "card w-100 border-4 bordures rounded-5";
      
        let image_plat = document.createElement("img");
        image_plat.src = plat.image;
        image_plat.className = "card-img-top p-3 rounded-5";
      
        let libelle_plat = document.createElement("h5");
        libelle_plat.textContent = plat.libelle;
        libelle_plat.className = "card-text fs-3 fw-medium ms-3";
      
        let description_plat = document.createElement("p");
        description_plat.textContent = plat.description;
        description_plat.className = "card-text fst-italic fw-medium ms-3 me-3";
      
        let commander_plat = document.createElement("a");
        commander_plat.textContent = "Commander";
        commander_plat.className = `card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches`;
        commander_plat.href = `commande_json.html?id=${plat.id_plat}`;
      
        platsCategorie.append(element_plats);
        element_plats.append(carte_plat);
        carte_plat.append(image_plat, libelle_plat, description_plat, commander_plat);

    });
  })
  .catch((error) => {
    console.error('Erreur lors du chargement du fichier JSON :', error);
  });