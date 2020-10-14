//build grid

let mkDiv = document.createElement('div');

//container
mkDiv.id = 'container';

document.body.appendChild(mkDiv);

const containerDiv = document.querySelector('#container');

//grid
let gridW = 16;
let gridH = 16;

function mkGrid() {
    //delete old grid if it exists
    let rows = document.querySelectorAll('.row');
    rows.forEach(x => x.remove());

    //make a new one
    for (let i = 1; i <= gridH; i++) {
        let mkRow = document.createElement('div');
        mkRow.id = 'row-' + (i);
        mkRow.className = 'row';
        containerDiv.appendChild(mkRow);

        for (let j = 1; j <= gridW; j++) {
            let mkCell = document.createElement('div');
            mkCell.id = 'cell-' + i + j;
            mkCell.className = 'cell';
            document.querySelector(`#row-${i}`).appendChild(mkCell);
        }
    }

    //size cells
    let cellSize = Math.floor(window.innerWidth / 2 / gridW);
    console.log(window.innerWidth + ' ' + gridW + ' ' + cellSize);

    let cells = document.querySelectorAll('.cell');
    console.log(cells);
    cells.forEach(x => x.style.width = cellSize + 'px');
    cells.forEach(x => x.style.height = cellSize + 'px');

}

mkGrid();
startInking();

//add reset

let btn = document.createElement('button');
btn.type = 'button';
btn.textContent = 'reset';
document.body.appendChild(btn);


function reset() {
    gridW = gridH = +prompt('what size dude ?', 16);
    mkGrid();
    startInking();
}
btn.addEventListener('click', reset);



//hover inking

function startInking() {

    let cell = document.querySelectorAll('.cell');

    cell.forEach(x => x.addEventListener('mouseover', inkCell));

}

function inkCell() {
    this.style.backgroundColor = 'black';
    this.style.opacity = +this.style.opacity + 0.1;
    console.log(this);
    // this.classList.add('inked');
}