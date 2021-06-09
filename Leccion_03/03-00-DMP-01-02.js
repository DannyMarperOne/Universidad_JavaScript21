/* OPERADORES ARITMETICOS*/
let a = 3,
    b = 2;

//SUMA
let z = a + b;
console.log('El resultado de la suma es:' + ' ' + z);

//RESTA
z = a - b;
console.log('El resultado de la resta es:' + ' ' + z);

//MULTIPLICACIÓN
z = a * b;
console.log('El resultado de la multiplicación es:' + ' ' + z);

//DIVISION
z = a / b;
console.log('El resultado de la division es:' + ' ' + z);

//MODULO o RESIDUO DE LA DIVISION
z = a % b;
console.log('El residuo de la division es:' + ' ' + z);

//EXPONENTE
z = a ** b;
console.log('El resultado del exponente es:' + ' ' + z);

/* ---------------------------------------------------------------- */
/* INCREMENTO Y DECREMENTO */

//INCREMENTO
//Pre-Incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);
/* primero se incrementa el valor a la variable a y despues ese valor se le asigna a la variable z */
//Post-Incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);
/* primero el valor de b se asigna a la variable z y despues se hace el incremento en la variable b */

//DECREMENTO
//Pre-Decremento
z = --a; //aqui el valor de a es 4 porque arriba se hizo una operacion donde le dio ese valor
console.log(a);
console.log(z);
/* el valor de la variable a primero se resta y posteriormente se le asigna ese valor a la variable z */
//Post-Decremento
z = b--; //por las operaciones anteriores, b ahora tiene valor de 3
console.log(b);
console.log(z);
/* el valor de b se asigna primero a la variable z y despues se hace la resta y el resultado se asigna a la variable b */