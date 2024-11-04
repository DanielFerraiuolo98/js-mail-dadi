/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let numeri = [];
for(let i = 0; i < 6; i++){
    let numero = parseInt(prompt("inserisci un numero"));
    if(numero % 2 === 1){
        numeri.push(numero);
    }
}
console.log(numeri);