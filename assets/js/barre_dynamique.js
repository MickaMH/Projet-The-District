$(document).ready(function() {

$.getJSON("assets/js/the_district.json", function(suggestionsURL) {
        // Écoutez les événements de saisie dans la barre de recherche
        $("#recherche_dynamique").on("input", handleInput);

        async function handleInput(event) {
            let userInput = event.target.value.toLowerCase();

            try {
                let response = await fetch(suggestionsURL);
                let data = await response.json();

                let filteredSuggestions = data.suggestions.filter(suggestion =>
                    suggestion.toLowerCase().includes(userInput)
                );

                // Affichez les suggestions filtrées sous la barre de saisie
                let suggestionsList = $("#suggestions_list");
                suggestionsList.empty(); // Effacez les suggestions précédentes

                filteredSuggestions.forEach(suggestion => {
                    let listItem = $("<li>").text(suggestion).addClass("list-group-item");
                    suggestionsList.append(listItem);
                });
            } catch (error) {
                console.error("Erreur lors de la récupération des suggestions :", error);
            }
        }

})})