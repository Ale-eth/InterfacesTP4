// Seleccionamos todos los contenedores dentro del carrusel
const contenedores = document.querySelectorAll('.contenedor');
const carouselContainer = document.querySelector('.carousel-container'); // Contenedor principal de los carruseles

let currentIndex = 0; // Índice del contenedor actual
let isScrolling = false; // Evitar que se cambie mientras se hace scroll

// Función para cambiar el contenedor visible
function changeContainer() {
    if (isScrolling) return; // Evitar que se cambie mientras se hace scroll

    isScrolling = true;

    // Ocultar el contenedor anterior
    contenedores[currentIndex].classList.remove('show');

    // Avanzar al siguiente contenedor (pero no sobrepasar el número total de contenedores)
    currentIndex = (currentIndex + 1) % contenedores.length;

    // Hacer visible el nuevo contenedor
    contenedores[currentIndex].classList.add('show');

    // Esperamos la duración de la transición para permitir un nuevo cambio
    setTimeout(() => {
        isScrolling = false;
    }, 1000); // Esperamos 1 segundo para cambiar nuevamente
}

// Detectamos el desplazamiento y cambiamos el contenedor al hacer scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    // Si el scroll se mueve más allá de un contenedor
    if (scrollPosition >= contenedores[currentIndex].offsetTop + window.innerHeight * 0.8) {
        changeContainer();
    }

    // Cuando llegues al último contenedor, bloqueamos el scroll adicional y pasamos a la siguiente sección
    if (currentIndex === contenedores.length - 1) {
        // Permitir el scroll normal hasta la siguiente sección
        const nextSection = document.querySelector('#mira-el-video'); // Asegúrate de que la siguiente sección tenga un id 'mira-el-video'
        if (nextSection) {
            // Aquí deshabilitamos la transición de los contenedores cuando ya estamos en el último
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Función para hacer visible el primer contenedor al cargar la página
window.onload = function() {
    // Mostrar el primer contenedor al cargar la página
    contenedores[0].classList.add('show');
};


