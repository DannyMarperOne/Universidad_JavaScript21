//OPERADORES LOGICOS

//Ejemplo AND (&&), regresa true solo si ambos operandos son true

let a = 5;
let valMin = 0,
    valMax = 10;

if (a >= valMin && a <= valMax) { //si la variable a es mayoy o igual al valor minimo y tambien es menor o igual al valor maximo
    //se imprime el siguiente mensaje
    console.log("Dentro del Rango");
} else {
    //sino, se imprime el siguiente mensaje
    console.log("Fuera del Rango");
}

/* --------------------------------- */

//Ejemplo OR (||), regresa true si alguno de los operandos es true

//si un padre puede asistir al juego del hijo y podra ir solo si tiene dia de descanso o si tiene vacaciones
let vacaciones = false,
    diaDescanso = true;

if (vacaciones || diaDescanso) { //si el papa tiene vacaciones o un dia de descanso 
    //se imprime el siguiente mensaje
    console.log("El papá puede ir al juego");
} else {
    //sino, se imprime el siguiente mensaje
    console.log("El papá está ocupado y no puede ir al juego");
}