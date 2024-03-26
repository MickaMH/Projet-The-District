// Chargement du fichier JSON (assurez-vous que le chemin est correct)
fetch('assets/js/the_district.json')

  .then(response => response.json())
  .then(data3 => {

    let searchInput = document.getElementById('recherche_dynamique');

    let resultsList = document.getElementById('suggestions');

    searchInput.addEventListener('input', () => {

        let searchTerm = searchInput.value.toLowerCase();

        let filteredPlats = data3.plat.filter(plat =>
            plat.libelle.toLowerCase().includes(searchTerm)
        );

    // Efface les résultats précédents
    resultsList.innerHTML = '';

    // Affiche les résultats filtrés
    filteredPlats.forEach(plat => {

            /* let div_suggestions = document.createElement('div');
            div_suggestions.className = "border-3 bordures" */


            let li = document.createElement('li');
            li.className = "text-decoration-none";
          
      
            let img = document.createElement('img');
            img.src = plat.image; // Assurez-vous que le chemin est correct
            img.alt = plat.libelle;
            img.className = /* "p-1 rounded-4";  */   "p-1 rounded-3";
            img.style = "width: 7rem; height: 7rem;";
            li.appendChild(img);
        
          
            let libelle = document.createElement('a');
            libelle.textContent = plat.libelle;
            libelle.className = "ms-1 text-decoration-none";
            libelle.style = "color: black";
            libelle.href = "commande_json.html?id=" + data3.plat.id_plat;
            
            /* div_suggestions.append(li); */
            li.append(img, libelle);
            
            
            resultsList.appendChild(li);
    
      });
    });
  })

  .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
