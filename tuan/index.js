let table = document.getElementById("table");

function drawBoard(rows, colums) {
    for(let i = 0; i < rows; i++){
        let tr = document.createElement("tr");
        for(let j = 0; j < colums; j++){    
            let td = document.createElement("td");
            let btn = document.createElement("button");
            btn.setAttribute("class", "btn");
            td.appendChild(btn);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

let btn = document.getElementsByClassName("btn");

function drawCell() {
    for(let i = 0; i < btn.length; i++){
        btn[i].style.width = "50px";
        btn[i].style.height = "50px";
        btn[i].style.border = "none";
    }
}

drawBoard(5, 5);
drawCell();
