//? FUNCIONES FLECHA

//todo: funcion anonima ya que se le asigna a una varibale
let miFuncion = function () { //aqui la funcion se le asigno a una variable
    console.log('saludos desde mi función');
}

//todo: FUNCION FLECHA =>
//const o let  NombredelaFuncion  = (ARGUMENTOS O NO) => {CONTENIDO}
// const miFuncionFlecha = () => {
//     console.log('saludos desde mi función flecha');
// }

//! Ojo, si la funcion flecha se utiliza en una sola linea de codigo, no es necesario abrir {} para el curpo, solo se coloca el contenido delante de la flecha

//todo: Funcion Simplificada
//const miFuncionFlecha = () => console.log('saludos desde mi función flecha');

//! OJO, en funciones flecha no es posible usar el concepto de HOISTING (llamar una funcion antes de ser declarada)
//miFuncionFlecha();

//? Funcion flecha regresando valores

// const saludar = () => {
//     return 'Saludos Perrillos con la Arrow';
// }

//todo: Funcion Simplificada
const saludar = () => 'Hola perrillos';

console.log(saludar());

//------------------

//! para regresar objetos es necesario utilizar {} como normalmente se usa, pero en la funcion flecha simplificada esto puede llegar a confundirse con el cuerpo de la funcion, por lo cual es necesario poner al objeto entre () y despues colocarlo adrentro de estos con sus respectivas {}
const regresaObjeto = () => ({ nombre: 'juan', apellido: 'Perez', edad: 24 + ' años' });
console.log(regresaObjeto());


//*FUNCION CLASICA
const funcionConParametroClasico = function (mensaje) {
    console.log(mensaje);
}
funcionConParametroClasico('Hola Clasica');

//*FUNCION CON FLECHA

//todo: si solo tenemos un parametro en la funcion flecha, podemos omitir los parentesis
//const funcionConParametro = (mensaje) => console.log(mensaje);
const funcionConParametro = mensaje => console.log(mensaje);
funcionConParametro('Hola');

/* ------------------------------------------------- */

//*suma de dos elementos
//const funcionConParametrosSuma = (op1, op2) => op1 + op2;

//*suma de dos elementos con cuerpo (a este se le puede agregar mas codigo)
const funcionConParametrosSumaCuerpo = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConParametrosSumaCuerpo(3, 5));
