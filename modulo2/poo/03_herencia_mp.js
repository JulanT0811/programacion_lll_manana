class Poliza {
  constructor (tipo) {
    this.tipo = tipo;
  }
  mostrarCobertura() {
    console.log("Esta póliza ofrece cobertura general.");
  }    
}

class PolizaVida extends Poliza {}

const miPolizaVida = new PolizaVida("Vida");
const miPolizaGeneral = new Poliza("Vehicular");

miPolizaGeneral.mostrarCobertura();
miPolizaVida.mostrarCobertura();
