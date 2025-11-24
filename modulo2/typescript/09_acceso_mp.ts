export class Poliza {
    public asegurado: string;
    private numeroPoliza: any;
    protected idInterno: string='PLZ99182898982988';

    constructor(
        asegurado: string
    ){
        this.asegurado = asegurado;
        this.generarNumeroPoliza()
    }

    generarNumeroPoliza(): void {
        this.numeroPoliza = (new Date()).toDateString;
    }

    getNumeroPoliza(): any {
        return this.numeroPoliza;
    }

    getAttributes(): any {
        return {
            asegurado: this.asegurado,
            numeroPoliza: this.numeroPoliza,
            id: this.idInterno
        }
    }
}
