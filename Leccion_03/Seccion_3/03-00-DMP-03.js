/* PRESEDENCIA DE OPERADORES (conceptos basicos) */

let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c;
console.log(z);
//la operacion se realiza de izquierda a derecha tomando como primer valor el de la variable z

z = c + a * b;
console.log(z);
//la operación se realiza de izquierda a derecha, pero como las multiplicaciones tienen mayor gerarquiea, primero se hace la multiplicación y posteriormente la suma

z = a * b + c / d;
console.log(z);
//primero se hace la multiplicacion, despues la división y a lo ultimo la suma (de izquierda a derecha de manera jeraquica)

z = c + a * b / d;
console.log(z);
//primero se hace la multiplicacion, despues la división y a lo ultimo la suma

z =  (c + a) * b / d;
console.log(z);
//primero se hace la suma, ya que por jerarquia primero se hacen las operaciones que estan dentro de parentesis, posteriormente se hace la multiplicación y a lo ultimo la division