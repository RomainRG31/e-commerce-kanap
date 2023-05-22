document.addEventListener("DOMContentLoaded", function (event) {

    //-------------------fonction principale-------------------//
    //--------------------------------------------------------//
    async function main() {

        // Récupération de URL
        const url = new URL(window.location.href);
        // On Implémente le numéros de commande dans orderId
        document.getElementById("orderId").innerText = url.searchParams.get("id");

        localStorage.clear();

    }

    main();

});