//ETIQUETAS o LABEL
iniciar: //asi se declara una etiqueta y esta sirve para ir a alguna parte del programa que nosotros deseemos.

    for (let contador = 0; contador <= 10; contador++) {
        if (contador % 2 !== 0) {
            continue iniciar; //aqui decimos que cuando llegue continue entonces iremos a donde se encuentre la etiqueda de iniciar y vulvera a hacer el ciclo

            //break iniciar; //aqui indicamos que este es el ciclo que va a romper osea el ciclo que esta despues de la etiqueta iniciar (aqui rompe el ciclo y nos manda a la etiqueta iniciar)
        }
        console.log(contador);
    }