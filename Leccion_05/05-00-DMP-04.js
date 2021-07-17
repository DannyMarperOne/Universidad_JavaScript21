//BREAK
//la palabra break se utiliza para romper un ciclo

//EJERCICIO: numeros pares de 0 a 10

for (let contador = 1; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break;
    }
}
console.log("Fin del Ciclo FOR")

/* Explicación;
    Se declara el ciclo for, la variable contador se incializa en 0, la condicion es que la variable contador debe ser menor o igual a 10, cada iteracion se ira incrementando la variable contador en uno. (En este caso si se imprimiera daria como resultado numeros del 0 al 10).

    Se inicia un IF, si la division de contador entre 2 da como resultado un residuo de 0, entonces imprime contador (en este caso se imprimirian unicamente numeros pares 0,2,4,6,8,10)

    Pero como despues de imprimirse el resultado, se declaro un break, esto hace que el ciclo no continue y ahi se rompa el ciclo, dando como resultado unicamente el resultado del primer ciclo que es 0
*/

/* ------------------------------------------ */
//EJERCICIO: numero pares de 0 a 10 pero con el ciclo DO WHILE
contador1 = 5;

do {
    console.log(contador1);
    if (contador1 % 2 == 0) {
        console.log(contador1);
        break;
    }
    contador1++;
} while (contador1 <= 10);

console.log("Fin Ciclo Do While");