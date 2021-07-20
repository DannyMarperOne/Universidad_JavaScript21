//METODO CALL

//PERMITE LLAMAR A UN OBJETO QUE ESTA DEFINIDO EN UN OBJETO DESDE OTRO OBJETO

let persona1 = {
    nombre: 'Daniel',
    apellido: 'Martinez',
    nombreCompleto: function (titulo, tel) { //definimos un metodo
        return titulo + ' : ' + this.nombre + ' ' + this.apellido + ' , ' + tel;
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

//llamda de call con los argumentos que se le crearon a la funcion nombreCompleto
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '2324554'));