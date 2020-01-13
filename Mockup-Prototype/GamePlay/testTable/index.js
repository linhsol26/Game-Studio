const sandbox = document.getElementById('sandbox');
const tagTD = document.getElementsByTagName('td');
const tagTR = document.getElementsByTagName('tr');

const btnAddRow = document.getElementById('btn-add-row');
const btnAddCol = document.getElementById('btn-add-col');

let firstTable = 10;

for(let i = 0; i < firstTable; i++) {
    let row = sandbox.insertRow(i);
    for(let i = 0; i < firstTable; i++) {
        row.insertCell(0);
    }
}

const createEmptyBox = () => {
    for(let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.border = '1px solid black';
    }
}

btnAddRow.onclick = () => {
    let row = sandbox.insertRow(tagTR.length);
    for(let i = 0; i < firstTable; i++) {
        row.insertCell(0);
    }
    createEmptyBox();
    hoverEachEmptyBox();
}

btnAddCol.onclick = () => {
    firstTable++;
    for(let i = 0; i < tagTR.length; i++) {
        tagTR[i].insertCell(0);
    }
    createEmptyBox();
    hoverEachEmptyBox();
}

const hoverEachEmptyBox = () => {
    for (let i = 0; i < tagTD.length; i++) {
        tagTD[i].onmouseenter = () => tagTD[i].style.background = 'black';
        tagTD[i].onmouseleave = () => tagTD[i].style.background = 'white';
    }
}
