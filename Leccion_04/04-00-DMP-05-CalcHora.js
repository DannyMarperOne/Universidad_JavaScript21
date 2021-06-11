//CALCULAR LA HORA 
/* 
    6am - 11am - Buenos dias
    12am - 18am - Buenas Tardes
    19am - 24am - Buenas Noches
    0am - 6am - Durmiendo
*/
let hora = 5;
let saludo;

if (hora >= 6 && hora <= 11) {
    saludo = "Buenos Dias";
} else if (hora >= 12 && hora <= 18) {
    saludo = "Buenas Tardes";
} else if (hora >= 19 && hora <= 24) {
    saludo = "Buenas Noches";
} else if (hora >= 0 && hora < 6) {
    saludo = "Durmiendo";
} else {
    saludo = "Hora no existe";
}

console.log(saludo);