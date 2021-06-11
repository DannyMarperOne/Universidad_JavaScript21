//CICLOS 

//CICLO WHILE
let contador = 0; //esta variable contador permitira terminar el ciclo en cierto momento

while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin Ciclo While");

/* EXPLICACIÓN: la variable contador comienza en 0 y la condicion dice 0 < 3, como si lo es entonces imprime 0 y despues a la variable contador se le suma uno por e incremento que tiene la variable, despues pregunta el programa (ojo aqui ya se incremento contador y ahora vale 1), 1 < 3, como si es menor a 3 se repite el programa y se incrementa en 1 la variable contador, ahora valdria dos, asi sucesivamente. cuando la variable contador valga 3, el ciclo terminara ya que 3 no es menos a 3 y ahi termina el programa*/

/* -------------------------------- */

//CICLO DO WHILE

contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 3);

console.log("Fin Ciclo Do While");

/* Explicacion: la variable contador se inicializa en 0 despues inicia el el ciclo do while, primero do, que seria hacer, realiza lo que dice el codigo imprime la variable contador que en ese momento vale 0, despues hace un incremento de uno, a lo ultimo compara si contador es menor a 3 (ojo aqui el contador ya vale 1 porque se hizo el incremento), despues se repite, se imprime contador y imprime 1, despues se hace el incremento y ahora contador vale dos, despues se hace la comparacion 2 < 3, como se cumple se repite, imprime 2, despues se hace el incremento y aqui contador ya vale 3, por lo cual despues se hace la comparacion 3 < 3, no es menor y aqui termina el ciclo do while */

/* -------------------------------------- */

//CICLO FOR

//En el ciclo for en necesario siempre incrementar o decrementar

for (let contador1 = 0; contador1 < 3; contador1++) {
    //variables; condicion; decremnto o decremento
    console.log(contador1);
}
console.log("Fin del ciclo FOR")

