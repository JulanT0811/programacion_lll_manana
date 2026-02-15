try{
    console.log(variableNoDelcarada);
}catch(error){
    console.log("mensaje de error: ", error.message);
}

try{
    console.log("Inetentar abrir un archivo");
    throw new Error ("Archivo no encontrado");
}catch(error){
    console.log("mensaje de error: ", error.message);
}finally{
    console.log("Finalizando intento de abrir archivoj");
}