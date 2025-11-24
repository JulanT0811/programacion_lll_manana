import { Poliza } from "./09_acceso_mp";

const miPoliza: Poliza = new Poliza('Seguro de Vida Familiar');
console.log(miPoliza.asegurado);
console.log(miPoliza.getNumeroPoliza());
console.log(miPoliza.getAttributes());
