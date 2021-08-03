//RETURN

/* //Hoisting
miFuncion(4, 2); */

//Declaración de la función
function miFuncion(a, b) {
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

/* 
    Explicacion del codigo con Return

    Primero se declara la funcion y se agrega un return, para que regrese los argumentos a + b, posteriormente se declara una variable llamada resultado en la cual se asigna la funcion con los valores que se quiere que tengan a y b, en este caso 2 y 3, esos valores se mandan a llamar a la funcion y se le asignan a los argumento a y b ,despues se realiza la suma de los valores y por ultimo a la variable resultado le asigna lo que resulto de la suma que es 5
*/


/*---------------------------------------------------------*/

//FUNCIONES DE TIPO EXPRESION


/* Las funciones tambien se pueden asiganar a una variable y asi evitar ponerle nombre a una funcion, esto se llama funciones de tipo expresion */

//DECLARACION DE UNA FUNCION DE TIPO EXPRESION
let sumar = function (a, b) {
    return a + b
}

//SE MANDA A LLAMAR LA FUNCION SOLO CON EL NOMBRE DE LA VARIABLE
resultado1 = sumar(1, 2);
console.log(resultado1);