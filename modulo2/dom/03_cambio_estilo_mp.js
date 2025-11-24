// Selecciona el elemento con el id "mensaje" y actualiza su contenido
const mensaje = document.getElementById("mensaje");
mensaje.textContent = "La póliza ha sido actualizada correctamente";
mensaje.style.color = "green"; // Color representando éxito en la gestión

// Selecciona el enlace con el id "link" y modifica sus atributos
const link = document.getElementById("link");
link.setAttribute("href", "https://www.ejemplo-seguros.com/polizas");
link.textContent = "Ver detalles de la póliza actualizada";

// Agrega una clase CSS para que el enlace adopte estilo de botón
link.classList.add("boton");
