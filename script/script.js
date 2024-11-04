/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email*/

let mail = prompt("inserisci la tua email");
let listaMail = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];
if(mail = listaMail.includes(mail)){
    console.log("benvenuto");
}
else{
    console.log("non sei nella lista");
}

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


