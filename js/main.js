/* Работает с подключение JQ, создаём переменные и второй переменной сообщаем что она теперь 2д холст */
let canvas = document.getElementById('noisy-canvas'),
    ctx = canvas.getContext('2d');

let lightSh = 25;

let btnLight = document.querySelector('.light');
let h1Text = document.querySelectorAll('h1');
let h2Text = document.querySelectorAll('h2');
let h3Text = document.querySelectorAll('h3');
let pText = document.querySelectorAll('p');
let squareLeft = document.querySelector('.squareLeft');

function replacement() {
    for (let h1 of h1Text) {
        h1.classList.toggle('textLight');
    }
    for (let h2 of h2Text) {
        h2.classList.toggle('textLight');
    }
    for (let h3 of h3Text) {
        h3.classList.toggle('textLight');
    }
    for (let p of pText) {
        p.classList.toggle('textLight');
    }
    squareLeft.classList.toggle('malevich');

}

btnLight.onclick = function () {
    btnLight.classList.toggle('lightON');
    if (lightSh > 25) {
        lightSh = 25;
        replacement();
    } else {
        lightSh = 255;
        replacement();
    }
}

function main() {
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    render();
}
/*Генерирует шум, чем выше значение второго множителя, тем ярче шум*/
function getRandom() {
    return Math.random() * lightSh;
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

function formatDate() {
    let month = new Date();
    let mm = month.getMonth() + 1;
    if (mm < 10) {mm = '0' + mm;}

    switch (mm) {
        case '01':
            mm = 'января';
            break;
        case '02':
            mm = 'февраля';
            break;
        case '03':
            mm = 'марта';
            break;
        case '04':
            mm = 'Апреля';
            break;
        case '05':
            mm = 'мая';
            break;
        case '06':
            mm = 'июня';
            break;
        case '07':
            mm = 'июля';
            break;
        case '08':
            mm = 'августа';
            break;
        case '09':
            mm = 'сентября';
            break;
        case '10':
            mm = 'октября';
            break;
        case '11':
            mm = 'ноября';
            break;
        case '12':
            mm = 'декабря';
            break;
    }

    return mm;
}

let dateNow = document.querySelector('.date');
let date = new Date();
dateNow.innerHTML = date.getDate();

let month = document.querySelector('.monthText');
month.innerHTML = formatDate();
