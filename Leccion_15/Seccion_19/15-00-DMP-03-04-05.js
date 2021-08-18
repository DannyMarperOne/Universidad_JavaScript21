//? PROMESAS 2.0

//? Promesa Async
//* indica que una funcion va a regresar siempre una promesa, async simplifica las promesas

async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor)); //todo: esto es una funcion normal solo que utilizamos async para la promesa, pero como es normal es necesario poner la funcion con ()

/* ------------------------------------------------------------------------- */

//? Promesa Async & Await
//! Ojo: await solo puede usarse dentro de una funcion declarada con Async
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await');
    });
    console.log(await miPromesa); //todo: ya no es necesaripo usar then, ya que el await hace esa funcion de recibir el valor
}

//funcionConPromesaYAwait(); //* Llamada de la funcion

/* ------------------------------------------------ */

//? Promesa setTimeout con Async y Await
//! Ojo: await solo puede usarse dentro de una funcion declarada con Async

async function funcionConPromesaAwaitYTimeout() {
    console.log('inicio de funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin de la función (esto es ejemplo para ver el proceso timeout)');
}

funcionConPromesaAwaitYTimeout();