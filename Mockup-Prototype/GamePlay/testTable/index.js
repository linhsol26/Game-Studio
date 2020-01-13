const sandbox = document.getElementById('sandbox');
const tagTD = document.getElementsByTagName('td');
const tagTR = document.getElementsByTagName('tr');

const btnAddRow = document.getElementById('btn-add-row');
const btnAddCol = document.getElementById('btn-add-col');

for(let i = 0; i < 5; i++) {
    let row = sandbox.insertRow(i);
    for(let i = 0; i < 5; i++) {
        row.insertCell(0);
    }
}

for(let i = 0; i < tagTD.length; i++) {
    tagTD[i].style.border = '1px solid';
    tagTD[i].setAttribute('class', 'hover-each-rect');
}

let count = 5;

btnAddRow.onclick = () => {
    let row = sandbox.insertRow(tagTR.length);
    for(let i = 0; i < count; i++) {
        row.insertCell(0);
    }
    for(let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.border = '1px solid';
        tagTD[i].setAttribute('class', 'hover-each-rect');
    }
}

btnAddCol.onclick = () => {
    count++;
    for(let i = 0; i < tagTR.length; i++) {
        tagTR[i].insertCell(0);
    }
    for(let i = 0; i < tagTD.length; i++) {
        tagTD[i].style.border = '1px solid';
        tagTD[i].setAttribute('class', 'hover-each-rect');
    }
}
