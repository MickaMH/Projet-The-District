    // Load the data from an internal JSON file named "categories.json"
    fetch("assets/js/the_district.json")
    .then(response => response.json())
    .then(data => {
        // Assuming you have the data in a JavaScript object (similar to the provided JSON format)
        const categories = data;

        // Function to display category details in a div
        function displayCategoryDetails(id) {

            const category = categories.find(categorie => categorie.id_categorie === id);

            if (category) {

                const div = document.getElementById("promo_categorie");

                div.innerHTML = `
                    <h2>${category.libelle}</h2>
                    <img src="${category.image}" alt="${category.libelle}" />
                `;

            } else {
                console.error(`Category with id ${id} not found.`);
            }
        }

        // Example usage: display category details for id_categorie = 4
        displayCategoryDetails(14);
    })
    .catch(error => {
        console.error("Error fetching data from categories.json:", error);
    });