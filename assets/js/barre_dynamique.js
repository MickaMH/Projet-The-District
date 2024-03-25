    $(document).ready(function () {

    // Obtenez la valeur de la barre de recherche
    let recherche = document.getElementById("recherche_dynamique");
    

    $.getJSON("assets/js/the_district.json", function(data3) { // Vos données JSON

    recherche.addEventListener('keyup', (e) => {

        let recherche_minuscule = e.target.value.toLowerCase(recherche);
        
        // Filtrer les données en fonction de la saisie de l'utilisateur
        let donnees_filtrees_object = data3.plat.filter(plat => {return plat.libelle.toLowerCase().includes(recherche_minuscule);
        
    });

    let donnees_filtrees = JSON.stringify(donnees_filtrees_object);
    // Afficher les résultats filtrés
    displayResults(donnees_filtrees);
    
    let suggestions = $("#suggestions");
    
    let image_plat = document.createElement('img');
    image_plat.src = data3.plat.image;
    image_plat.className = 'img-fluid';

    let libelle_plat = document.createElement('a');
    libelle_plat.href = 'index.html?id=' + plat.id_plat;
    libelle_plat.textContent = data3.plat.libelle;

    let libelle_plat_string = JSON.stringify(libelle_plat);

    suggestions.append(image_plat, libelle_plat_string);

    });

    function displayResults(donnees_filtrees) {
        // Ici, vous pouvez définir comment vous voulez afficher les résultats
        // Par exemple, vous pouvez les ajouter à une liste dans votre HTML
        
        $("#suggestions").text(donnees_filtrees);
        console.log(donnees_filtrees);
    }

})})

    
