//? POLIMORFISMO

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

//? POLIMORFISMO

//todo: metodo o funcion llamada imprimir y a traves de el se va a acceder al metodo obtenerDetalles, como los dos metodos el de Empleado y Gerente se llaman igual, la llamada dependera del tipo de objeto que se llame, ya sea empleado o gerente

//todo: a esto se le llama "POLIMORFISMO" (sig. Multiples Formas), ya que una sola linea puede acceder al metodo de la clase padre o de la clase hija

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}


//todo: creacion de Objetos
let empledo1 = new Empleado('Jose', '1200');
let gerente1 = new Gerente('Daniel Mtz', '1300', 'Sistemas');



//todo: llamada del metodo imprimir

//* en este caso se manda a llamar el metodo obtenerDetalles pero de la CLASE PADRE, todo depende de la referencia del objeto, en que clase fue creado
imprimir(empledo1); //todo: imprimir(tipo); El tipo seria el objeto, en este caso empleado1

//* en este caso se manda a llamar el metodo obtenerDetalles pero de la CLASE HIJA, todo depende de la referencia del objeto, en que clase fue creado
imprimir(gerente1);