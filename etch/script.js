//build grid

let mkDiv = document.createElement('div');

//container
mkDiv.id = 'container';

document.body.appendChild(mkDiv);

const containerDiv = document.querySelector('#container');

//grid
let gridW = 16;
let gridH = 16;

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