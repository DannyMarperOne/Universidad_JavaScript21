//CONSTRUCTORES

//LLAMAR METODOS A UN METODO

//Función constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

//llamada del metodo constructor
let padre = new Persona('Juan', 'Perez', 'JPerez@email.com');

//pesona ya no es una variable, sino un metodo que permite crear un nuevo objeto de tipo persona
console.log(padre);

//aqui se mando a llamar el metodo nombreCompleto
console.log(padre.nombreCompleto());

//this trabaja con los valorares con los que esta trabajando en ese momento, como en este caso que trabaja con los valores de la variable Padre



let madre = new Persona('Laura', 'Wuinin', 'lau@gvom.vo');
console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = 'Daniel';
console.log(padre);
//los cambios que se le hagan al obejto padre solo afectaran a ese objeto