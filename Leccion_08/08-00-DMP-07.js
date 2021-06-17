//METODO GET OBJECT

let persona = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'jhernandez@mail.com',
    edad: 30,
    idioma: 'es',
    get nombreCompleto() { //con metodo GET se indica directamente que nombreCompleto va a ser el nombre de la funcion sin necesidad de escribir todo el codigo de funcion
        return this.nombre + ' ' + this.apellido;
    },
    edadPersona: function () {
        return this.nombre + ' ' + this.apellido + ' ' + 'tiene' + ' ' + this.edad + ' ' + 'años de edad.'
    }
}

//GET

//Mandar a llamar una funcion (CON GET (obtener))
//la funcion nombreCompleto se convierte en un metodo GET y asi se obtiene la informacion del parametro directamente

console.log(persona.nombreCompleto);
//con get se quitan los parentesis de la funcion, ya que javascript entiende que ya es un parametro como tal y va a tomar informacion del objeto, ya no se indicara que es una funcion, si no que va a obtener la informacion que contiene la funcion que fue convertida a un metodo get

//Mandar a llamar una funcion (Forma normal)
//console.log(persona.nombreCompleto());