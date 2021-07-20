//METODO CALL

//PERMITE LLAMAR A UN OBJETO QUE ESTA DEFINIDO EN UN OBJETO DESDE OTRO OBJETO

let persona1 = {
    nombre: 'Daniel',
    apellido: 'Martinez',
    nombreCompleto: function () { //definimos un metodo
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Paulina',
    apellido: 'Ines'
}

//Uso del metodo call, para usar el metodo nombreCompleto pero con los datos del objeto persona2

console.log(persona1.nombreCompleto());

//asi se usa call para usar nombreCompleto de persona1 en el objeto persona2
console.log(persona1.nombreCompleto.call(persona2));