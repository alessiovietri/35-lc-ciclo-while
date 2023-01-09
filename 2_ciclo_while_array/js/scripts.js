// Esercizio: stampa tutti i valori presenti in un array

const students = [
    'Alice',
    'Bartolo',
    'Claudia',
    'Damiano'
];

// Soluzione con ciclo FOR

//     1   ;     2    ;    3
//    cont ; cond perm; mod avanz
for (let i = 0; i < students.length; i++) {

    console.log('CICLO FOR', i, students[i]);

}


// Soluzione con ciclo while
let j = 0;  //     1   => cont
while (j < students.length) {  //     2   => cond perm

    console.log('CICLO WHILE', j, students[j]);

    j++;  //     3   => mod avanz

}