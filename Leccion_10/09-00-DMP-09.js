//Atributos Staticos

class Persona {
    //ATRIBUTO STATIC
    static contadorObjetosPersona = 0; //(variable)este atributo pertenece a la clase y no pertenece a ningun objero

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++; //para acceder al operador static al momento de crear un nuevo objeto y se vaya incrementando
        console.log('se incrementa contador:' + Persona.contadorObjetosPersona);
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() { //es un metodo pero dentro de una clase no es necesario especificar la palabra funcion
        return this._nombre + ' ' + this._apellido;
    }
    //toString (estamos sobreescribiendo el metodo de la clase padre)
    toString() {
        //se aplica polimorfismo(multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar() {
        console.log('saludos desde el metodo estatic');
    }
    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) { //parametros de la clase padre en hija
        super(nombre, apellido); //con super mandamos a llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //SOBREESCRITURA 
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento; //agregamos "super" es para acceder a los atributos y metodos definidos en la clase padre
    }
}

let persona1 = new Persona('Carolina', 'Martinez');
console.log(persona1);

let empleado1 = new Empleado('Miguel', 'Hernandez', 'Sistemas');
console.log(empleado1);

//ToString
//aqui se hace polimosfismo (estudiar bien eso)
console.log(empleado1.toString());

//STATIC
//persona1.saludar(); //esto no se puede porque un metodo STATIC se asocia con una clase pero no con los objetos.

Persona.saludar(); //esto si se puede porque se esta llamando desde la Clase.

Persona.saludar2(persona1); //CAROLINA (solo se observa desde la consola porque es un STATIC)


//ejemplo de que se hereda el metodo static
Empleado.saludar();
Empleado.saludar2(empleado1);


//ATRIBUTOS STATIC
//no se puede console.log(persona1.contadorObjetosPersona); 

console.log(Persona.contadorObjetosPersona);
//se puede acceder a esta variable pero desde la clase ya que como es static no se puede asociar con los objetos solo su clase.


//las clases hijas tambien heredan los atributos estaticos
console.log(Empleado.contadorObjetosPersona);