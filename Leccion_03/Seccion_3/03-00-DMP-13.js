/* CONVERTIR DE STRING A TIPO NUMERO */

let miNumero = "18";

//console.log(typeof miNumero);

let edad = Number(miNumero); //la funcion Number permite convertir un dato de tipo string a tipo number

//console.log(typeof edad);

if (edad >= 18) {
    console.log("Esta persona puede votar");
} else {
    console.log("Esta persona es menor de edad y no puede votar aún");
};

/* -------------------- */
//EJEMPLO DE ARRIBA PERO CON OPERADOR TERNARIO
let mayorEdad = (edad >= 18) ? "Esta persona puede votar" : "Esta persona es menor de edad y no puede votar aún";

console.log(mayorEdad);