//FUNCIONES COMO OBJETOS

//FUNCION O METODO ES LO MISMO

//Declaración de la función
function miFuncion(a, b) {
    //arguments sirve para ver cuantos argumentos tiene mi funcion(solo se usa dentro de la funcion), arguments muestra que las funciones tambien son objetos
    console.log(arguments.length);
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

console.log(typeof miFuncion);

var miFuncion = miFuncion.toString(); //este metodo toString convierte la funcion a cadena de texto, eso sifnifica que las funciones tambien son OBJETOS