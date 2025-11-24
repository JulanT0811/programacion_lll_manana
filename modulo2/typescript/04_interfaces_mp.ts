interface Poliza {
    id: number;
    titular: string;
    correo?: string;
}

const poliza1: Poliza = {
    id: 101,
    titular: "Carlos Ramírez"
}

const poliza2: Poliza = {
    id: 102,
    titular: "María Torres",
    correo: "maria.torres@aseguradora.com"
}

console.log(poliza1);
console.log(poliza1.id);
console.log(poliza1.titular);
console.log(poliza1.correo); // opcional

console.log(poliza2);
console.log(poliza2.id);
console.log(poliza2.titular);
console.log(poliza2.correo);
