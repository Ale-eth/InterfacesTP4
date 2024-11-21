window.addEventListener("load", function () {
    const blocks = document.querySelectorAll('.block');
    let currentBlock = 0;

    // Función para iluminar los bloques secuencialmente
    function lightUpBlock() {
        if (currentBlock < blocks.length) {
            blocks[currentBlock].classList.add('on'); // Ilumina el bloque
            currentBlock++;
        }
    }

    // Iluminar un bloque cada segundo
    const blockInterval = setInterval(lightUpBlock, 1000);

    // Ocultar el loader después de 5 segundos
    setTimeout(function () {
        clearInterval(blockInterval); // Detenemos la secuencia
        const loader = document.getElementById("loader");
        loader.style.display = "none"; // Ocultar el loader
    }, 200);
});
