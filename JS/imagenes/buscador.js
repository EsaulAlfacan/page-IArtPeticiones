document.getElementById('searchButton').addEventListener('click', function () {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var galeriaItems = document.querySelectorAll('.galeria-item');

    galeriaItems.forEach(function (item) {
        var altText = item.querySelector('img').alt.toLowerCase();
        if (altText.indexOf(input) !== -1) {
            item.style.display = ''; // Muestra la imagen si coincide
        } else {
            item.style.display = 'none'; // Oculta la imagen si no coincide
        }
    });
});
