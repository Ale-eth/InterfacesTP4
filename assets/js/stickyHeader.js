// Funcion temporal para probar el cambio de icono grande a icono chiquito y de ahi hacer el sticky
const logo = document.getElementById("logo-hero");


let bool = true;
window.addEventListener("click", function() {
    if (bool) {
        logo.className = 'logo-hero-small';
        bool = false; 
    } else {
        logo.className = 'logo-hero-big';
        bool = true;  
    }
});





const header = document.getElementById("header");

// Escuchar el evento de desplazamiento en la ventana
window.addEventListener("scroll", function() {
    // Detectar si la página se ha desplazado hacia abajo
    if (window.scrollY > 50) {  // Ajusta el valor '50' según cuando quieres que cambie el logo
        header.classList.add("header-sticky");  // Clase para el estilo fijo
        logo.classList.remove("logo-hero-big"); // Remueve la clase del logo grande
        logo.classList.add("logo-hero-small");  // Agrega la clase del logo pequeño
    } else {
        header.classList.remove("header-sticky"); // Quita el estilo fijo
        logo.classList.remove("logo-hero-small"); // Remueve la clase del logo pequeño
        logo.classList.add("logo-hero-big");      // Agrega la clase del logo grande
    }
});


