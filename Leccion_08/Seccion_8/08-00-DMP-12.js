//PROTOTYPE


//Función constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}


//AGRAGAR UNA NUEVA PROPIEDAD PERO PARA TODOS LOS OBJETOS QUE SE VAYAN A CREAR
Persona.prototype.tel = '44332211'; //este numero se pondria por default para todos los nuevos objetos persona

//llamada del metodo constructor
let padre = new Persona('Juan', 'Perez', 'JPerez@email.com');
console.log(padre);

//aqui se ve la accion de prototype
console.log(padre.tel);


//aqui modificamemos el telefono solo para el objeto padre
padre.tel = '22222';
console.log(padre.tel);

let madre = new Persona('Laura', 'Wuinin', 'lau@gvom.vo');
console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.tel);