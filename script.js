
let grid = document.getElementById('grid-container');
grid.style.gridTemplateColumns = 'repeat(20, 1fr';
grid.style.border = '1 px solid black';
for (let i = 0; i < 20**2; i++) {
    const gridItems = document.createElement('div');
    gridItems.classList.add('gridCell');
    grid.appendChild(gridItems);
}

function createGrid(gridSize) {
    return;
}

//createGrid();
