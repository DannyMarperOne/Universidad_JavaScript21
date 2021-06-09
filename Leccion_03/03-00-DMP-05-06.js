/* OPERADORES DE COMPARACIÓN */

let a = 3,
    b = 2,
    c = "3";
//Operador de comparacion de igual a igual
let z = a == b; //se revisa valor sin importar el tipo, puede comparar numeros y cadenas
console.log(z); //false
z = a == c; //se revisa valor sin importar el tipo, puede comparar numeros y cadenas
console.log(z); //true

//Operador de comparacion de igualdad estricto
z = a === c; //revisa si los valores son iguales pero tambien revisa el tipo
console.log(z); //false

/* --------------------------------------------- */
/* let a = 3,
    b = 2,
    c = "3"; 
    (referencia de la variables de arriba)
    */

//Operador de distinto valor o de diferente
z = a != b; //revisa si los valores son iguales pero tambien revisa el tipo
console.log(z); //true
z = 2 != 2; //revisa si los valores son iguales pero tambien revisa el tipo
console.log(z);
z = a != c; //revisa si los valores son iguales pero tambien revisa el tipo
console.log(z);

//Operador de distinto valor o de diferente "estricto"
z = a !== b; //se revisa valor sin importar el tipo, puede comparar numeros y cadenas
console.log(z); //true
z = a !== c; //se revisa valor sin importar el tipo, puede comparar numeros y cadenas
console.log(z);