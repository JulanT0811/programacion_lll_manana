let antiguedadPoliza: number = 30;
let nombreAsegurado: string = "Juan";
let polizaActiva: boolean = true;
let valorPoliza: any = 6;

if (antiguedadPoliza > 18 && polizaActiva) {
    console.log('Póliza vigente y activa');
} else {
    console.log('Póliza inactiva');
}

let coberturas: string[] = ['Robo', 'Incendio', 'Accidentes'];
for (let i = 0; i < coberturas.length; i++) {
    console.log(coberturas[i]);
}

enum EstadoPoliza {
    Pendiente,
    Emitida,
    Pagada
}

console.log(EstadoPoliza);
console.log(EstadoPoliza.Pagada);
