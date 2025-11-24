console.log("GESTIÓN DE PÓLIZAS DE SEGUROS - FUNCIONES");

// ----------------------------------------------------------
// FORMA CLÁSICA
// ----------------------------------------------------------
function registrarPoliza() {
    console.log("Póliza registrada correctamente en el sistema");
}
registrarPoliza();

// ----------------------------------------------------------
// FUNCIÓN CON PARÁMETROS Y RETORNO
// ----------------------------------------------------------
function calcularPrima(base, riesgo) {
    return base + (base * riesgo / 100);
}
let prima = calcularPrima(500, 15);
console.log("La prima calculada es de:", "$" + prima);

// ----------------------------------------------------------
// FUNCIONES FLECHA
// ----------------------------------------------------------
const descuento = (monto, porcentaje) => {
    return monto - (monto * porcentaje / 100);
}
let montoFinal = descuento(800, 10);
console.log("Monto con descuento aplicado:", "$" + montoFinal);

// ----------------------------------------------------------
// FUNCIÓN CON RETORNO DIRECTO
// ----------------------------------------------------------
const calcularImpuesto = valor => valor * 0.12;
console.log("El impuesto del 12% sobre una prima es:", "$" + calcularImpuesto(1000));

// ----------------------------------------------------------
// FUNCIÓN CON PARÁMETROS POR DEFECTO
// ----------------------------------------------------------
function saludarCliente(nombre, mensaje = "Estimado cliente, bienvenido a su aseguradora") {
    return mensaje + " " + nombre;
}
let saludo1 = saludarCliente("Juan Pérez");
let saludo2 = saludarCliente("María López", "Saludos cordiales, gracias por renovar su póliza");
console.log(saludo1);
console.log(saludo2);

// ----------------------------------------------------------
// FUNCIÓN PARA VALIDAR SI UNA PÓLIZA ESTÁ ACTIVA
// ----------------------------------------------------------
function polizaActiva(diasRestantes) {
    if (diasRestantes > 0) {
        return true;
    } else {
        return false;
    }
}

let dias1 = 30;
if (polizaActiva(dias1)) {
    console.log("La póliza sigue activa. Días restantes:", dias1);
} else {
    console.log("La póliza ha expirado.");
}

let dias2 = 0;
if (polizaActiva(dias2)) {
    console.log("La póliza sigue activa. Días restantes:", dias2);
} else {
    console.log("La póliza ha expirado.");
}

// ----------------------------------------------------------
// FUNCIÓN PARA CALCULAR EL VALOR ASEGURADO
// ----------------------------------------------------------
function calcularCobertura(valorBien, porcentajeCobertura) {
    return valorBien * (porcentajeCobertura / 100);
}
let cobertura1 = calcularCobertura(20000, 80);
console.log("La cobertura del bien es de:", "$" + cobertura1);

let cobertura2 = calcularCobertura(35000, 90);
console.log("La cobertura del bien es de:", "$" + cobertura2);
