//VARIABLE STATIC DE SOLO LECTURA

class Persona {
    static contadorPersonas = 0; //Atributo de nuestra Clase

    //llamada a un metodo estatico, no es una constante, solo es un metodo estatico que no se puede modificar

    //MAX_OBJ Metodo que va a simular una constante que tiene el maximo de objetos que podemos crear de tipo persona
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;

        //para que no se superen el maximo de objetos que se puedan crear
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this._idPersona = ++Persona.contadorPersonas; //static ejemplo: se hace un preincremento para que primero se icremente el contador y despues se le asigne el valor _idPersona 
        } else {
            console.log('Se han superado el maximo de objetos permitidos');
        }
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
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //toString (estamos sobreescribiendo el metodo de la clase padre)
    toString() {
        //se aplica polimorfismo(multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar() {
        console.log('saludos desde el metodo estatic');
    }
    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) { //parametros de la clase padre en hija
        super(nombre, apellido); //con super mandamos a llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //SOBREESCRITURA 
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento; //agregamos "super" es para acceder a los atributos y metodos definidos en la clase padre
    }
}

let persona1 = new Persona('Carolina', 'Martinez');
console.log(persona1.toString());

let empleado1 = new Empleado('Miguel', 'Hernandez', 'Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Paulina', 'Perez');
console.log(persona2.toString());

console.log(Persona.contadorPersonas);




//no lleva parentesis porque javascript entiende que es un metodo get y que solo se obtendra informacion
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10; //esto no funciona ya que el metodo static MAX_OBJ no tiene metodo set, solo metodo get, asi que no se modifica su valor
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano', 'Lara');
let empleado2 = new Empleado('Fidencio', 'Martinez', 'Operador');
console.log(empleado2.toString());

//aqui se llega al limite de la condicion con el metodo MAX_OBJ y se imprimira en consola el mensaje de la excepcion
let persona4 = new Persona('Jose', 'Sanchez');

//si se imprime a la persona de la posicion 6 en el contador, este ya no se mostrara porque supera la condicion y ya no será asignado su id
console.log(persona4.toString());