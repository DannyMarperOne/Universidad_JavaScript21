//VARIABLES
nombre = 'juan'; /* en javascript se puede declarar una variable sin necesidad de utilizar una palabra reservada (pero no es una buena practica) */
console.log(nombre);
//
//let nombre1 = 'juan'; /* para declarar variable se puede usar var o let, es mas recomendado let */

let nombre0;
nombre0 = "Juan";
console.log(nombre0);

//CONSTANTES
const apellido = "Perez"; /* una constante no se puede cambiar su valor */


//BUENAS PRACTICAS PARA DECLARAR VARIABLES
let nombreCompleto = 'Juan Perez'; /* notacion de altas y bajas (mayusculas y minusculas)*/
console.log(nombreCompleto);

/* se puede declarar las variables antes y despues darles valor */
let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

//
let nombreCompleto1 = 'Juan N';
let nombrecompleto1 = 'Paulina M';
console.log(nombreCompleto1 + ' ' + nombrecompleto1);

/* Regla, una variable no puede comenzar utilizando numero como por ejemplo 1danny, eso no se podria, si se podria inicia con los siguientes caracteres: _ y $*/

let asDanny;
let _AsDanny;
let $AsDanny;
//let 1aDanny; esto no esta permitido por JavaScript