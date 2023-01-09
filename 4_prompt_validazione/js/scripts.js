/*

Esercizio: chiedere all'utente la sua età e poi mostrarla con un alert. Continuare a chiedere all'utente un valore corretto finché non ne inserisce uno

*/

// const age = parseInt(prompt('Inserisci la tua età'));

// if (isNaN(age)) {

//     alert('Hai inserito un valore non valido! Aggiorna la pagina per riprovare');

// }
// else {

//     alert('La tua età è: ' + age);

// }

// let ageWhile; // undefined
// console.log('ageWhile', ageWhile, typeof ageWhile);

// while (isNaN(ageWhile)) {

//     ageWhile = parseInt(prompt('Inserisci la tua età'));

// }

// alert('La tua età è: ' + ageWhile);

let ageWhile;

do {

    console.log('SONO NEL CICLO');

    ageWhile = parseInt(prompt('Inserisci la tua età'));

} while (isNaN(ageWhile));

alert('La tua età è: ' + ageWhile);