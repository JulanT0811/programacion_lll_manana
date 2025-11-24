export interface Poliza {
    id: number;
    titular: string;
    tipoSeguro?: string;
}

import { Poliza } from "./05_interface_mp";  

const poliza1: Poliza = {
    id: 101,
    titular: "Carlos López"
}

const poliza2: Poliza = {
    id: 102,
    titular: "María Fernández",
    tipoSeguro: 'Seguro de Vida'
}

console.log(poliza1);
console.log(poliza1.id);
console.log(poliza1.titular);
console.log(poliza1.tipoSeguro);

console.log(poliza2);
console.log(poliza2.id);
console.log(poliza2.titular);
console.log(poliza2.tipoSeguro);
