$(document).ready(function () {

    $.getJSON("assets/js/the_district.json", function(data3) { // Vos données JSON

    // Obtenez la valeur de la barre de recherche
    let recherche = document.getElementById('recherche_dynamique');

    recherche.addEventListener('keyup', (e) => {

    let recherche_minuscule = e.target.value.toLowerCase();

    // Filtrer les données en fonction de la saisie de l'utilisateur
    let donnees_filtrees = data3.plat.filter(plat => {

        return plat.libelle.toLowerCase().includes(recherche_minuscule);

    });

    // Afficher les résultats filtrés
    displayResults(donnees_filtrees);

});

    function displayResults(resultats) {
        // Ici, vous pouvez définir comment vous voulez afficher les résultats
        // Par exemple, vous pouvez les ajouter à une liste dans votre HTML
        console.log(resultats);
        $("#suggestions").text(resultats);

    }

})})