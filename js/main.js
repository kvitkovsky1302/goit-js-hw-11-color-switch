import {colors} from './colors.js';

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

let checkIndex;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColors = (arr) => {

    let colorsIndex = randomIntegerFromInterval(0, arr.length - 1);
    if (checkIndex === colorsIndex) {
        colorsIndex++;
    }

    refs.body.style.backgroundColor = colors[colorsIndex];
    checkIndex = colorsIndex;
};


const onChangeColorsInterval = () => {
    intervalId = setInterval(changeColors, 1000, colors)
    refs.startBtn.setAttribute("disabled", "disabled");
};

const onStopColorsInterval = () => {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute("disabled");
}

refs.startBtn.addEventListener('click', onChangeColorsInterval);
refs.stopBtn.addEventListener('click', onStopColorsInterval);