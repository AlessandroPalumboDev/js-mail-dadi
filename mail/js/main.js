"use strict"

// --Creo un prompt creando una variabile che chieda indirizzo email utente
const userEmail = prompt("Inserisc il tuo indirizzo e-mail");

// --Creo un array di 10 email fittizie con un ciclo per pigrizia
const emailList = ["pincopallino@mail.com"];

for (let email = 1; email < 10; email++){
    emailList.push(`pinco${emailList.length}pallino@mail.com`)
};
