//CONTINUE

//Ejercicio: Numeros pares de 0 a 10
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue; //Ir a la siguiente iteración
    }
    console.log(contador);
}

/* EXPLICACIÓN:
    normal, se declara for con su variable, condicion y incremento.

    se declara un if en el cual dice si, contador dividido entre 2 da un reciduo diferente de 0 entonces es un IMPAR
    
    "Los numero que son impares no se imprimen"
   
    despues se declara un "continue" que es para que si resulta un impar, entonces se siga con la siguiente iteración

    En cambio si contador dividido entre 2 no da un reciduo diferente de 0 entonces es un PAR.

    como ese numero es un par, no se cumple la sentencia por lo cual no pasa a traves de "continue", salta hacia afuera del if, y ahi hay un codigo console.log(contador), en ese caso se imprime contador con los numeros pares.
*/