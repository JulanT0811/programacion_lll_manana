let primaMensual = 250;

if (primaMensual > 200) {
    console.log("La póliza tiene una prima alta");
}
let claveAgente = "seguro2025";
if (claveAgente === "seguro2025") {
    console.log("Agente autenticado correctamente");
}
let calificacionCliente = 7;
if (calificacionCliente >= 9) {
    console.log("Cliente sobresaliente — Descuento especial aplicado");
} else if (calificacionCliente >= 6) {
    console.log("Cliente aprobado — Renovación disponible");
} else {
    console.log("Cliente con historial irregular — Revisión necesaria");
}
let edadCliente = 22;
let tieneLicencia = true;

if (edadCliente >= 18) {
    if (tieneLicencia) {
        console.log("El cliente puede contratar póliza vehicular");
    } else {
        console.log("El cliente necesita licencia válida para asegurar su vehículo");
    }
} else {
    console.log("El cliente es menor de edad y no puede contratar esta póliza");
}
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana — Revisión de pólizas nuevas");
        break;
    case "viernes":
        console.log("Cierre semanal — Generar reportes de siniestros");
        break;
    default:
        console.log("Día de gestión regular en la aseguradora");
}
let polizaVida = 30000;
let polizaHogar = 50000;
let polizaVehicular = 40000;
let mayorCobertura = 0;

if (polizaVida > polizaHogar && polizaVida > polizaVehicular) {
    mayorCobertura = polizaVida;
} else if (polizaHogar > polizaVehicular) {
    mayorCobertura = polizaHogar;
} else {
    mayorCobertura = polizaVehicular;
}

console.log("La póliza con mayor cobertura es de $", mayorCobertura);