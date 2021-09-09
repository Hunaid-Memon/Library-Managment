const studentName = document.getElementById('name');
const studentId = document.getElementById('id');
const bookName = document.getElementById('book');
const form = document.getElementById('form');
const main = document.getElementById('main')


studentsData = [
    // { name: 'Hunaid', id: 0001, book: 'Computer' },
    // { name: 'Saad', id: 0002, book: 'Economics' },
];

let studentData = studentsData;
// console.log(studentData[0].name);

function updateUI(student) {
    // console.log(student.name);
    const pElem = document.createElement('p');
    pElem.innerHTML = `${student.name}<span>${student.id}</span>${student.book}`;
    main.appendChild(pElem)
    // console.log(pElem);
}



form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(studentName.value);
    if (studentName.value.trim() === '' || studentId.value === '' || bookName.value === '') {
        alert('Please provide a valid input')
    } else {
        const student = {
            name: studentName.value,
            id: studentId.value,
            book: bookName.value
        }
        studentData.push(student)
        console.log(studentData);
        updateUI(student)
        studentName.value = ''
        studentId.value = ''
        bookName.value = ''
    }

})
    
studentData.forEach(updateUI)
