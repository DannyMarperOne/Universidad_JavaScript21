//Sistema de Ventas

//Clase Producto
class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        //constructor con parametros
        this._idProducto = ++Producto.contadorProductos; //atributo _idProducto
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        //backslash
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

//Clase Orden (no tiene relación de herencio, sino de agregación)
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []; //arreglo vacio
        // this._contadorProductosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto; es otra forma de hacer lo de la linea anterior
        } else {
            console.log("No se pueden agregar más productos");
        }
    }
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            //sintaxis simplificada para iterar un arreglego, declaramos la variable que va a iterar despues el of e indicamos cual es el arreglo que vamos a recorrer
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden() {
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '}'; // \n significa salto de linea
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto("Jabon", 40);
let producto2 = new Producto("Estufa", 5000);
let producto3 = new Producto("Laptop", 13000);
let producto4 = new Producto("Colchon", 2000);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);

orden2.mostrarOrden();