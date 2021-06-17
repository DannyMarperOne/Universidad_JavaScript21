//METODOS DENTRO DE LOS OBJETOS

//ASI SE DEFINE UN OBJETO
//para agregar un uevo metodo es similar a agregar una propiedad.
let persona = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'jhernandez@mail.com',
    edad: 30,
    nombreCompleto: function () { //metodo o Funcion de tipo expresion
        return this.nombre + ' ' + this.apellido;
        //This es una variable que apunta al objeto en el que se está trabajando en ese momento, es decir, con this se accede a las propiedades pero desde dentro del objeto
    },
    edadPersona: function(){
        return this.nombre + ' ' + this.apellido + ' ' + 'tiene' + ' ' + this.edad + ' ' + 'años de edad.'
    }
}

//asi se imprime cuando es una funcion 
console.log(persona.nombreCompleto());
console.log(persona.edadPersona());



console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);