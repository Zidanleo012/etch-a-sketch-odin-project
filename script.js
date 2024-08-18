const container = document.querySelector('#container');
let gridSize = prompt("enter Grid size:");

while(gridSize > 100) {
    gridSize = prompt("Enter grid size again!!!")
}

for (let i = 0; i < gridSize; i++) {
    let boxColumn = document.createElement('div');
    boxColumn.classList.add('boxColumn');
    container.appendChild(boxColumn);
    for (let j = 0; j < gridSize; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        boxColumn.appendChild(box)
    }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', e => {
        e.target.style.background = 'blue';
    })
})