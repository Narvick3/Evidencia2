function guardarReserva() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value; 
    const hora = document.getElementById('hora').value;
    const numeroPersonas = document.getElementById('numero_personas').value;
    const carro = document.getElementById('carro').value;
    const comentarios = document.getElementById('comentarios').value;

    // Crear el contenido del archivo
    const contenido = `Nombre Completo: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nFecha de Reserva: ${fecha}\nHora de Reserva: ${hora}\nNúmero de Personas: ${numeroPersonas}\nCarro: ${carro}\nComentarios: ${comentarios}\n`;

    // Crear un blob de texto
    const blob = new Blob([contenido], { type: 'text/plain' });

    // Crear un enlace para la descarga
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reserva.txt';

    // Simular clic en el enlace para descargar
    document.body.appendChild(a);
    a.click();

    // Limpiar el enlace
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
