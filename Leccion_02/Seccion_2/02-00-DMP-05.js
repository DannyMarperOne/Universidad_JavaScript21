/* CONCATENACION DE CADENAS */
var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido; /* asi se concatenan variables */
console.log(nombreCompleto);

var nombreCompleto2 = 'Daniel' + ' ' + 'Martínez'; /* concatenacion de cadenas */
console.log(nombreCompleto2);

var x = nombre + 212 + 7; /* concatenacion de cadena con numero o dos cadenas */
console.log(x);

x = nombre + (2 + 4); /* asi se hace la suma realmente */
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

/* Si dos numeros se encuentran antes de una cadena, estos hacen su operacion matematiaca y se une la cadena despues, en cambio, si primero esta la cadena y despues los numeros, todo se maneja como cadena aunque alla numeros */

x = 2 + 4 + 2; //cuando son tipo numerico todos los parametro entonces no se concatena, se hace la operación
console.log(x);