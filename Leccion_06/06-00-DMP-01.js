//ARREGLOS O ARRAYS

//ESTA ES UNA FORMA DE DECLARAR ARREGLOS
//let autos = new Array('BMW', 'MERCEDEZ BENZ', 'FERRARI'); 

//ESTA ES LA FORMA COMO SE DECLARA ARREGLOS ACTUALMENTE
const autos = ['BMW', 'MERCEDEZ BENZ', 'FERRARI'];
console.log(autos);

/* ------------------------------------------------------------------ */
//ACCEDER A LOS ELEMENTOS DE UN ARREGLO

/* 
    Ojo, en javascript para acceder a los elemntos se eligen empezando de 0 a infinito 

    por ejemplo si quiero elegir BMW se comolocaria el indice 0, di quiero FERRARI sera colocar el indice 2, si quiero elegir Mercedez Benz seria el indice 1
*/

console.log(autos[0]);
console.log(autos[2]);
console.log(autos[1]);

/* PARA PASAR POR TODOS LOS ELEMENTOS A TRAVES DE UN CICLO FOR */

//length propociona el largo o la cantidad de elementos que tiene el arreglo

for (let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]);
}

/* Explicacion
    Se declara i y se inicializa en 0, condicion, si i es menor a la cantidad de elementos que se encuentran dentro de el arreglo autos, postincremento.

    despues imprime la constante autos que es un arreglo, pasa por el primer ciclo y imprime el primer elemento despues hace el ciclo y imprime el segundo y despues el tercer. Como ya no hay mas elementos en el arreglo, entonces termina el ciclo for
*/

/* ------------------------------------------------------------------ */

//MODIFICAR ELEMENTOS DE UN ARREGLO 

//para modificar se pide la constante y se señala el indice que se quiere modificar, despues solo se asigna el nuevo valor
autos[1] = 'MCLAREN';
console.log(autos[1]);

/* ----------------------------------------------------------------------- */

//AGREGAR ELEMENTOS DE UN ARREGLO 

//push es una funcion que permite agregar nuevos valores a un arreglo (siempre se agragan al final del arreglo)
autos.push('NISSAN');
console.log(autos);
console.log(autos[3]);


/* ------------------------------------------------------- */

//OTRA FORMA PARA AGREGAR ELEMENTOS A UN ARREGLO 
/* 
    Hay que tener cuidado con esta forma, ya que la cantidad de elementos no es la misma cantidad de indices, ya que los indices empiezan a contarse de 0, y los elemento empiezan a contarse de 1
    */
console.log(autos);
console.log(autos.length);

autos[autos.length] = 'TOYOTA';
console.log(autos);

/* ------------------------------------------------------------------------------ */

//PREGUNTAR SI ES UN ARREGLO

console.log(typeof autos)

//asi se pregunta si es un arreglo, con la clase Array y el metodo isArray
console.log(Array.isArray(autos));

/*
    otra forma de preguntar si es un arreglo es la siguiente 
    esto pregunta, si la variable autos es una instancia de tipo arreglo
*/
console.log(autos instanceof Array);