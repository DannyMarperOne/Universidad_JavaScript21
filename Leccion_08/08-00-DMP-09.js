//CONSTRUCTORES

/* Constructores: funcion especial para trabajar con objetos en javascript */

//EJEMPLO CONSTRUCTOR

//Función constructor de objetos de tipo persona

//se recomienda que los metodos que van a ser constructures empiecen con letra Mayúscula
function Persona(nombre, apellido, email) {
    this.nombre = nombre; //this. nombre se refiere al "atributo o propiedad" del objeto, y = nombre, se refiere al "parametro" de la funcion o metodo Persona
    this.apellido = apellido;
    this.email = email;
}

//llamada del metodo constructor
let padre = new Persona('Juan', 'Perez', 'JPerez@email.com');

//perosona ya no es una variable, sino un metodo que permite crear un nuevo objeto de tipo persona
console.log(padre);

let madre = new Persona('Laura', 'Wuinin', 'lau@gvom.vo');
console.log(madre);

//Tenemos en memoria dos objetos, Padre y Madre, debido a que utilizamos la palabra reservada New, cada vez que utilizamos new se crea un nuevo objeto en memoria y cada uno tiene valores diferentes pero utilizando la funcion de constructor para crear objetos con las mismas caracteristicas en este caso, Nombre, Apellido y Email



padre.nombre = 'Daniel';
console.log(padre);

//los cambios que se le hagan al obejto padre solo afectaran a ese objeto