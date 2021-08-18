//?  PROMESAS : Una promesa es código que tiene varios estados
/* -------------------------------------------------------------------- */

//? Promesa
//! SINTAXIS DE PROMESA

let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
});


//todo: Mandar a llamar la Promesa

//! los fos codigos son iguales solo que son diferentes formar de declarar

//* Con then
//todo: mandamos a llamar la promesa declaramos dos funciones flecha como argumentos (cada uno se adigna a resolver y rechazar)
// miPromesa.then(valor => console.log(valor),error => console.log(error));
//* Con then y catch
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

/* ------------------------------------------------------------------------------------ */

//? Funcion setTimeout y Promesas

//todo: en las promesas se puede usar solo un parametro, no es necesario que se pongan obligatoriamente los dos

let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout(() => resolver('saludos con promesa y Timeout'), 3000);
    //todo: recuerda la funcion setTimeout recibe una funcion callback (Timeout recibe una funcion nueva que a su vez es funcion recibe la funcion resolver)
    console.log('fin de la promesa');
});

promesa.then(valor => console.log(valor)); //todo: solo se pone then porque no estamos procesando el error

