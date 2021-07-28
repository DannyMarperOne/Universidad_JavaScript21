//Ejercicio de Herencia

//Clase Persona
class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        //asignación Id con static
        this._idPersona = ++Persona.contadorPersonas;

    }
    //Getters and Setters
    get idPersona() {
        return this._idPersona;
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
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return this._idPersona + ' | ' + this._nombre + ' | ' + this._apellido + ' | ' + this._edad;
    }
}

//Clase Empleado
class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad); //mandamos a llamar al constructor de la clase padre
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }
    //Getters and Setters
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return super.toString() + ' | ' + this._sueldo + ' | ' + this._idEmpleado;
    }
}

//Clase Cliente
class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegristro) {
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegristro;
        this._idCliente = ++Cliente.contadorCliente;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegristro() {
        return this._fechaRegistro;
    }
    set fechaRegristro(fechaRegristro) {
        this._fechaRegistro = fechaRegristro;
    }
    toString() {
        return super.toString() + ' | ' + this._idCliente + ' | ' + this._fechaRegistro;
    }
}


//Prueba Clase Persona
let persona1 = new Persona('Hernan', 'Hernandez', 34);
console.log(persona1.toString());

let persona2 = new Persona('Naomi', 'Unknown', 21);
console.log(persona2.toString());


//Prueba Clase Empleado
let empleado1 = new Empleado('Dani', 'Ruiz', 24, 300);
console.log(empleado1.toString());

let empleado2 = new Empleado('Dalia', 'Iveeth', 24, 1000);
console.log(empleado2.toString());

//Prueba Clase Cliente
let cliente1 = new Cliente('Oswaldo', 'Diaz', 24, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Emma', 'Unknown', 25, new Date());
console.log(cliente2.toString());