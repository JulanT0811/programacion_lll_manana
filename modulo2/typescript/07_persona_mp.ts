export class Poliza {
    titular: string;
    numeroPoliza: number;

    constructor(
        titular: string,
        numeroPoliza: number
    ) {
        this.titular = titular;
        this.numeroPoliza = numeroPoliza;
    }

    mostrarDetalle(): void {
        console.log(
            `Póliza Nº ${this.numeroPoliza} registrada a nombre de ${this.titular}.`
        );
    }
}
