"use strict";

// --Creo un prompt creando una variabile che chieda indirizzo email utente
const userEmail = prompt("Inserisci il tuo indirizzo e-mail").toLowerCase();

// --Creo un array di 10 email fittizie con un ciclo per pigrizia
const emailList = [];
for (let email = 0; email < 10; email++) {
    emailList.push(`pinco${emailList.length}pallino@mail.com`)
};

// --Creo una variabile per l' accesso = false
let accesso = false;

// --Creo condizioni per l'accesso cambiando la variabile per l'accesso e stampo gli eventuali messaggi
for (let i = 0; i < emailList.length; i++){
    if (emailList[i] === userEmail) {
        accesso = true;
        break;
    };
};

if (accesso === true) {
    console.log("Accesso Consentito");
    // alert('Accesso Consentito');
} else {
    console.log('Accesso Negato');
    alert('Accesso Negato');
};

