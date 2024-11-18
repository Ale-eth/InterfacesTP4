const menuToggle = document.getElementById('menu-cerrado');
const menuOpen = document.getElementById('menu-abierto');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOpen.classList.toggle('active'); // Toggle la clase 'active' para mostrar u ocultar el menú
});


