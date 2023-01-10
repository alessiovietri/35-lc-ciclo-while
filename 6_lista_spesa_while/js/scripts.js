/*

Consegna LC:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della listaindividualmente con un ciclo FOR.

Consegna POMERIGGIO:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della listaindividualmente con un ciclo WHILE.

*/

const items = [
    'Latte',        // Indice = 0
    'Uova',         // Indice = 1
    'Pane',         // ...
    'Carne',
    'Acqua',
    'Fazzoletti'    // Indice = (items.length - 1)
];

console.log('items', items, items.length, typeof items);

const itemsList = document.getElementById('items');
console.log('itemsList', itemsList, typeof itemsList);
// oppure
// const itemsList = document.querySelector('#items');

// for (let i = 0; i < items.length; i++) {

//     console.log(i, items[i]);

//     itemsList.innerHTML += `<li>${items[i]}</li>`;

//     const newLi = document.createElement('li');     // <li></li>
//     newLi.innerHTML = items[i];                     // <li>Latte</li>
//     itemsList.append(newLi);
//     // newLi.classList.add('single-item');

// }

let i = 0;
//     1          6
while (i < items.length) {

    console.log(i, items[i]);

    // itemsList.innerHTML += `<li>${items[i]}</li>`;

    const newLi = document.createElement('li');     // <li></li>
    newLi.innerHTML = items[i];                     // <li>Latte</li>
    itemsList.append(newLi);
    // newLi.classList.add('single-item');

    i++;

}