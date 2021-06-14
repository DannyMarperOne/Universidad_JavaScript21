//FUNCIONES TIPO FLECHA

//Declaracion de funcion de tipo expresion
let sumar = function (a, b) { return a + b };

resultado = sumar(1, 2);
console.log(resultado);

/* --------------------------------------------- */

//Funcion tipo flecha

/* En la funcion de tipo flecha ya no es necesario usar la parabra function, tampoco usar corchetes ya que se usa la flecha y tampoco es necesario usar el return por el uso del operador flecha */

const sumarFuncionTipoFlecha = (a, b) => a + b;//=> ese es el operador de flecha e indica que acontinuacion se va a definir el cuerpo de la funsion

resultado = sumarFuncionTipoFlecha(2, 5);
console.log(resultado);

/* ----------------------------------------- */

//PARAMETROS: Lista de variables que definimos en una funcion
//ARGUMENTOS: Son los valores que pasamos cuando mandamos a llamar una funcion
