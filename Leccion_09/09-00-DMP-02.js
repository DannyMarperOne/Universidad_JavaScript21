//METODO GET Y SET EN CLASES

//creacion de una clase
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() { //metodo get se llama nombre
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}


let persona1 = new Persona("Juan", "Perez");

//GET
//llamda del metodo get nombre 
console.log(persona1.nombre)

//SET
//llamada del metodo set nombre
persona1.nombre = 'Jose';

//Get para verificar que se hizo el cambio del valor
console.log(persona1.nombre)


//(OJO, para metodos get y set no se usa parentesis, js sabe que se llaman esos metodos)