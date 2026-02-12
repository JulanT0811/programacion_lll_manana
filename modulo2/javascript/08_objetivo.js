console.log("OBJETOS")
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Quito"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificacion del objeto");
persona.nombre="Maria"
console.log(persona);
console.log("Incluir clave al objeto");
PermissionStatus.direccion="Av. Occidental";
console.log(persona);
console.log("Eliminar clave al objeto");
PermissionStatus.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave)
}
console.log("Mostrar calves con Object.keys");
console.log (Object.keys(persona));
console.log("Mostrar valor con Object.values");
console.log (Object.values(persona));
console.log("Objetos Anidados");
console.log("OBJETOS")
let persona = {
    nombre: "Pedro",
    apellido: "Peres",
    contacto: {
        correo: "pedro@gmail.com",
        telefono: "025162323",
        celular: "0985809696"
    },
    materias: [
        {
            nombre: "programacion III",
            calificacion:8
        },
        {
            nombre: "Base de datos II",
            calificacion:8
        }
    ]
};
console.log("Estudiante: ",estudiante)