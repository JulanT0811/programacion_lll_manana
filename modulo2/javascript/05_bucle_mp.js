// -----------------------------------------------------------
// Simulación de procesos en la Gestión de Pólizas de Seguros
// Uso de estructuras repetitivas (for, while, do...while)
// -----------------------------------------------------------

// Ejemplo FOR: mostrar las pólizas registradas
for (let i = 1; i <= 10; i++) {
    console.log("Procesando póliza número:", i);
}

// Cálculo del monto total de las primas de 10 pólizas
let totalPrimas = 0;
for (let i = 1; i <= 10; i++) {
    totalPrimas += i * 50; // valor ficticio de prima
}
console.log("Monto total de primas registradas:", "$" + totalPrimas);

// Mostrar el nombre de un cliente letra por letra
let cliente = "Juan Pérez";
for (let i = 0; i <= cliente.length - 1; i++) {
    console.log("Letra del nombre del cliente:", cliente[i]);
}

// Tabla de pagos de una póliza
let cuotaMensual = 75;
console.log("Tabla de pagos mensuales de la póliza (valor en USD):");
for (let i = 1; i <= 12; i++) {
    console.log("Mes", i, ":", "$" + (cuotaMensual * i));
}

// Mostrar el incremento de cobertura anual
for (let i = 1; i <= 10; i++) {
    console.log("Año", i, "- Cobertura actual:", "$" + (i ** 2 * 100));
}

// Simulación con bucle WHILE
console.log("Verificación de clientes activos (bucle while):");
let c = 1;
while (c <= 6) {
    console.log("Cliente activo número:", c);
    c++;
}

// Revisar valores de pólizas en una lista
let polizas = [1200, 950, 1400, 1100, 1600];
let indice = 0;
while (indice < polizas.length) {
    console.log("Valor de la póliza", indice + 1, "es de $", polizas[indice]);
    indice++;
}

// Mostrar las pólizas que superan los $1000
let posicion = 0;
while (posicion < polizas.length) {
    if (polizas[posicion] > 1000) {
        console.log("Póliza con cobertura alta:", "$" + polizas[posicion]);
    }
    posicion++;
}

// Evaluar pagos pendientes con DO...WHILE
let pagosPendientes = 5;
do {
    console.log("Procesando pago pendiente número:", pagosPendientes);
    pagosPendientes--;
} while (pagosPendientes != 0);

// Generar reporte de valores de cuotas mensuales
let valorBase = 50;
let mes = 1;
console.log("Tabla de cuotas mensuales:");
while (mes <= 12) {
    console.log("Mes", mes, ": $", valorBase * mes);
    mes++;
}

// Buscar la póliza con mayor cobertura
let coberturas = [5000, 12000, 8000, 15000, 9000];
let mayorCobertura = coberturas[0];
let pos = 0;
while (pos < coberturas.length) {
    if (coberturas[pos] > mayorCobertura) {
        mayorCobertura = coberturas[pos];
    }
    pos++;
}
console.log("La póliza con mayor cobertura tiene un valor de:", "$" + mayorCobertura);
