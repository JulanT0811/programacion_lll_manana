let poliza = null;

// Evento para crear una póliza nueva
document.getElementById('crear').addEventListener('click', () => {
    poliza = document.createElement('p');
    poliza.textContent = "Nueva póliza creada desde el sistema de gestión.";
    document.getElementById('contenedorPoliza').appendChild(poliza);
});

// Evento para eliminar la póliza creada
document.getElementById('eliminar').addEventListener('click', () => {
    if (poliza) {
        poliza.remove();
        alert("La póliza ha sido eliminada del sistema.");
    }
});

// Función para mostrar un saludo o mensaje informativo
function mostrarMensaje() {
    alert("Bienvenido al sistema de gestión de pólizas de seguros.");
}

// Doble clic sobre el párrafo
document.getElementById('parrafo')
    .addEventListener('dblclick', () => {
        alert("Se realizó doble clic: la información de la póliza será actualizada.");
    });

// Evento de escritura en el campo del formulario
document.getElementById('nombre')
    .addEventListener('input', (e) => {
        console.log("Registrando nombre del asegurado:", e.target.value);
    });
