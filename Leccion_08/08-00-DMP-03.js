//OTRA FORMA DE CREAR OBJETOS

//ASI SE DEFINE UN OBJETO (FORMA 1)
let persona = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'jhernandez@mail.com',
    edad: 30,
    nombreCompleto: function () { //metodo o Funcion de tipo expresion
        return this.nombre + ' ' + this.apellido;
        //This es una variable que apunta al objeto en el que se está trabajando en ese momento, es decir, con this se accede a las propiedades pero desde dentro del objeto
    },
    edadPersona: function () {
        return this.nombre + ' ' + this.apellido + ' ' + 'tiene' + ' ' + this.edad + ' ' + 'años de edad.'
    }
}

//asi se imprime cuando es una funcion 
console.log(persona.nombreCompleto());
console.log(persona.edadPersona());
//..............................
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);


/* ------------------------------------------------ */

//ASI SE DEFINE UN OBJETO (FORMA 2)

//aqui indicamos que se va a crear un objeto nuevo en un nuevo espacio de memoria pero vacio
let persona2 = new Object();
//posteriormente a ese objeto se le comienzan a asignar propiedades
persona2.nombre = 'Carlos';
persona2.apellodo = 'Romo';
persona2.direccion = '5 de Mayo 504';
persona2.tel = '2323238402';

//acceder a los atributos
console.log(persona2.tel);