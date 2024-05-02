"use strict"

// --Creo un prompt creando una variabile che chieda indirizzo email utente
const userEmail = prompt("Inserisc il tuo indirizzo e-mail");

// --Creo un array di 10 email fittizie con un ciclo per pigrizia
const emailList = ["pincopallino@mail.com"];

for (let email = 1; email < 10; email++){
    emailList.push(`pinco${emailList.length}pallino@mail.com`)
};

// --Creo condizioni per l'accesso e stampo gli eventuali messaggi
if (userEmail === emailList[0] || userEmail === emailList[1] || userEmail === emailList[2] || userEmail === emailList[3] || userEmail === emailList[4] || userEmail === emailList[5] || userEmail === emailList[6] || userEmail === emailList[7] || userEmail === emailList[8] || userEmail === emailList[9]){
    console.log("Accesso Consentito");
} else{
    console.log('Accesso Negato')
}

// RIGA 14 MI UCCIDE!