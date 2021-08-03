//EJERCICIO: BUSCAR SI LA VARIABLE CONTIENE UN NUMERO PAR O IMPAR
let a = 10;

if (a % 2 == 0) { //si la variable a dividida entre 2 da un reciduo igual a 0...
    // si la condicion se cumple imprime el mensaje
    console.log("Es un numero PAR");
} else {
    //si no es un numero par, se imprime este mensaje
    console.log("Es un numero IMPAR");
}

/* ------------------------------------------ */
//EJERCICIO: BUSCAR SI UNA PERSONA ES MAYOR DE EDAD

let edad = 20,
    adulto = 18;

if (edad >= adulto) { //si la variable edad es mayor o igual a la variable adulto
    //se imprime el siguiente mensaje
    console.log("Es un adulto");
} else {
    //si no, se imprime el siguiente mensaje
    console.log("Aún es menor de edad");
}