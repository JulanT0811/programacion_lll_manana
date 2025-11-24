import { Poliza, PolizaVida } from "./11_herencia_mp";

const polizaAuto = new Poliza('Seguros Andes', 'Póliza de Auto');
console.log(polizaAuto.aseguradora);
console.log(polizaAuto.tipoPoliza);
polizaAuto.procesarPoliza();

const polizaVida = 
    new PolizaVida('Seguros Quito', 'Póliza de Vida');
console.log(polizaVida.aseguradora);
console.log(polizaVida.tipoPoliza);
polizaVida.procesarPoliza();
