class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarElegibilidad() {
        if (this.edad >= 18) {
            console.log("El cliente es elegible para contratar una póliza de seguros.");
        } else {
            console.log("El cliente no cumple la edad mínima para contratar una póliza.");
        }
    }

    mostrarDatos() {
        console.log("Nombre del cliente:", this.nombre, "- Edad:", this.edad);
    }
}

const cliente1 = new Cliente("Carlos López", 17);
cliente1.verificarElegibilidad();
cliente1.mostrarDatos();
