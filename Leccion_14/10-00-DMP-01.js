//todo: modo estricto: es principalmente seguir al pie de la letra reglas en la forma de codificar

"use strict"; //todo: pracitamente asi indicamos que va a ser un código de tipo estricto. 
// todo: Ejemplo, en el modo strict si declaramos un variable y no la definimos, al mandarla en consola no se va a imprimir ya que marcara un error


let x = 10; //todo: en stric, solo asi se puede usar la variable, declarandola
//x = 20; //todo: esto no se puede
console.log(x);

// strict en funciones

miFuncion();

function miFuncion() {
    "use strict"
    let y = 15;
    console.log(y);
}


//todo: si se quiere utilizar stric, este se debe declarar o bien dentro de nustra función o al inicio del programa