import { Poliza } from "./11_herencia_mp";

export class PolizaEmpresarial extends Poliza {
    getCoberturaExtendida(): void {
        console.log('Cobertura para riesgos empresariales');
    }
}

const miPolizaEmpresarial =
    new PolizaEmpresarial('Seguros Nacionales', 'Póliza Empresarial');
console.log(miPolizaEmpresarial.aseguradora);
console.log(miPolizaEmpresarial.tipoPoliza);
miPolizaEmpresarial.procesarPoliza();
miPolizaEmpresarial.getCoberturaExtendida();
