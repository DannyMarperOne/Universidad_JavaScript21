//EJEMPLO STATIC EN JAVASCRIPT

class Persona {
    static contadorPersonas = 0; //Atributo de nuestra Clase
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona = ++Persona.contadorPersonas; //static ejemplo: se hace un preincremento para que primero se icremente el contador y despues se le asigne el valor _idPersona
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