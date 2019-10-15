/*
    Steps to Take
    1. Create 16x16 grid for practice (CHECK)
    2. Write function to create any size grid (CHECK)
    3. Begin the page with a 16x16 grid (CHECK)
    4. Create function onhover OR onmousedown to color grid (CHECK)
    5. Create function to Reset grid. (CHECK)
    6. Create function to change grid size (CHECK)
    7. Create function for Random Color Mode and Rainbow(CHECK)
    8. Create function to Choose a Color (CHECK)
    9. Create Mode for Erase
    10. Create an initializer for page (CHECK)
*/
init(16);
function init(gridSize) {
    console.log('init shit');
    createGrid(gridSize);
    mouseTrack('black');
    document.getElementById('reset').addEventListener('click', clearGrid);
    document.getElementById('resize').addEventListener('click', gridResize);
    document.getElementById('black').addEventListener('click', backToBlack);
    document.getElementById('random').addEventListener('click', randomPick);
    document.getElementById('rainbow').addEventListener('click', rainbow);
    document.getElementById('erase').addEventListener('click', erase);

}
//1. Creating a 16x16 grid in javascript
 //let grid = document.getElementById('grid-container');
 //3. Init with 16x16 grid
 //createGrid(16);
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
    let grid = document.getElementById('grid-container');
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.border = '1 px solid black';
    for (let i = 0; i < gridSize**2; i++) {
        const gridItems = document.createElement('div');
        gridItems.classList.add('gridCell');
        gridItems.setAttribute('id', 'cell-' + i);
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

//The following variables are sitting at the top.
//let grid = document.getElementById('grid-container');
//let mouseHold = false;
function mouseTrack(color) {
    let cells = document.querySelectorAll('.gridCell');
    let mouseHold = false;
    cells.forEach((cell) => {
        //single click
        cell.addEventListener('mousedown', function() {
            cell.style.backgroundColor = color;
            console.log('mouse is down');
            mouseHold = true;
        });
        //Drag portion -- UPDATE-- does not get the id of the last cell
        cell.addEventListener('mouseover', function() {
                if (mouseHold) {  
                    console.log(cell.id);
                    console.log('changing to this color ' + color);
                    cell.style.backgroundColor = color;
                }
            });
        cell.addEventListener('mouseup', function() {
                mouseHold = false;
                console.log('Mouse is up');
                cell.removeEventListener('mouseover', function() {
                    cell.style.backgroundColor = color;
                });
            });
        //THIS PART DOESNT ALLOW THE DRAG TO FUNCTION PROPERLY BECAUSE WE ARE LEAVING EACH CELL
        // cell.addEventListener('mouseleave', function() {
        //     mouseHold = false;
        //     cell.removeEventListener('mouseover', function() {
        //         cell.style.backgroundColor = 'black';
        //     });
        // });
        
    });
}

//5. Create function to Reset grid.
function clearGrid() {
    let cells = document.querySelectorAll('.gridCell');
    cells.forEach((cell) => {
        cell.style.transition = `${Math.random() * 2}s`;
        cell.style.backgroundColor = 'white';
    }
)}

//6. Create function to change grid size
function gridResize() {
    let cells = document.querySelectorAll('.gridCell');
    cells.forEach((cell) => {
        cell.remove();
    })
    init(parseInt(prompt('What size grid do you want?')));
}


//Black Brush Tip
//Next steps to change it into Color choose
function backToBlack() {
    mouseTrack('black');
}


//7. Create function for Random Colors
function randomColor() {
    return 'rgba(' + randomNum() + ', ' + randomNum() + ', ' + randomNum() + ', ' + Math.random().toFixed(1) + ')';
}
function randomNum() {
    let num = Math.round(Math.random()*255);
    return num;
}
//Random Color Picker
function randomPick() {
    mouseTrack(randomColor());
}
//Rainbow mode
function rainbow() {
    /*
        Problem with this one is that, I can't change the color back to black and IDK WHY. Is there a better way to shorten this without having to copy the mousetrack code?????
        Is it because I need to remove the event listeners???
    */ 
    let cells = document.querySelectorAll('.gridCell');
    let mouseHold = false;
    cells.forEach((cell) => {
        //single click
        cell.addEventListener('mousedown', function() {
            cell.style.backgroundColor = randomColor();
            console.log('mouse is down');
            mouseHold = true;
        });
        //Drag portion -- UPDATE-- does not get the id of the last cell
        cell.addEventListener('mouseover', function() {
                if (mouseHold) {  
                    console.log(cell.id);
                    console.log('changing to this color ' + randomColor());
                    cell.style.backgroundColor = randomColor();
                }
            });
        cell.addEventListener('mouseup', function() {
                mouseHold = false;
                console.log('Mouse is up');
                cell.removeEventListener('mouseover', function() {
                    cell.style.backgroundColor = randomColor();
                });
            });      
    });
    
}

//8. Create function to Choose a Color
var colorBtn = document.querySelector('#color');
var colorPicker = new Picker(colorBtn);
colorPicker.onDone = function(color) {
    console.log('rgba(' + color.rgba[0] + ', ' + color.rgba[1] + ', ' + color.rgba[2] + ', ' + color.rgba[3] + ')');
    mouseTrack('rgba(' + color.rgba[0] + ', ' + color.rgba[1] + ', ' + color.rgba[2] + ', ' + color.rgba[3] + ')');
};

//9. Create Mode for Erase 
function erase() {
    mouseTrack('transparent');
}

//Hover on Title
function itsSketch(e) {
    e.innerHTML = '<span style=\'font-size: 16px\'>it\'s a little sketch...</span>';
}
function itsEtch(e) {
    e.innerHTML = '&#8226; &#8226; Etch &#8226; &#8226;';
}
