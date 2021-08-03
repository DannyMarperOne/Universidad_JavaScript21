//? CLAUSULA THROW
'use strict'
let resultado = -1;

try {
    if (isNaN(resultado)) throw 'No es un número'; //todo: Con Throw nosostros generamos o reportamos un error y se imprimira el mensaje
    else if (resultado === '') throw 'Es cadena vacía';
    else if (resultado >= 0) throw 'Valor positivo';
    else if (resultado < 0) throw 'Valor negativo';
} catch (error) {
    console.log(error);
    //console.log(error.name); //todo: indica el nombre del error
    //console.log(error.message); //todo: muestra el mensaje del error
} finally {
    console.log('Termina revisión de errores');
}