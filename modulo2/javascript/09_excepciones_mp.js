try {
    console.log(polizaNoRegistrada);
} catch (error) {
    console.log("Mensaje de error:", error.message);
}

try {
    console.log("Intentar abrir el archivo de pólizas");
    throw new Error("Archivo de pólizas no encontrado");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de abrir archivo de pólizas");
}
