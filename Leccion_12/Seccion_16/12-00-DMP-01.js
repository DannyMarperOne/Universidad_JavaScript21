//? MANEJO DE ERRORES o EXCEPCIONES

"use strict" //modo estricto

//todo: en JS cuando estamos en modo estricto, si nos sale un error, las lineas siguientes del programa ya no se ejecutan

try {
    // x = 10;
    miFuncion();
} catch (error) {
    console.log(error);
    //todo: si se arroja un error catch lo va a recibir como parametro en el bloque de forma automatica
} finally {
    console.log('Termina la revision de errores');
} //todo: el finally no es tan necesario pero en caso de usarlo este bloque de odigo siempre se ejecuta despues del try catch, se encuentre error o no





//todo: cuando hay un try catch para revisar un error y lo detecta, las demas lineas que siguen del codigo si se ejecutan
console.log('continuamos......');