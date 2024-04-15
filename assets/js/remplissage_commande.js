/*CARTE HORIZONTALE*/


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
      return plate.id_plat === parseInt(idFromUrl);
    });

// Display the filtered plates in the div

    const div_1 = document.getElementById('image_commande_horizontale');
    div_1.innerHTML = '';

    const div_2 = document.getElementById('libelle_description_commande_horizontale');
    div_2.innerHTML = '';

    const div_3 = document.getElementById('prix_commande_horizontale');
    div_3.innerHTML = '';

    filteredPlates.forEach(function(plate) {

    const image_plat = document.createElement("img");
    image_plat.src = plate.image;
    image_plat.className = "card-img-top p-3 rounded-5";
    image_plat.style = "width: 25rem; height: auto;";

    const libelle_plat = document.createElement("h5");
    libelle_plat.textContent = plate.libelle;
    libelle_plat.className = "card-title fs-1 mb-2";

    const description_plat = document.createElement("p");
    description_plat.textContent = plate.description;
    description_plat.className = "card-text fst-italic fw-medium fs-5 mb-3";

    const prix_plat = document.createElement("p");
    prix_plat.textContent = plate.prix;
    prix_plat.className = "card-text fw-medium fs-5";

    div_1.appendChild(image_plat);

    div_2.appendChild(libelle_plat);
    div_2.appendChild(description_plat);

    div_3.appendChild(prix_plat);
  
    
  })

  .catch(function(error) {
    console.error(error);

  })});




/*CARTE VERTICALE*/

  
  // Fetch the JSON file
fetch('assets/js/the_district.json')

.then(function(response) {
  return response.json();
})

.then(function(data2) {
// Get the id from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const idFromUrl = urlParams.get('id');
  console.log(idFromUrl);

// Filter the plates based on the id_categorie
  const filteredPlates = data2.plat.filter(function(plate) {
    return plate.id_plat === parseInt(idFromUrl);
  });

// Display the filtered plates in the div

  const div_1 = document.getElementById('image_commande_verticale');
  div_1.innerHTML = '';

  const div_2 = document.getElementById('libelle_description_commande_verticale');
  div_2.innerHTML = '';

  const div_3 = document.getElementById('prix_commande_verticale');
  div_3.innerHTML = '';

  filteredPlates.forEach(function(plate) {

  const image_plat = document.createElement("img");
  image_plat.src = plate.image;
  image_plat.className = "card-img-top p-3 rounded-5 img-fluid";
  image_plat.style = "width: 25rem; height: auto;";

  const libelle_plat = document.createElement("h5");
  libelle_plat.textContent = plate.libelle;
  libelle_plat.className = "card-title fs-1 mb-2";

  const description_plat = document.createElement("p");
  description_plat.textContent = plate.description;
  description_plat.className = "card-text fst-italic fw-medium fs-5 mb-3";

  const prix_plat = document.createElement("p");
  prix_plat.textContent = plate.prix;
  prix_plat.className = "card-text fw-medium fs-5";

  div_1.appendChild(image_plat);

  div_2.appendChild(libelle_plat);
  div_2.appendChild(description_plat);

  div_3.appendChild(prix_plat);

  
})

.catch(function(error) {
  console.error(error);

})});



    