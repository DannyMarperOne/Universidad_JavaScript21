//METODO SET OBJECT

let persona = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'jhernandez@mail.com',
    edad: 30,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase(); //toUpperCase convierte cadenas de texto minusculas en Mayusculas
    },
    set lango(lango) { //el metodo set tambien se llamaba lang, pero lo cambie a lango para no confundirme
        this.idioma = lango.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    },
    edadPersona: function () {
        return this.nombre + ' ' + this.apellido + ' ' + 'tiene' + ' ' + this.edad + ' ' + 'años de edad.'
    }
}

//Modificamos la cadena de la funcion lang con el metodo get
console.log(persona.lang);

/* --------------------------- */
//SET (Sirve para modificar los valores de los atribuetos de un objeto)
persona.lango = 'en'; //aqui se le asigna el nuevo valor
console.log(persona.lang);
console.log(persona.idioma);



/* 
    EXPLICAION SET 
    primero se crea un metodo SET el cual tendra el nombre de lang con el parametro (lang), despues se modficara el parametro idioma del objeto persona
     se pone this para indicar que se modificara la informacion de ese atributo en este caso idioma y se le asigna el parametro lang el cual tendra un metodo toUppercase para que se convierta a mayusculas antes de que se asigne el valor.

     fuera del objeto se le da un nuevo valor al idioma con el codigo persona.lang = 'en';, se coloca lang ya que es el parametro que se le asigno al metodo set lang

     lo que sucedera será lo siguiente: de forma indirecta el codigo persona.lang = 'en'; manda a llamar el metodo set lang y el valor "en" se le pasara al parametro (lang), se recibira el valor de 'en' y antes de que se asigne al atributo idioma,lo convierte a mayusculas y despues se lo asigna a el atributo idioma
      locual imprimira idioma ES
    
      (OJO PARA QUE FUNCIONE EL METODO, EL METODO Y EL PARAMETRO DEBEN LLAMARSE IGUAL YA QUE SE MANDA A LLAMAR ASI MISMO (CREO))
*/

//ciclo for in para imprimir todos los atributos
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}