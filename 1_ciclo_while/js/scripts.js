// Esercizio: stampa i numeri da 1 a 10

// Soluzione con ciclo FOR

//     1   ;     2    ;    3
//    cont ; cond perm; mod avanz
for (let i = 1; i <= 10; i++) {

    console.log('CICLO FOR', i);

}


// Soluzione con ciclo while
// SOLUZIONE 1
let j = 1;  //     1   => cont
while (j <= 10) {  //     2   => cond perm

    console.log('CICLO WHILE', j);

    j++;  //     3   => mod avanz

}

// SOLUZIONE 2
// ERRATA perché manca inizializzazione di J
// while (j <= 10) {  //     2   => cond perm

//     console.log('CICLO WHILE', j);
    
//     let j = 1;  //     1   => cont

//     j++;  //     3   => mod avanz

// }