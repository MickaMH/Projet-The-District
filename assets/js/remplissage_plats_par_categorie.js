// Fetch the JSON file
fetch('assets/js/the_district.json')

  .then(function(response) {
    return response.json();
  })

  .then(function(data) {
// Get the id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');
    console.log(idFromUrl);

// Filter the plates based on the id_categorie
    const filteredPlates = data.plat.filter(function(plate) {
      return plate.id_categorie === parseInt(idFromUrl);
    });

// Display the category title in a separate div
    const categoryTitleDiv = document.createElement('div');
    categoryTitleDiv.id = 'libelle_categorie';
    categoryTitleDiv.innerText = ' '; // Set the initial inner text to ' ' for better formatting
    document.body.appendChild(categoryTitleDiv);

// Display the filtered plates in the div
    const div = document.getElementById('plats_par_categorie');
    div.innerHTML = '';

// Get the category title based on the first plate's libelle
    const firstPlate = filteredPlates[0];
    const libelle_categorie = firstPlate.libelle.split(' ')[0];
    const categoryTitle = document.getElementById('libelle_categorie');
    categoryTitle.innerHTML = '';
    const categoryTitleElement = document.createElement('h1');
    categoryTitleElement.className = "col-sm-10 col-lg-4 fs-1 fw-medium ms-sm-0 ms-lg-3 mt-lg-3 lettres_neon";
    categoryTitleElement.innerText = libelle_categorie;
    categoryTitle.appendChild(categoryTitleElement);


    filteredPlates.forEach(function(plate) {

    const element_plat = document.createElement("div");
    element_plat.className="col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";
    // div.appendChild(element_plat);

    const carte_plat = document.createElement("div");
    carte_plat.className = "card w-100 border-4 bordures rounded-5";

    const image_plat = document.createElement("img");
    image_plat.src = plate.image;
    image_plat.className = "card-img-top p-3 rounded-5";

    const libelle_plat = document.createElement("h5");
    libelle_plat.textContent = plate.libelle;
    libelle_plat.className = "card-text fs-3 fw-medium ms-3";

    const description_plat = document.createElement("p");
    description_plat.textContent = plate.description;
    description_plat.className = "card-text fst-italic fw-medium ms-3 me-3";

    const commander_plat = document.createElement("a");
    commander_plat.textContent = "Commander";
    commander_plat.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
    commander_plat.href = "commande.html?id=" + plate.id_plat;

    div.appendChild(element_plat);
  
    element_plat.appendChild(carte_plat);
  
    carte_plat.appendChild(image_plat);
    carte_plat.appendChild(libelle_plat);
    carte_plat.appendChild(description_plat);
    carte_plat.appendChild(commander_plat);
    
  })

  .catch(function(error) {
    console.error(error);

  })});


  
    