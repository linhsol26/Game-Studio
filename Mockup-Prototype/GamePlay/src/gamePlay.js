const turnOff = document.getElementById('turn-off');
const bodyStyle = document.body.style;

turnOff.onclick = () => {
    bodyStyle.animation = 'turn-off 2s 1 both';
}

const sandbox = document.getElementById('sandbox');
let tagTD = document.getElementsByTagName('td');
let tagTR = document.getElementsByTagName('tr');

const btnAddRow = document.getElementById('btn-add-row');
const btnAddCol = document.getElementById('btn-add-col');

const btnDeleteRow = document.getElementById('btn-delete-row');
const btnDeleteCol = document.getElementById('btn-delete-col');

const btnRadio = document.getElementById('wall');
const idEmptyBox = document.getElementById('#0');

let countRow = 10;
let countCol = 10;

let updateTagName = () => {
    tagTD = document.getElementsByTagName('td');
    tagTR = document.getElementsByTagName('tr');
    createEmptyBox();
    hoverEachEmptyBox();
}

let createEmptyBox = () => {
    for(let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.border = '1px solid black';
    }
}

let hoverEachEmptyBox = () => {
    for (let i = 0; i < tagTD.length; i++) {
        tagTD[i].onmouseenter = () => tagTD[i].style.background = 'black';
        tagTD[i].onmouseleave = () => tagTD[i].style.background = 'white';
    }
}
   
window.onload = () => {
    for(let i = 0; i < countRow; i++) {
        let row = sandbox.insertRow(i);
        for(let j = 0; j < countCol; j++) {
            let emptyBox = row.insertCell(-1);
            emptyBox.id = `${i} ${j}`;
        }
    }
    updateTagName();
}



btnAddRow.onclick = () => {
    let row = sandbox.insertRow(tagTR.length);
    countRow++;
    for(let j = 0; j < countCol; j++) {
        let emptyBox = row.insertCell(-1);
        emptyBox.id = `${countRow - 1} ${j}`;
    }
    updateTagName();
}

btnAddCol.onclick = () => {
    countCol++;
    for(let i = 0; i < tagTR.length; i++) {
        let emptyBox = tagTR[i].insertCell(-1);
        emptyBox.id = `${i} ${countCol - 1}`;
    }
    updateTagName();
}

btnDeleteRow.onclick = () => {
    tagTR[tagTR.length - 1].parentNode.removeChild(tagTR[tagTR.length - 1]);
    countRow--;
}

btnDeleteCol.onclick = () => {
    for(let i = 0; i < tagTR.length; i++) {
        tagTR[i].removeChild(tagTR[i].children[tagTR[i].children.length - 1]);
    }
    hoverEachEmptyBox();
    countCol--;
}

btnRadio.onchange = () => {
    for (let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.cursor = "url(./images/Picture1.png) 1 1, auto";
    }
}
