class Empleado {
  constructor (nombre, salario) {
   this.nombre = nombre;
  }
  trabajar() {
   console.log("Empleado trabajando ...");
  }
  calcularvacaciones() {
   return this.salario * 0.15;    
  }
  horasExtra (horas) {
    return((this.salario/30)/8)*horas*2;
  }
}
class programador extends Empleado {
  calcularvacaciones() {
    return this.salario * 0.20;    
  }
  horasExtra (horas) {
    return((this.salario/30)/8)*horas*3;
  }
}
class diseñador extends Empleado {
  calcularvacaciones() {
    return this.salario * 0.10;
  }
}  
const progPedro = new programador ("Pedro", 2000);
const diseJuan = new diseñador ("Juan", 1200);
progPedro.trabajar();
disejuan.trabajar();
console.log(progPedro.calcularvacaciones());
console.log(diseJuan.calcularvacaciones());
console.log(progPedro.horasExtra(5));
console.log(diseJuan.horasExtra(4));