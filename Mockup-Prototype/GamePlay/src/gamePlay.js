const turnOff = document.getElementById('turn-off');
const bodyStyle = document.body.style;

turnOff.onclick = () => {
    bodyStyle.animation = 'turn-off 2s 1 both';
}