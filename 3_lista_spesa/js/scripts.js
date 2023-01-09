/*

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo FOR.

*/

const items = [
    'Latte',
    'Uova',
    'Pane',
    'Carne',
    'Acqua',
    'Fazzoletti'
];

console.log('items', items, items.length, typeof items);

const itemsList = document.getElementById('items');
console.log('itemsList', itemsList, typeof itemsList);
// oppure
// const itemsList = document.querySelector('#items');

for (let i = 0; i < items.length; i++) {

    console.log(i, items[i]);

    itemsList.innerHTML += `<li>${items[i]}</li>`;

    const newLi = document.createElement('li');
    newLi.innerHTML = items[i];
    itemsList.append(newLi);
    // newLi.classList.add('single-item');

}