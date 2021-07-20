//CREACION DE CLASES

//creacion de una clase
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//new Persona, se le conoce como instancia de clase
//aqui se manda a llamar el constructor de la clase Persona
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let persona2 = new Persona("Daniel", "Martinez");
console.log(persona2);