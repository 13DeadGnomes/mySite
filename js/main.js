/* Работает с подключение JQ, создаём переменные и второй переменной сообщаем что она теперь 2д холст */
let canvas = document.getElementById('noisy-canvas'),
    ctx = canvas.getContext('2d');
function main() {
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    render();
}
/*Генерирует шум, чем выше значение второго множителя, тем ярче шум*/
function getRandom() {
    return Math.random() * 25;
}
function render() {
    let imageData = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const color = getRandom();
        imageData.data[i]     = color;
        imageData.data[i + 1] = color;
        imageData.data[i + 2] = color;
        imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(render);
}
function updateCanvasSize() {
    ctx.canvas.height = canvas.offsetHeight;
    ctx.canvas.width  = canvas.offsetWidth;
}

let circle = document.querySelector('#circle'),
    ctxSecond = circle.getContext('2d');
let pi = Math.PI;

    ctxSecond.lineWidth = 2;
    ctxSecond.strokeStyle = "white";
    ctxSecond.arc(190, 190, 180, 0, 1.5*pi, false);
    ctxSecond.stroke();
main();