window.addEventListener("load", function () {
    const stars = document.querySelectorAll('.star');
    let currentStar = 0;

    // Función para encender las estrellas secuencialmente
    function lightUpStar() {
        if (currentStar < stars.length) {
            stars[currentStar].classList.add('on'); // Agrega la clase 'on' para encender la estrella
            currentStar++;
        }
    }

    // Encender una estrella cada segundo
    const starInterval = setInterval(lightUpStar, 1000);

    // Ocultar el loader después de 5 segundos
    setTimeout(function () {
        clearInterval(starInterval); // Detenemos la secuencia
        const loader = document.getElementById("loader");
        loader.style.display = "none"; // Ocultar el loader
    }, 1);
});
