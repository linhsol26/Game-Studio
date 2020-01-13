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

const radioBtn = document.getElementById('wall');

let firstTable = 10;


function setCellId() {
    tagTR = document.getElementsByTagName('tr');
    tagTD = document.getElementsByTagName('td');
    for(let i = 0; i < tagTR.length; i++){
        for(let j = 0; j < tagTR[i].cells.length; j++){
            tagTR[i].cells[j].id = i + "" + j;
        }
    }
    console.log(tagTR);
}
   
window.onload = () => {
    for(let i = 0; i < firstTable; i++) {
        let row = sandbox.insertRow(i);
        for(let i = 0; i < firstTable; i++) {
            let temp = row.insertCell(0);
            temp.className = "cells";
        }
    }
    createEmptyBox();
    hoverEachEmptyBox();
    setCellId();
}



const createEmptyBox = () => {
    for(let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.border = '1px solid black';
    }
}

btnAddRow.onclick = () => {
    let row = sandbox.insertRow(tagTR.length);
    for(let i = 0; i < firstTable; i++) {
        let emptyBox = row.insertCell(0);
        emptyBox.className = "cells";
    }
    createEmptyBox();
    hoverEachEmptyBox();
    setCellId() 
}

btnAddCol.onclick = () => {
    firstTable++;
    for(let i = 0; i < tagTR.length; i++) {
        let emptyBox = tagTR[i].insertCell(0);
        emptyBox.className = "cells";
    }
    createEmptyBox();
    hoverEachEmptyBox();
    setCellId() 
}

const hoverEachEmptyBox = () => {
    for (let i = 0; i < tagTD.length; i++) {
        tagTD[i].onmouseenter = () => tagTD[i].style.background = 'black';
        tagTD[i].onmouseleave = () => tagTD[i].style.background = 'white';
    }
}

btnDeleteRow.onclick = () => {
    tagTR[tagTR.length - 1].parentNode.removeChild(tagTR[tagTR.length - 1]);
}

btnDeleteCol.onclick = () => {
    for(let i = 0; i < tagTR.length; i++) {
        tagTR[i].removeChild(tagTR[i].children[tagTR[i].children.length - 1]);
    }
    hoverEachEmptyBox();
    firstTable--;
}


radioBtn.onclick = () => {
    for (let i = 0; i < tagTD.length; i++) {
        document.getElementsByClassName("cells")[i].style.cursor = "url(/Share/imagesGame/rungram/Object/Picture1.png) 1 1, auto";
    } 
}
