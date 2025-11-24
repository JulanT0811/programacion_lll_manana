console.log("GESTIÓN DE PÓLIZAS DE SEGUROS");

// Declaración de arreglos con datos de pólizas
let polizas = ["Auto", "Hogar", "Vida", "Salud"];
let listaVacia = new Array();
let listaVacia2 = [];

console.log("Listado original de pólizas:", polizas);
console.log(listaVacia);
console.log(listaVacia2);

// Acceso a los elementos del arreglo
console.log("Acceso a pólizas específicas:");
console.log(polizas[0]); // Primera póliza
console.log(polizas[3]); // Última póliza

// Modificar elemento del arreglo
console.log("Modificar una póliza existente:");
polizas[0] = "Auto Premium";
console.log(polizas);

// Agregar nueva póliza al final del arreglo
console.log("Agregar una nueva póliza al final:");
polizas.push("Empresarial");
console.log(polizas);

// Agregar nueva póliza al inicio del arreglo
console.log("Agregar una póliza al inicio del listado:");
polizas.unshift("Educativa");
console.log(polizas);

// Eliminar la última póliza
console.log("Eliminar la última póliza registrada:");
polizas.pop();
console.log(polizas);

// Eliminar la primera póliza
console.log("Eliminar la primera póliza registrada:");
polizas.shift();
console.log(polizas);

// Iteración del arreglo con diferentes métodos
console.log("Iteración de pólizas con While:");
let indice = 0;
while (indice < polizas.length) {
    console.log("La póliza número", indice + 1, "es:", polizas[indice]);
    indice++;
}

console.log("Iteración de pólizas con For clásico:");
for (let i = 0; i < polizas.length; i++) {
    console.log("Tipo de póliza:", polizas[i]);
}

console.log("Iteración de pólizas con For...of:");
for (let tipo of polizas) {
    console.log("Póliza disponible:", tipo);
}

console.log("Iteración de pólizas con ForEach:");
polizas.forEach(function(tipo, indice) {
    console.log("Póliza", indice + 1, ":", tipo);
});
