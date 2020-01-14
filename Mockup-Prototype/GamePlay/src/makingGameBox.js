var myCanvas = document.getElementById("place-canvas");
var ctx = myCanvas.getContext("2d");


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    let pos = getMousePos(myCanvas, ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(pos);
    ctx.drawImage(document.getElementById(data), pos.x, pos.y, 25, 25);
}



