document.querySelectorAll('.imagen-galeria').forEach(imagen => {
    imagen.addEventListener('click', () => {
        if (imagen.classList.contains('imagen-expandida')) {
            imagen.classList.remove('imagen-expandida');
        } else {
            imagen.classList.add('imagen-expandida');
        }
    });
});
