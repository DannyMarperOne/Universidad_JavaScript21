//Sistema de Ventas

//Clase Producto
class Producto {
    //Variable Estatica Contador
    static contadorProductos = 0;
    //Constructor
    constructor(nombre, precio) { //constructor con parametros
        this._idProducto = ++Producto.contadorProductos; //atributo _idProducto
        this._nombre = nombre;
        this._precio = precio;
    }
    //Metodos GET y SET
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
    //Método toString
    toString() {
        //Template Literal o Template Stings (en lugar de concatenar cadenas con el simbolo +)
        return `IdProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
}

//Clase Orden (no tiene relación de herencio, sino de agregación)
class Orden {
    //Variable estatica contador
    static contadorOrdenes = 0;
    //metodo estico simulado como constante
    static get MAX_PRODUCTOS() {
        return 5;
    }
    //Constructor
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []; //arreglo vacio (este se usara en el metodo agregarProductos)
        // this._contadorProductosAgregados = 0;
    }
    //Metodo Get
    get idOrden() {
        return this._idOrden;
    }
    //Método Agregar Producto
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) { //length para referirnos al largo del arreglo
            this._productos.push(producto); //push para agregar elemento
            //this._productos[this._contadorProductosAgregados++] = producto; es otra forma de ver la cantidad de productos que tiene el arreglo usasndo el atributo this._contadorProductosAgregados
        } else {
            console.log("No se pueden agregar más productos");
        }
    }
    //Método Calcular Total
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) { //para recorrer el arreglo de manera automatica javascript nos ayuda con este ciclo for simplificado
            //sintaxis simplificada para iterar un arreglego, declaramos la variable que va a iterar despues el of e indicamos cual es el arreglo que vamos a recorrer
            totalVenta += producto.precio;
            //lo que seria totalVenta = totalVenta + producto.precio;
        }
        return totalVenta;
    }
    //Método Mostrar Orden
    mostrarOrden() {
        let productosOrden = ''; //esta variable almacena cada uno de los productos como una cadena
        for (let producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '}'; // \n significa salto de linea
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

//creacion de productos
let producto1 = new Producto("Jabon", 40);
let producto2 = new Producto("Estufa", 5000);
let producto3 = new Producto("Laptop", 13000);
let producto4 = new Producto("Colchon", 2000);

//agregacion de productos a la orden numero....
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

// muestra el resultado de la orden
orden1.mostrarOrden();


//agregacion de productos a la orden numero....
let orden2 = new Orden();
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);


// muestra el resultado de la orden
orden2.mostrarOrden();