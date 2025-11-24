class Poliza {
    constructor(numero, asegurado) {
        this.numero = numero;
        this.asegurado = asegurado;
    }
    activar() {
        console.log(`La póliza N°${this.numero} a nombre de ${this.asegurado} ha sido activada.`);
    }
    procesar() {
        console.log(`La póliza N°${this.numero} de ${this.asegurado} está en proceso de verificación.`);
    }
    cancelar() {
        console.log(`La póliza N°${this.numero} de ${this.asegurado} ha sido cancelada.`);
    }
}

const miPoliza = new Poliza("PZ-10234", "Carlos Andrade");
miPoliza.activar();
miPoliza.procesar();
miPoliza.cancelar();

console.log("Número de póliza:", miPoliza.numero);
console.log("Asegurado:", miPoliza.asegurado);
