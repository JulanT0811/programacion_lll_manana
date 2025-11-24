class Poliza {
  constructor (titular, monto) {
    this.titular = titular;
    this.monto = monto;
  }

  procesarPoliza() {
    console.log("Procesando póliza general...");
  }

  calcularPrima() {
    return this.monto * 0.10; // Prima base del 10%
  }

  calcularIndemnizacion(siniestro) {
    return this.monto * siniestro * 0.5; // Cálculo base del 50% del daño
  }
}

class PolizaVida extends Poliza {
  calcularPrima() {
    return this.monto * 0.15; // Prima del 15% para pólizas de vida
  }

  calcularIndemnizacion(siniestro) {
    return this.monto * siniestro * 0.8; // Cobertura del 80%
  }
}

class PolizaVehicular extends Poliza {
  calcularPrima() {
    return this.monto * 0.12; // Prima del 12% para pólizas vehiculares
  }
}

// Creación de objetos
const polizaPedro = new PolizaVida("Pedro", 20000);
const polizaJuan = new PolizaVehicular("Juan", 15000);

// Uso de métodos
polizaPedro.procesarPoliza();
polizaJuan.procesarPoliza();

console.log("Prima de Pedro:", polizaPedro.calcularPrima());
console.log("Prima de Juan:", polizaJuan.calcularPrima());
console.log("Indemnización de Pedro:", polizaPedro.calcularIndemnizacion(0.6));
console.log("Indemnización de Juan:", polizaJuan.calcularIndemnizacion(0.4));
