//METODO APPLY

//FUNCIONA PARECIDO AL METODO CALL, SOLO CAMBIA AL MOMENTO DE PASAR LOS PARAMETROS(CREO)

let persona1 = {
    nombre: 'Daniel',
    apellido: 'Martinez',
    nombreCompleto: function (titulo, tel) { //definimos un metodo
        //return this.nombre + ' ' + this.apellido;
        return titulo + ' : ' + this.nombre + ' ' + this.apellido + ' , ' + tel;
    }
}

let persona2 = {
    nombre: 'Paulina',
    apellido: 'Ines'
}


console.log(persona1.nombreCompleto());

//USO DE APPLY (nos ayuda a mandar a llamar un metodo en un objeto que no tiene definido cierto metodo)
console.log(persona1.nombreCompleto('Lic', '234234'));

let arreglo = ['Ing', '43543534'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

//HolaBuenos días bueno apply se ocupa prácticamente igual a la llamada Call pero en este caso para pasar los parámetros se puede usarlo que son los arreglos como en la línea 25 creamos un arreglo con los argumentos del método que se crearon dentro del objeto persona1, Sólo que aquí es necesario imprimir en consola persona1 que trae los elementos de su objeto con el metodo nombre completo que está en este objeto y esto se va a aplicar al objeto persona dos más el arreglo

//se puede usar apply de las dos formas en las que se muestran en la parte de arriba