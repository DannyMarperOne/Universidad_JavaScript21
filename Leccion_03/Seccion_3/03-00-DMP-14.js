/* VERIFICAR QUE UNA VARIABLE SEA DE TIPO NUMBER*/

let miNumero = "18x";
let edad = Number(miNumero); //la funcion Number permite convertir un dato de tipo string a tipo number, pero en este caso no se podra hacer la conversion ya que el numero tiene mas caracteres
console.log(edad); //NaN o Not a Number

if (isNaN(edad)) { //pregunta si la variable edad no es un numero, en caso de que no sea un numero imprimira el siguiente mensaje
    console.log("No es un numero");
} else {
    //pero si si es un numero entonces ejecutara el siguiente codigo
    if (edad >= 18) {
        console.log("Esta persona puede votar");
    } else {
        console.log("Esta persona es menor de edad y no puede votar aún");
    };
};

/* -------------------- */

//EJEMPLO DE ARRIBA PERO CON OPERADOR TERNARIO
if (isNaN(edad)) { //pregunta si la variable edad no es un numero, en caso de que no sea un numero imprimira el siguiente mensaje
    console.log("No es un numero");
} else {
    let mayorEdad = (edad >= 18) ? "Esta persona puede votar" : "Esta persona es menor de edad y no puede votar aún";
    console.log(mayorEdad);
};