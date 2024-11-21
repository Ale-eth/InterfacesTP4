const spriteSheet = document.getElementById('sprite-sheet');

function animateSprite() {

    spriteSheet.src = 'assets/images/Seccion sprite-sheet/sps/2.png';
    setTimeout(animateSprite, 100);
    spriteSheet.src = 'assets/images/Seccion sprite-sheet/sps/3.png';
    setTimeout(animateSprite, 100);
    spriteSheet.src = 'assets/images/Seccion sprite-sheet/sps/4.png';
    setTimeout(animateSprite, 100);
    spriteSheet.src = 'assets/images/Seccion sprite-sheet/sps/1.png';
    setTimeout(animateSprite, 100);

    console.log("adentroooo");
    // Llama de nuevo para el siguiente fotograma
    setTimeout(animateSprite, 5000); // Cambia cada 100 ms (ajusta según velocidad deseada)
}

// Inicia la animación
animateSprite();
