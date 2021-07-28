//MUNDO PC

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

// let DispositivoEntrada1 = new DispositivoEntrada('USB', 'Kingston');
// console.log(DispositivoEntrada1);

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRatones = ++Raton.contadorRatones;
    }
    toString() {
        return `IdRatones: ${this._idRatones}`;
    }
}

// let Raton1 = new Raton('Video', 'HDMI');
// console.log(Raton1);

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString() {
        return `idTeclado: ${this._idTeclado}`;
    }
}

class Monitor {
    static contadorMonitor = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
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
        return `Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}