//PRECEDENCIA DE OPERADORES

//EJEMPLO 1
let x = 5,
    y = 10;
let z = ++x + y--;
console.log(x); //6
console.log(y); //9
console.log(z); //16

/* el resultado es el 16 porque primero como x tiene preincremento entonces a 5 se le suma 1 al principio y da 6, despues se suma mas y que tiene un valor de 10, lo cual da como resultado 16, pero como y tiene un postdecremento, despues de que hace la suma que se pide, entonces se hace el decremento de 1 y da como resultado y = 9 */

//EJEMPLO 2
let resultado = 4 + 5 * 6 / 3; //de izquierda a derecha po prioridad, primero multiplicacion, despues division y a lo ultimo la suma
console.log(resultado); //14

resultado = (4 + 5) * 6 / 3;
console.log(resultado); //18