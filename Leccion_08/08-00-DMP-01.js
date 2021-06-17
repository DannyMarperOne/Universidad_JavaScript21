//OBJETOS

//ASI SE DEFINE UN OBJETO
let persona = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'jhernandez@mail.com',
    edad: 30
}
/* despues del = se crea un objeto en memoria con las propiedades de nombre, apellido, email y edad y a este objeto se le asigna una referencia con valor exadecimal por ejemplo 0x333, entonces esta referencia en memoria es la que se le asigna a la variable de persona
eso quiere decir que con la variable persona podemos acceder a cada una de las propiedades del objeto */

//Para acceder a las propiedades
//el punto es para acceder a las propiedades
console.log(persona.nombre);
console.log(persona.edad);

console.log(persona);