//EJERCICIO SUMAR ARGUMENTOS 
let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado); //41


function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //suma = suma + argument[i]
    }
    return suma;

}

/* 
    EXPLICACIÓN:

    se declara una variable resultado y se inicializa con la funcion sumarTodo(5, 4, 13, 10, 9),estos estan guardados en el arreglo de argumentos que a su ves es una propiedad de la funcion.
    
    despues se imprime la variable resultado, pero no se imprimira hasta que se declare la funcion.

    Se crea la funcion sumarTodo, pero sin parametros,se utilizara el metodo arguments para acceder a todos los argumentos que se pasaron a la funcion, se abren llaves y se crea la variable suma y se inicializa en 0, despues se crea un ciclo for para iterar todos los valores del arreglo de argumentos, en el ciclo for se declarara la variable i de incremento y se inicializara en 0, despues la condicon que dice: vamos a iterar desde la variable i hasta arguments.legthn(es decir se van a recorrer todos lo elementos que contenga el arreglo de argumentos ), despues se incrementara i para que se recorra a travez de cada uno de los argumenros del arreglo.

    se abren llaves, ahora se va acceder a cada uno de los elemntos del arreglo de argumentos utilizando la variable de contador i, para esto se coloca la variable de argumentos que es un arreglo, y entre corchetes se agregara la variable indice i, ya que i aumentara en uno cada ciclo pasando por cada uno de los argumentos, y para que se sume el valor del argumento en cuestion con todos los demas es necesario poner la variable de suma de la siguiente manera 
    
    suma += arguments[i]; eso es qeuivalente a suma = suma + argument[i]

    finalmente se regresa el valor de la variable suma con return suma;

*/