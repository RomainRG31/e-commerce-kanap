document.addEventListener("DOMContentLoaded", function () {
    //-------------------fonction principale-------------------//
    //--------------------------------------------------------//
    async function main() {
        let products = await GetProducts();
        console.log(products);

        for (let product of products) {
            displayProducts(product);
        }

    }

    main();

    //-------------------Fonction d'intérrogation de notre api avec product-------------------//
    //-----------------------------------------------------------------------------------------//
    async function GetProducts() {
        return fetch("http://localhost:3000/api/products")
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //-------------------Fonction d'affichage du produit-------------------//
    //---------------------------------------------------------------------//
    function displayProducts(product) {
        const Dom = document.getElementById("items");

        Dom.insertAdjacentHTML(
            "beforeend",
            `
            <a href="./product.html?id=${product._id}">
                <article>
                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                    <h3 class="productName">${product.name}</h3>
                    <p class="productDescription">${product.description}</p>
                </article>
            </a>
            `
        );
    }
});
