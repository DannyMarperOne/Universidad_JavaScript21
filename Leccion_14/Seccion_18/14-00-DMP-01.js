//? Callback o Funciones de tipo callback

//? En si callback es crear una funcion y que esta funcion tenga como parametro otra funcion, para posteriormente hacer uso de ese atributo que en si es una funcion

function miFuncion1() {
    console.log('Funcion 1');
}
function miFuncion2() {
    console.log('Funcion 2');
}

miFuncion1();
miFuncion2();

// todo: Uso Funcion de tipo callback
//let imp = function imprimir(mensaje) //! lo mismo pero con variable funcion
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}
sumar(5, 3, imprimir);

/*
*Explicación:

*primero creamos la funcion imprimir con el atributo mensaje, esta funcion va imprimir lo que reciba el atributo mensaje.

*Segundo: creamos otra funcion, la cual se llamó sumar, esta funcion cuenta con los atributos op1, op2 y funcionCallback, dentro de la funcion se realizara la operacion de suma del op1 y el op2, y el resultado de la operacion se mostrara en el atributo funcionCallback, el cual tendra un mensaje y mandara a llamar a la variable donde está almacenado el resultado.

*Final: Entonces, se mandara a llamar a la funcion llamada sumar, se le daran los atributos correspondientes, en este caso 5, 3 y la funcion imprimir (esta funcion solo imprime un mensaje), entonces 5 + 3 es igual a 8 y esto se almacena en la variable res, entonces el atributo funcionCallback en si tiene adentro la funcion imprimir, osea que todo lo que esta en atributo funcionCallback se va redirigir a la funcion imprimir, la parte de (`Resultado: ${res}`) se entiende que sera el lo que obtendra el atributo mensaje de la funcion imprimir, y la funcion imprimir lo que hace es mandar a consola o imprimir lo del atributo mensjase, por lo cual el resultado final del programa es: Resultado: 8.

*Asi funciona callback, se usa una funcion como atributo dentro de otra funcion

!Los procesos con callback son conocidos como procesos asincronos, porque mientras se esta ejecutando una funcion se puede estar ejecutando la otra tambien sin problemas
*/