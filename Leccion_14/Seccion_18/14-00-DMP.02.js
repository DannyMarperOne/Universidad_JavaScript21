//? Funcion SetTimeOut

//? Llamadas asincronas con uso de la funcion setTimeOut

function miFuncionCallback() {
    console.log('Saludo asincrono despues de 3 Segundos');
}

setTimeout(miFuncionCallback, 3000); //!despues de 3 segundos se ejecutara
//funcicion (funcionCallback, tiempo para ejecucion en milisegundos)

//* setTimeout puede recibir solo el nombre de la funcion o toda la funcion
setTimeout(function () { console.log('Saludo asincrono 2, despues de 4 Segundos'); }, 4000); //!despues de 4 segundos se ejecutara

//* setTimeout con FUNCIONES FLECHA
setTimeout(() => console.log('Saludo Asincrono 3, despues de 6 segundos'), 6000); //!despues de 6 segundos se ejecutara



//*Aqui el flujo de trabajo ya no es secuencial como normalmente es, que se va imprimiendo por la posicion de la linea de codigo, si la linea hola1 y hola2, primero esta colocada la linea hola2 y despues hola1, entonces asi se ira imprimiendo, en este caso no, ya que se ejecutara en el tiempo que nosotros allamos indicado