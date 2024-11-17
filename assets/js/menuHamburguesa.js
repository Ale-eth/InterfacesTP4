const menuToggle = document.getElementById('menu-cerrado');
const menuOpen = document.getElementById('menu-abierto');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    if (menuOpen.style.display === 'block') {
        menuOpen.style.display = 'none';
    } else {
        menuOpen.style.display = 'block';
    }
});


