document.getElementById('enviarWhatsApp').addEventListener('click', function () {
    var nombre = document.getElementById('nombre').value.trim();
    var whatsapp = document.getElementById('whatsapp').value.trim();
    var descripcion = document.getElementById('descripcion').value.trim();

    // Verifica si todos los campos están llenos
    if (nombre !== '' && whatsapp !== '' && descripcion !== '') {
        var mensaje = encodeURIComponent(`Nombre: ${nombre}, WhatsApp: ${whatsapp}, Descripción: ${descripcion}`);
        var urlWhatsApp = `https://api.whatsapp.com/send?phone=7752091646&text=${mensaje}`;

        window.open(urlWhatsApp, '_blank');
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
