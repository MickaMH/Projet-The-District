// Chargement du fichier JSON (assurez-vous que le chemin est correct)
fetch("assets/js/the_district.json")

  .then(response => response.json())
  .then(data3 => {

    let recherche = document.getElementById("recherche_dynamique");

    let resultats_recherche = document.getElementById("suggestions");

    recherche.addEventListener("input", () => {

        let mots_recherches = recherche.value.toLowerCase();

        let plats_filtre = data3.plat.filter(plat =>plat.libelle.toLowerCase().includes(mots_recherches));

    // Efface les résultats précédents
    resultats_recherche.innerHTML = '';

    // Affiche les résultats filtrés
    plats_filtre.forEach(plat => {

            /* let div_suggestions = document.createElement('div');
            div_suggestions.className = "border-3 bordures" */


            let li = document.createElement("li");
            li.className = "text-decoration-none";
            
      
            let img = document.createElement("img");
            img.src = plat.image; // Assurez-vous que le chemin est correct
            img.alt = plat.libelle;
            img.className = /* "p-1 rounded-4";  */   "p-1 rounded-3";
            img.style = "width: 5rem; height: 5rem;";
            li.appendChild(img);
        
          
            let libelle = document.createElement("a");
            libelle.textContent = plat.libelle;
            libelle.className = "ms-1 text-decoration-none";
            libelle.style = "color: black";
            libelle.href = "commande_json.html?id=" + data3.plat.id_plat;
            
            /* div_suggestions.append(li); */
            li.append(img, libelle);
            

            resultats_recherche.appendChild(li);
            resultats_recherche.style.borderTop = "0.1rem solid grey";
    
      });
    });
  })

  .catch(error => console.error("Erreur lors du chargement du fichier JSON :", error));
