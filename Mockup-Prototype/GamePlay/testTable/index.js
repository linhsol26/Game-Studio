const sandbox = document.getElementById('sandbox');
const tagTD = document.getElementsByTagName('td');
const tagTR = document.getElementsByTagName('tr');
const btnAddRow = document.getElementById('btn-add-row');
const btnAddCol = document.getElementById('btn-add-col');

const btnDeleteRow = document.getElementById('btn-delete-row');
const btnDeleteCol = document.getElementById('btn-delete-col');

let firstTable = 10;

for (let i = 0; i < firstTable; i++) {
    let row = sandbox.insertRow(i);
    for (let i = 0; i < firstTable; i++) {
        let temp = row.insertCell(0);
        temp.className = "cells";
    }
}

const createEmptyBox = function() {
    for (let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.border = '1px solid black';
    }
}

btnAddRow.onclick = function () {
    let row = sandbox.insertRow(tagTR.length);
    for (let i = 0; i < firstTable; i++) {
        let temp = row.insertCell(0);
        temp.className = "cells";
    }
    createEmptyBox();
    hoverEachEmptyBox();
}

btnAddCol.onclick = function () {
    firstTable++;
    for (let i = 0; i < tagTR.length; i++) {
        let temp = tagTR[i].insertCell(0);
        temp.className = "cells";
    }
    createEmptyBox();
    hoverEachEmptyBox();
}

const hoverEachEmptyBox = function () {
    for (let i = 0; i < tagTD.length; i++) {
        tagTD[i].onmouseenter = () => tagTD[i].style.background = 'black';
        tagTD[i].onmouseleave = () => tagTD[i].style.background = 'white';
    }
}

console.log(sandbox);

btnDeleteRow.onclick = function () {
    tagTR[tagTR.length - 1].parentNode.removeChild(tagTR[tagTR.length - 1]);
}

btnDeleteCol.onclick = function () {
    for (let i = 0; i < tagTR.length; i++) {
        tagTR[i].removeChild(tagTR[i].children[tagTR[i].children.length - 1]);
    }
    hoverEachEmptyBox();
    firstTable--;
}
