//Método ToString

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
    nombreCompleto() { //es un metodo pero dentro de una clase no es necesario especificar la palabra funcion
        return this._nombre + ' ' + this._apellido;
    }
    //toString (estamos sobreescribiendo el metodo de la clase padre)
    toString() {
        //se aplica polimorfismo(multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
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
    //SOBREESCRITURA (Modificar el comportamiento de algún metodo definido en la clase padre)

    //se debe usar el mismo metodo de la clase padre ya que si se escribe diferente estariamos creando un nuevo metodo

    //esta es una forma de sobreescritura
    /* nombreCompleto() {
        return this._nombre + ' ' + this._apellido + ' ' + this._departamento;

    } */

    //forma #2 de sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento;

        //agregamos "super" es para acceder a los atributos y metodos definidos en la clase padre
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


//--------------------HEREDANDO UN METODO EN JAVASCRIPT------------------
console.log(empleado1.nombreCompleto()); //como es una fuencion se pone parentesis

//aqui se esta heredando nombre y apelido de la clase persona a el empleado1

//------------------------SOBREESCRITURA---------------------

console.log(empleado1.nombreCompleto());

//ToString
//aqui se hace polimosfismo (estudiar bien eso)
console.log(empleado1.toString());