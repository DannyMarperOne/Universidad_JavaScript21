//? SOBREESCRITURA

class Empleado {
    constructor(nombre, sueldo) { //todo: atributos
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles() {
        return `Empleado: Nombre: ${this._nombre}, Sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) { //todo: atributo
        super(nombre, sueldo); //todo: llamada al constructor de la clase padre
        this._departamento = departamento;
    }
    obtenerDetalles() {
        //todo: Sobreescritura podemos hacerlo utilizando la palabra "super" y mandando a llamar al método obtenerDetalles de la clase padre o copiando tal cual cada uno de los atributos colocados en el método obtenerDetalles de la clase padre

        //todo: Ejemplo de SOBREESCRITURA

        //? CON SUPER (Mandando a llamar al método)
        return `${super.obtenerDetalles()}, Gerente: Depto: ${this._departamento} `;

        //? COPIANDO ATRIBUTOS
        // return `Empleado: Nombre: ${this._nombre}, Sueldo: $${this._sueldo}, Gerente: Depto: ${this._departamento} `;
    }
}

let empledo1 = new Empleado('Jose', '1200');
console.log(empledo1.obtenerDetalles());

let gerente1 = new Gerente('Daniel Mtz', '1300', 'Sistemas');
console.log(gerente1.obtenerDetalles());