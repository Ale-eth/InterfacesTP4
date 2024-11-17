// Selecciona la imagen
const image = document.querySelector('#seis-numeros img');

// Variable para rastrear la última posición del scroll
let lastScrollPosition = 0;

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
    // Obtén la posición actual del scroll
    const currentScrollPosition = window.scrollY;

    // Calcula la dirección del scroll (1 si se baja, -1 si se sube)
    const scrollDirection = currentScrollPosition > lastScrollPosition ? -1 : 1;

    // Calcula el desplazamiento basado en la dirección opuesta al scroll
    const moveY = scrollDirection * 7; // 

    // Obtén el valor actual de transformación en Y
    const currentTransform = getComputedStyle(image).transform;
    let currentTranslateY = 0;

    if (currentTransform !== 'none') {
        currentTranslateY = parseFloat(currentTransform.split(',')[5]) || 0; // Extrae el valor Y
    }

    // Aplica el nuevo desplazamiento limitado dentro del contenedor
    const newTranslateY = Math.max(Math.min(currentTranslateY + moveY, 50), -50); 
    image.style.transform = `translateY(${newTranslateY}px)`;

    // Actualiza la posición del scroll
    lastScrollPosition = currentScrollPosition;
});

