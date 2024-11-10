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
