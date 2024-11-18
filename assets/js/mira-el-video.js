window.addEventListener('scroll', function() {
    let offset = window.scrollY;

    // Actualiza la variable para el video
    document.documentElement.style.setProperty('--video-offset', offset * 0.5 + 'px');

    // Actualiza la variable para la imagen
    document.documentElement.style.setProperty('--img-offset', offset * 0.3 + 'px');
});
