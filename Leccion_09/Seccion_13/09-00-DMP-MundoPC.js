//*MUNDO PC

/*Comentarios con Better Comments
//!Hola
//*Hola
//?Hola
//TODO HOLA 
*/


//todo: en las clases DispositivosEntrada con Teclado y Raton, se puso en practica el concepto de Herencia
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return `RATON: [IdRaton: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada
        }, Marca: ${this._marca}]`;
    }
}
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `TECLADO: [IdTeclado: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}



//todo: Manda a llamar el método set para cambiar el valor del atributo
//teclado1.marca = 'Blue Origin'; 
//console.log(teclado1.toString());

class Monitor {
    static contadorMonitor = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }
    toString() {
        return `MONITOR [IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}"`;
    }
}

//todo: aqui en esta clase Computadora se está aplicando el concepto de relacion de agregacion (se hizo la union de varias clases)
class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    toString() {
        return `COMPUTADORA: ${this._idComputadora}: ${this.nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;

        //todo: con template string, no es necesario colocar super.toString (CREO)... etc, ya que este tipo de concatenación entiende que ya fue creado ese metodo en otra clase y solo lo manda a llamar automaticamente al utilizar este tipo de sintaxis
        //todo: creo el toString SE MANDA A LLAMAR DESDE LA VARIABLE QUE SE LE ASIGNA AL ATRIBUTO por ejemplo raton1 manda llamar su propio toString y como esa variable se asigna a this._raton, entonces se le asigna automaticamente(CREO X2 jeje)


        //todo: ejemplo con CONCATENACIÓN
        //return 'COMPUTADORA: ' + this._idComputadora + ':' + this._nombre + '\n' + this._monitor + '\n' + this._raton + '\n' + this._teclado;
        //todo: aqui se demuestra que el toString se manda a llamar desde el objeto que se agrego al atributo por ejemplo el objeto raton1 se agrego a this._raton
    }
}

//todo: clase relacionada con agregación
class Orden {
    static contadorOrden = 0;
    constructor() {
        this._idOreden = ++Orden.contadorOrden;
        this._computadoras = [];
    }
    get orden() {
        return this._idOrden;
    }
    //todo: forma en la que se va a relacionar la clase Orden con la clase Computadora
    agregarComputadora(ordenComputadora) {
        this._computadoras.push(ordenComputadora); //todo: ordenComputadora podria llamarse como referencia, ya que hace referencia la computadora que viene de otra clase pero que se agrega a la orden 
    }
    mostrarOrden() {
        let productosOrden = '';
        for (let computadora of this._computadoras) {
            productosOrden += '\n[' + computadora.toString() + ']'; //todo: en cada iteracion se manda a llamar el metodo toString, para que se muestre correctamente :3
            //productosOrden += `\n[${computadora}]`; //todo: la linea de arriba y esta significan lo mismo, solo que una es con concatencacion y la otra con template string (manda a llamar el metodo toString de forma automatica) 
        }
        console.log(`Orden: ${this._idOreden}, Computadoras: ${productosOrden}`);
    }
}

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log(raton2.toString());

let teclado1 = new Teclado('Bluetooth', 'DELL');
let teclado2 = new Teclado('USB', 'Acer');
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora('ALIEN 12000', monitor2, raton1, teclado2);
let computadora3 = new Computadora('DELL LATITUDE E6230', monitor1, raton1, teclado2);
let computadora4 = new Computadora('LENOVO', monitor2, raton2, teclado1);
console.log(computadora1.toString());
console.log(computadora2.toString());
console.log(computadora3.toString());
console.log(computadora4.toString());

//todo: con template string tambien se puede mandar a hacer la llamada, sin necesidad de agregar el toString
//console.log(`${computadora1}`)
//console.log(`${computadora2}`)

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
// console.log(orden1);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora4);
orden2.agregarComputadora(computadora3);

orden2.mostrarOrden();