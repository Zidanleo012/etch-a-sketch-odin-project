const container = document.querySelector('#container');
let gridSize = prompt("enter Grid size:");

const gridInput = document.querySelector('#grid-input')
const gridButton = document.querySelector('#grid-button')

function verifySize(gridSize) {
    while (gridSize > 100 || gridSize < 3) {
        gridSize = prompt("Enter the proper size from 3 to 100")
    }
    return gridSize;
}
gridSize = verifySize(gridSize);
setGridSize(gridSize);

function setGridSize(size) {
    for (let i = 0; i < size; i++) {
        let boxColumn = document.createElement('div');
        boxColumn.classList.add('boxColumn');
        container.appendChild(boxColumn);
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            boxColumn.appendChild(box)
        }
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        let op = 15;
        box.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = `rgb(${rColor()} ${rColor()} ${rColor()} / ${op += 20}%)`
        })
    })
}

function rColor() {
    let num = Math.floor(Math.random() * 155) + 100;
    return num
}

gridButton.addEventListener('click', () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    gridSize = gridInput.value;
    gridSize = verifySize(gridSize);
    setGridSize(gridSize);
    gridInput.value = "";
})

gridInput.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter') {
        e.preventDefault()
        gridButton.click()
    }
})