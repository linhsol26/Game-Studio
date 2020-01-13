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

drawBoard(5, 5);
