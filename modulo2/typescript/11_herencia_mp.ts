export class Poliza {
    public aseguradora: string;
    public tipoPoliza: string;

    constructor(
        aseguradora: string,
        tipoPoliza: string
    ) {
        this.aseguradora = aseguradora;
        this.tipoPoliza = tipoPoliza;
    }

    procesarPoliza(): void {
        console.log('Póliza en proceso de validación');
    }
}

export class PolizaVida extends Poliza {}
