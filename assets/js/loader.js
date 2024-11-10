window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.style.display = "none"; // Oculta el loader después del tiempo de espera
    }, 100); // Tiempo en milisegundos (2000 ms = 2 segundos)
});
