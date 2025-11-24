// función básica
function generarSaludoCliente(nombre) {
    return "Bienvenido cliente ".concat(nombre, ", su p\u00F3liza est\u00E1 en proceso.");
}
console.log(generarSaludoCliente('Francisco'));
// función flecha
var calcularPrimaTotal = function (primaBase, impuestos) {
    return primaBase + impuestos;
};
console.log(calcularPrimaTotal(300, 45));
function mostrarMensajeSistema() {
    console.log('Sistema de Gestión de Pólizas');
    console.log('Operación realizada correctamente');
}
mostrarMensajeSistema();
function calcularValorPoliza(capitalAsegurado) {
    return capitalAsegurado * 0.08; // 8% de costo de póliza
}
function calcularValorPolizaVoid(capitalAsegurado) {
    console.log(capitalAsegurado * 0.08);
}
console.log(calcularValorPoliza(50000));
calcularValorPolizaVoid(80000);
