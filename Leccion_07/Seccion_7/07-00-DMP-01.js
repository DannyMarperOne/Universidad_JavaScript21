//FUNCIONES 

/* Funciones es lo mismo que metodos */

/* En general es un codigo reutilizable y se puede mandar a llamar cuantas veces querramos (una funcion practicamente hace tareas) */

//miFuncion es el nombre de la funcion a y b son los argumentos de la funcion, puede llevar solo un argumento o mas pero separados por coma

//HOISTING
miFuncion(1, 2); //esto se le llama hoisting, ya que se puede mandar a llamar la funcion antes de declararla

//DECLARACION DE LA FUNCION
function miFuncion(a, b) {
    console.log("Suma: " + (a + b)); //para que a mas b se sumen y no se concatentenen deben ir dentro de parentesis
}
//Se manda a LLAMAR la funcion
miFuncion(2, 3); //se pasan los argumentos, en este caso los valoreS que deseamos, a sera 2 y b seria 3 y se haria la suma que seria 5

miFuncion(4, 9);