//ESTACIONES DEL AÑO CON SWITCH
//ojo switch es tipo estricto, por lo cual tambien compara el tipo de dato

let mes = 10;
let estacion = "Mes desconocido";

//let mes = "11"; // en switch esto no se puede ya que este es un string y no numerico como se pide en el programa, deben ser del mismo tipo de dato para que se ejecute bien el switch

switch (mes) {
    case 1:
    case 2:
    case 12: //aqui agrupamos varios casos al que cualquiera de ellos se les da el resultado INVIERNO en la variable estación....y asi con otros casos
        estacion = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor Incorrecto";
        break;
}
console.log(estacion);