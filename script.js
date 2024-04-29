// chiedo all'utente una parola, creo una funzione se la parola inserita sia palindroma
let word = prompt("Inserire una parola");
let result = numeroPalindromo (word);
console.log (result);

function numeroPalindromo (word) {

    let palindrome = false;
    let i = 0;
    let less = word.length -1;

    while (i <= word.length) {

        if (i > less) {
            palindrome = true;
            i = word.length + 1;

        } else if ( i < word.length && word[i] == word[less]) {
            i++;
            less--;
        } else {
            i = word.length + 1
        }
    }

        if (palindrome == true) {
            console.log ("E' palindroma");
        } else {
            console.log ("Non è palindroma");
        }
        return palindrome;
}