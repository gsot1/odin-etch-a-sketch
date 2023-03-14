const GRIDSIZE = 64;
const insertDiv = document.getElementById('maingrid');

function init() {
    const chButton = document.createElement('button'); // init code: create our button with a listener bound to our generate() function
    chButton.addEventListener('click', generate);
    chButton.innerText = 'GENERATE';
    insertDiv.appendChild(chButton);
}

function generate() {
    let input;

    while (typeof input !== 'number' || !input) { // ensure user input converts to an actual number and not NaN
        input = prompt('Enter a new number size for the grid:');
        input = Number(input);
    }

    input = Math.round(input); // round number to an integer and cap it at 100
    let size = input < 100 ? input : 100;

    document.getElementById('maingrid').innerText = ''; // delete existing grid and create new one
    init();

    for (let i = 1; i < size+1; i++) { // Create a set of `size` rows
    
        const row = document.createElement('div');
        row.classList.add('maingrid-row');
    
        for (let j = 1; j < size+1; j++) { // ...with `size` items in each row
            const item = document.createElement('div');
            item.classList.add('maingrid-item');
            
            item.addEventListener('mouseover', () => item.classList.add('mg-item__hovered'), { // ...with each item having a single-use listener
                once: true
            });

            item.style.height = `${GRIDSIZE/size}rem`; // not ideal, but using inline styles to size grid items within `GRIDSIZE`x`GRIDSIZE`
            item.style.width = `${GRIDSIZE/size}rem`;
                
            row.appendChild(item);
        }
    
        insertDiv.appendChild(row);
    }
}

init();