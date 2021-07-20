//Herencia en JavaScript

class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
}

class Empleado extends Persona { //de esta manera a la clase empleado (clase hija) se le heredan las caracteristicas de la clase Persona (clase padre)
    constructor(nombre, apellido, departamento) { //es necesario colocar los parametros de la clase padre que se utilizaran en la clase hija
        super(nombre, apellido); //con super mandamos a llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }

}

let persona1 = new Persona('Carolina', 'Martinez');
console.log(persona1);

//ahora ya no marca error ya que se utilizo la palabra reservada super
let empleado1 = new Empleado('Miguel', 'Hernandez', 'Sistemas');
console.log(empleado1);



//comprobar que podemos acceder a los metodos de la clase padre, osea que los estamos heredando
console.log(empleado1.nombre);

//se observa que obtenemos el metodo get de nombre de la clase persona pero este metodo no esta definido en la clase Empleado, se está heredando de la clase Persona