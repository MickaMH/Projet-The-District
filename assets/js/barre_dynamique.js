// Chargement du fichier JSON (assurez-vous que le chemin est correct)
fetch("assets/js/the_district.json")
  .then(response => response.json())
  .then(data3 => {

    let recherche = document.getElementById("recherche_dynamique");

    let resultats_recherche = document.getElementById("suggestions");

    recherche.addEventListener("input", () => {

      let mots_recherches = recherche.value.toLowerCase();

      let plats_filtre = data3.plat.filter(plat =>
          plat.libelle.toLowerCase().includes(mots_recherches)

      );

      // Efface les résultats précédents
      resultats_recherche.innerHTML = "";

      // Affiche les résultats filtrés si le champ de recherche n'est pas vide
      if (mots_recherches.trim() !== "") {

        plats_filtre.forEach(plat => {

          let li = document.createElement("li");
          li.className = "text-decoration-none";

          let img = document.createElement("img");
          img.src = plat.image;
          img.alt = plat.libelle;
          img.className = "p-1 rounded-3";
          img.style = "width: 5rem; height: 5rem;";
          li.appendChild(img);

          let libelle = document.createElement("a");
          libelle.textContent = plat.libelle;
          libelle.className = "ms-1 text-decoration-none";
          libelle.style = "color: black";
          libelle.href = "commande.html?id=" + plat.id_plat;

          li.append(img, libelle);
          resultats_recherche.appendChild(li);
          
        });

        // Ajoute la bordure supérieure si des résultats sont affichés
            resultats_recherche.style.borderTop = "0.1rem solid grey";
            resultats_recherche.style.marginBottom = "0.5rem";

        } 
        
        else {
        // Retire la bordure supérieure si le champ de recherche est vide
            resultats_recherche.style.borderTop = "none";
            resultats_recherche.style.marginBottom = "0"; // Vous pouvez ajuster cette valeur selon vos préférences
        }
      
    });

  })

  .catch(error =>
    console.error("Erreur lors du chargement du fichier JSON :", error)
    
  );
