console.log("OBJETOS - GESTIÓN DE PÓLIZAS DE SEGUROS");

let poliza = {
    numero: "POL12345",
    titular: "Carlos López",
    tipo: "Seguro de Vida",
    ciudad: "Guayaquil",
    valor: 250.00
};

console.log(poliza);
console.log("Titular de la póliza:", poliza.titular);
console.log("Ciudad de registro:", poliza.ciudad);
console.log("Valor asegurado:", poliza["valor"]);

console.log("Modificación del objeto");
poliza.titular = "María Torres";
console.log("Nuevo titular actualizado:", poliza);

console.log("Incluir nueva clave al objeto");
poliza.agente = "Juan Pérez";
console.log("Agente asignado a la póliza:", poliza);

console.log("Eliminar clave del objeto");
delete poliza.agente;
console.log("Objeto después de eliminar la clave 'agente':", poliza);

console.log("Recorrer un objeto (mostrar claves)");
for (let clave in poliza) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(poliza));

console.log("Mostrar valores con Object.values");
console.log(Object.values(poliza));

console.log("OBJETOS ANIDADOS - CLIENTE Y COBERTURAS");

// Objeto más complejo con datos anidados
let cliente = {
    nombre: "Fernando Morales",
    cedula: "0912547896",
    contacto: {
        correo: "fernando.morales@aseguradora.ec",
        telefono: "042569874",
        celular: "0998456321"
    },
    polizas: [
        {
            tipo: "Auto",
            cobertura: "Todo Riesgo",
            montoAsegurado: 15000
        },
        {
            tipo: "Hogar",
            cobertura: "Incendio y Robo",
            montoAsegurado: 30000
        }
    ]
};

console.log("Cliente:", cliente);
console.log("Nombre del cliente:", cliente.nombre);
console.log("Correo de contacto:", cliente.contacto.correo);
console.log("Tipo de póliza principal:", cliente.polizas[0].tipo);
console.log("Monto asegurado en la segunda póliza:", cliente.polizas[1].montoAsegurado);
