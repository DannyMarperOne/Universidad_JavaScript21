//SWITCH

//Numero a Texto pero con Switch
let numero = 3;
let numeroTexto = "Valor Desconocido";

switch (numero) { //son distintos casos que se van ejecuntando para encontrar el resultado
    case 1:
        numeroTexto = "Numero uno";
        break; //break se usa para que en caso de que este sea el resultado, entonces aqui pare el programa, de lo contrario si no estuviera break pero ya se encontro el resultado, el programa se seguiria ejecutando hasta que deje de analizar todos los casos
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero Cuatro";
        break;
    default: //default es para mandar un mensaje por defecto en caso de que no se encuentre ningun caso 
        numeroTexto = "Caso no encontrado";
}
console.log(numeroTexto);
