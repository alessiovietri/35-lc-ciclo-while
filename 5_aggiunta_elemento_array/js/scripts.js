const students = ['Luca', 'Marco', 'Giovanni'];

console.log(students);

const studentsList = document.getElementById('students-list');

console.log('studentsList', studentsList, typeof studentsList);

for (let i = 0; i < students.length; i++) {

    console.log(students[i]);

    // Aggiungi lo studente i-esimo alla lista
    const newLi = document.createElement('li');
    newLi.innerHTML = students[i];
    studentsList.append(newLi);
    // ----------------------------------------
    
}

const addButton = document.getElementById('add-button');

const newStudentInput = document.getElementById('new-student');

addButton.addEventListener('click',

    function () {

        console.log(newStudentInput.value);

        // Aggiungi il nuovo studente alla lista (preso dall'input)
        // const newLi = document.createElement('li');     // OK
        // newLi.innerHTML = newStudentInput.value;        // 
        // studentsList.append(newLi);                     // OK
        // ----------------------------------------

        // Aggiungi il nuovo studente nell'array
        students.push(newStudentInput.value);

        console.log(students);

        studentsList.innerHTML = '';
        for (let i = 0; i < students.length; i++) {

            console.log(students[i]);
        
            // Aggiungi lo studente i-esimo alla lista
            const newLi = document.createElement('li');
            newLi.innerHTML = students[i];
            studentsList.append(newLi);
            // ----------------------------------------
            
        }

    }

);
