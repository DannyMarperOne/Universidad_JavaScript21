//PARAMETROS Y ARGUMENTOS


//PARAMETROS: Lista de variables que definimos en una funcion (A,B)
//ARGUMENTOS: Son los valores que pasamos cuando mandamos a llamar una funcion (1,2)


//Declaracion de funcion de tipo expresion
let sumar = function (a = 4, b = 5) { //4 y 5 es el valor de las variables por defecto, pero si agregan valores a los argumentos, estas se sobreescriben y no se toman en cuenta 4 y 5
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar(5, 2, 8); //se puede agregar mas argumentos aunque no haya mas variables, solo que para imprimirla no se podria usar una variable, si se podria pero eligiendo la posision del argumento dentro de la funcion
console.log(resultado);

/* --------------------------------------------- */