let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}

let password = "pass123";
if (password === "pass123") {
    console.log("Usuario logeado");
}

let nota = "7";
if (nota>= "9"){
    console.log("Sobresaliente");
} else if (nota >= "6"){
    console.log("Aprobado");
} else{
    console.log("Reprobado");
}

let edad = 20;
if (edad >= 18) {
    if(tiene_licencia){
        console.log("Puede conducir");
    } else {
        console.log("Necesita Licencia para conducir");
    }
} else {
    console.log("Es menor de edad ");
}

//escrituta de switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("ultimo dia laboral");
        break;
    default:
        console.log("Dia normal");
}    
let a =30;
let b =40;
let c =50;
mayor=0;
if (a>b){
    mayor=a;
}if (c>b){
    mayor=c;
}
console.log("El numero mayor es", mayor);