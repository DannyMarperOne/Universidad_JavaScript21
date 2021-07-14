/* Ejemplos de tipos de dato en JavaScript */

//-----------------Tipo de Dato String
var nombre = "Daniel"; /* cadena de caracteres debe ir entre doble comilla */
console.log(nombre);

/* en javascript las variables pueden cambiar su tipo de dato sin problemas las variables se les conoce como "Variables Dinamicas" */

nombre = 10.5;
console.log(typeof nombre); //para saber el tipo de dato  que contiene una variable se usa el operador "typeof"

//------------------Tipo de dato Numerico
var numero = 100; //Este tipo de dato se escribe sin comillas
console.log(numero);

//------------------Tipo de Dato Object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "23213134445",
};
console.log(objeto);

//------------------Tipo de Dato Boolean (true, false)
var bandera = true;
console.log(typeof bandera);
console.log(bandera);

//------------------Tipo de Dato Function
function miFuncion() {}
console.log(miFuncion);

//------------------Tipo de Dato Symbol
var simbolo = Symbol("Mi Simbolo");
console.log(typeof simbolo);

//------------------Tipo clase (es una function)
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre; //This es para hacer referencia a los atributos de una clase
        this.apellido = apellido;
    }
}

console.log(typeof Persona);
console.log(Persona);

//-----------------Tipo de Dato Undefind
var x;
console.log(x);

x = undefined; //solo se le asigno manualmente el undefined
console.log(x);

//null = ausencia de valor
var y = null;
console.log(y);




/* ----------------ARREGLOS--------------- */
//Arreglo pero un arreglo es de tipo object

var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);
console.log(typeof autos);

//cadena vacia
var z = "";
console.log(z);
console.log(typeof z);