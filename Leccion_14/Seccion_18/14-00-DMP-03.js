//? setInterval

//? hace la llamada a una funcion varias veces a traves de un tintervalo de tiempo

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);

//*Se manda a llamar la funcion reloj que tiene hora minutos y segundos, y setInterval manda a llamar esa funcion una y otra vez cada segundo que pasa