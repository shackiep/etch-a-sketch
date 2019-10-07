/*
    Steps to Take
    1. Create 16x16 grid for practice (CHECK)
    2. Write function to create any size grid (CHECK)
    3. Begin the page with a 16x16 grid (CHECK)
    4. Create function onhover OR onmousedown to color grid
    5. Create function to Reset grid.
    6. Create function to change grid size
    7. Create function for Random Color Mode
    8. Create function to Choose a Color
    9. Create function for Gradient Mode
    10. Create Mode for Erase
    11. 
*/

//1. Creating a 16x16 grid in javascript
 let grid = document.getElementById('grid-container');
 let trigger = false;
 //3. Init with 16x16 grid
 createGrid(16);
// grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
// //For loop is cell^2 because max columns of number of cells. The rest flexes into the container
// for (let i = 0; i < 16**2; i++) {
//     const gridItems = document.createElement('div');
//     gridItems.classList.add('gridCell');
//     grid.appendChild(gridItems);
// }

// //on click, the cells will turn to black
// //CTRL + K + C --- CTRL + K + U
// let cells = grid.querySelectorAll('.gridCell');
// console.log(cells);
// cells.forEach((cell) => {
//     cell.addEventListener('click', () => {
//         cell.style.backgroundColor = "black";
//         console.log('hello');
//     });
// })

//2. Write function to create any size grid
function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.border = '1 px solid black';
    grid.style.rad
    for (let i = 0; i < gridSize**2; i++) {
    const gridItems = document.createElement('div');
    gridItems.classList.add('gridCell');
    grid.appendChild(gridItems);
    }
}

//4. Create function onhover OR mousedown to color grid
//on click, the cells will turn to black
//CTRL + K + C --- CTRL + K + U
/*
    For this section, it will be a little tricky
    a. IDEAS(Create a function to detect that the mouse is down)
        -Toggle between mouse down and mouse up
        -need two functions, if mouse down -> true, if mouse up - false
        -onclick and mouse down - change color; else remove the event
    b. While the mouse is down and over the grid area, change the color
*/
let cells = grid.querySelectorAll('.gridCell');

function toggle() {
    return;
}

function enableToggle() {
    console.log('enableToggle');
    trigger = true;
}
function disableToggle() {
    console.log('disableToggle');
    trigger = false;
}
//The following variables are sitting at the top.
//let grid = document.getElementById('grid-container');
//let trigger = false;
function dragFunct() {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
            console.log('hello');
        });
    })
}

dragFunct();
