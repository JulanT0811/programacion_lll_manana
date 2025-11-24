var antiguedadPoliza = 30;
var nombreAsegurado = "Juan";
var polizaActiva = true;
var valorPoliza = 6;
if (antiguedadPoliza > 18 && polizaActiva) {
    console.log('Póliza vigente y activa');
}
else {
    console.log('Póliza inactiva');
}
var coberturas = ['Robo', 'Incendio', 'Accidentes'];
for (var i = 0; i < coberturas.length; i++) {
    console.log(coberturas[i]);
}
var EstadoPoliza;
(function (EstadoPoliza) {
    EstadoPoliza[EstadoPoliza["Pendiente"] = 0] = "Pendiente";
    EstadoPoliza[EstadoPoliza["Emitida"] = 1] = "Emitida";
    EstadoPoliza[EstadoPoliza["Pagada"] = 2] = "Pagada";
})(EstadoPoliza || (EstadoPoliza = {}));
console.log(EstadoPoliza);
console.log(EstadoPoliza.Pagada);
