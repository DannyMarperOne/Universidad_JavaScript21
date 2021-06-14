//PASO POR VALOR Y PASO POR REFERENCIA

//PASO POR VALOR
/* Valores de Tipo primitivos */
//se conoce como valor primitivo porque no tiene ni propiedades ni metodos, ni se les puede asignar uno

let x = 10;

function cambiarValor(a) {
    a = 20;
    //console.log(a); 20
    return;
}

//PASO POR VALOR
cambiarValor(x); //10
console.log(x);


/* 
    En general solo se hace una copia del valor de la variable x

    Primero se declara una variable x que se inicializa en 10

    Posteriormente se declaró una funcion La cual se llama cambiarValor que tiene un argumento de a 
    
    ahora se intentara cambiar el valor de 10 a 20

    dentro de las llaves  de la funcion se coloco el argumento "a" y se le dio el valor de 20, ahí termina la función 

    Posteriormente fuera de la función se mandó a llamar la función cambiarValor, se le asignó el valor de la variable x, osea que se le esta pasando el valor de 10 y ya por último se mandó a imprimir el valor de la varibable x para saber su valor final, el cual es 10

    Explicacion final

    El valor de la variable X se le asignó a la variable a entonces ahora a vale 10, después en la funciónas se cambia al valor de 20 y entonces, ahora a vale 20, pero en ningún momento se cambió el valor de x, únicamentese asignó su valor a la variable a pero esta variable x no sufrió ningún cambio por lo cual x sigue valiendo 10 y a ahora vale 20

    Paso por valor, en este caso no podemos modificar el valor de una variable, solo se puede asignar una copia de ese valor
*/

/* ---------------------------------------------- */


//PASO POR REFERENCIA

//Este es un objeto y este si puede tener metodos y propiedades
const persona = { //la variable persona guarda una referencia a un objeto
    nombre: 'Daniel',
    apellido: 'Martinez'
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Fidencio';
    p1.apellido = 'Ocampo';
    // console.log(p1);
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);


/* 
    EXPLICACION

    Se declaro una constante llamada persona, la cual es son objeto que tiene nombre Juan y apellido Pérez, estos son los valores iniciales de la variable

    se creo una funcion llamada cambiarValorObjeto con el argumento p1, dentro de las llaves estara la sintaxis 
    p1.nombre = 'Fidencio'; 
    p1.apellido = 'Ocampo';
    termina la funcion

    Ahora para el paso por referencia se manda llamar la variable cambiarValorObjeto en la cual tendrá como argumento la variable persona, los valores de la variable se asignarán a p1 por lo cual se puede acceder a los mismos atributos de la variable persona, asi se podra cambiar el atributo nombre y apellido, para cambiar el nombre se pone p1.nombre y se cambiara a fidencio, posteriormente p1.apellido y se cambiara a Ocampo y asi se cambiara el nombre y el apellido a la variable persona

    ya por ultimo se manda a imprimir la variable persona.

    paso por referencia, persona paso la referencia del objeto al argumento p1 y asi se pudo tener acceso a los atributos de persona
*/