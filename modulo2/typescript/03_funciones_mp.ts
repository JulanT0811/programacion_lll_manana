// función básica
function generarSaludoCliente(nombre?: string): string {
    return `Bienvenido cliente ${nombre}, su póliza está en proceso.`;
}
console.log( generarSaludoCliente('Francisco') );

// función flecha
const calcularPrimaTotal = (primaBase: number, impuestos: number): number => {
    return primaBase + impuestos;
}
console.log( calcularPrimaTotal(300, 45) );

function mostrarMensajeSistema(): void {
    console.log('Sistema de Gestión de Pólizas');
    console.log('Operación realizada correctamente');  
}

mostrarMensajeSistema();

function calcularValorPoliza(capitalAsegurado: number): number {
    return capitalAsegurado * 0.08; // 8% de costo de póliza
}

function calcularValorPolizaVoid(capitalAsegurado: number): void {
    console.log(capitalAsegurado * 0.08);
}

console.log( calcularValorPoliza(50000) );
calcularValorPolizaVoid(80000);
