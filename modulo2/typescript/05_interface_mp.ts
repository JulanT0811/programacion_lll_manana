export interface PolizaSeguro {
    id: number;
    titular: string;
    tipoSeguro: string;      // Ej: vida, auto, salud, hogar
    fechaInicio?: string;    // Opcional
    fechaFin?: string;       // Opcional
}
