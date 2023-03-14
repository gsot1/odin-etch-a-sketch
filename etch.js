// TEMPORARY: Create a 4x4 grid
const SIZE = 4;
const insertDiv = document.getElementById('maingrid');

for (let i = 1; i < SIZE+1; i++) {
    const row = document.createElement('div');
    row.id = 'maingrid-row';
    for (let j = 1; j < SIZE+1; j++) {
        row.insertAdjacentHTML('beforeend', `<div id="maingrid-item"></div>`)
    }
    insertDiv.appendChild(row);
}