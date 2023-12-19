document.querySelectorAll('.imagen-galeria').forEach(image => {
    image.addEventListener('click', function () {
        const previewContainer = document.getElementById('previewContainer');
        const previewImage = document.getElementById('previewImage');

        previewImage.src = this.src;
        previewContainer.style.display = 'flex';
    });
});

document.getElementById('previewContainer').addEventListener('click', function () {
    this.style.display = 'none';
});
