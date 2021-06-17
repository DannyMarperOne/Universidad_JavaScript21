//PROPIEDADES OBJECTS

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
//FORMAS DE ACCEDER A LAS PROPIEDADES

//Forma 1 (Sencilla)
console.log(persona.apellido);

//Forma 2 (Como arreglo)
console.log(persona['nombre']);

//Forma 3 (FOR IN)

//FOR IN (Recorre todas las propiedades del objeto)

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}