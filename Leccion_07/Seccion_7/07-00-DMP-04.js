//FUNCIONES SELF INVOKING

/* Este tipo de funciones se mandan a llamar asi mismas */

//DEFINIR FUNCION
(function () {
    console.log("Ejecuntando la funcion");
})();

/* 
    Este tipo de funcion puede tener o no argumentos

    En este caso la funcion solo manda un mensaje a consola pero para que se ejecute, al final de los parentesis debe de llevar otro par de parentesis para que se llame asi mismo la funcion, ya que no tiene algun tipo de nombre la funcion, pues es una funcion anonima que se puede mandar a llamar asi misma.

    este tipo de funcion no se puede reutilizar ya que como no se esta asignando a ninguna variable y tampoco tiene nombre la funcion, asi que solo se manda a llamar la funcion en ese momento y nunca más
*/

//Misma funcion pero con argumentos
(function (a, b) {
    console.log('Ejecuntando la funcion: ' + 'Resultado ' + (a + b));
})(3, 4);