//AGREGAR Y ELIMINAR PROPIEDADES DE UN OBJECTO

let persona = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'jhernandez@mail.com',
    edad: 30,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    },
    edadPersona: function () {
        return this.nombre + ' ' + this.apellido + ' ' + 'tiene' + ' ' + this.edad + ' ' + 'años de edad.'
    }
}

//AGREGAR PROPIEDAD AL OBJETO
persona.tel = '2343243358'; //agrega
persona.tel = '48485092'; //Modifica

console.log(persona);

//ELIMINAR PROPIEDADES
delete persona.tel; //elimina
console.log(persona);

/* ----------------------------------------------- */

//IMPRIMIR OBJETOS

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido);


//for in (creo pasa por todos los atributos)
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}


//Object y metodo values
//regresa el objeto pero como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);


//COMO CADENA CON JSON
//convierte el objeto a una cadena
let personaString = JSON.stringify(persona); //stringify convierte cada una de las propiedades en una cadena.
console.log(personaString);