/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

let numeroUser = Math.floor((Math.random() * 6) + 1);
let numeroPc = Math.floor((Math.random() * 6) + 1);
console.log(numeroUser);
console.log(numeroPc);

if(numeroUser > numeroPc){
    console.log("l'utente ha vinto");
}
else if(numeroPc > numeroUser){
    console.log("il PC ha vinto");
}
else{
    console.log("i numeri sono uguali");
}