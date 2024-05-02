"use Strict"

// Creo variabile del pulsante con evento al click
const lancio = document.getElementById("lancio-input");
lancio.addEventListener('click', function () {

    // Genero numeri casuali del dado utente e pc
    const userNumber = Math.floor((Math.random() * 6) + 1);
    const computerNumber = Math.floor((Math.random() * 6) + 1);

    // --- Creo IF per vittoria/pareggio altrimenti sconfitta e stampo risultato
    if(userNumber === computerNumber){
        document.getElementById('risultato-output').innerHTML = ('PAREGGIO')
    }else if(userNumber > computerNumber){
        document.getElementById('risultato-output').innerHTML = ('HAI VINTO!')
    }else{
        document.getElementById('risultato-output').innerHTML = ('HAI PERSO!')
    };
    document.getElementById('spiegazione-output').innerHTML = (`Il tuo dado ha fatto ${userNumber}, il mio dato ha fatto ${computerNumber}`)
});