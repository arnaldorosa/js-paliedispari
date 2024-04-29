// chiedo all'utente di inserire un numero che sia pari o dispari
let oddEvenUser;
oddEvenUser = parseInt(prompt("Pari o Dispari?"));

if (oddEvenUser == "pari") {
    console.log("Hai scelto Pari!");
} else if (oddEvenUser == "dispari") {
    console.log("Hai scelto Dispari!")
} else {
    console.log("Numero non valido");
}

// l'utente inserisce il numero
let userChoice;

userChoice = prompt("Inserisci un numero da 1 a 5");
if (userChoice <= 5 && userChoice > 0) {
    console.log(userChoice);
} else {
    console.log("Questo numero non puoi inserirlo!");
}

// genero il numero per il PC
console.log("Ora sceglie il computer");
let rndNumber = numbComputer (); 
function numbComputer (){
    const rnd = Math.floor(Math.random() * (5)) +1;
    return rnd;
}
 console.log(rndNumber); 

// sommo i numeri
let somma = userChoice + rndNumber;
console.log(somma);

// la somma è pari o dispari?
let result = evenOdd (somma);

function evenOdd (somma) {
    let result;
    if (somma % 2 == 0) {
        console.log("Il numero è pari");
        result = "pari"
    } else {
        console.log("Il numero è dispari");
        result = "dispari";    
    }
    return result;
}

// il vincitore è...
if (result == "pari" && oddEvenUser == "pari") {
    console.log("Hai vinto!");
} else if (result == "dispari" && oddEvenUser == "dispari") {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}