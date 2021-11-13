"use strict"

let interval;

let hoursElement = getHtml("hours");
let minutesElement = getHtml("minutes");
let secondsElement = getHtml("seconds");

let resetBtn = getHtml("reset");
let start = getHtml("start");

let add_1_minutes = getHtml("add_minutes");

let timer = moment({ hour: 0, minute: 0, seconds: 0 });


add_1_minutes.addEventListener("click", () => {
    timer.add(1, "minutes");
    // test.diff(10, "minutes");
    let str = timer.minutes()
    setHtml(minutesElement, str);
});



function getHtml(id) {
    return document.getElementById(id);
}

function getConvertTime(value) {
    return value < 10 ? `0${value}:` : `${value}:`;
}

function setHtml(element, { hour = 0, minute = 0, seconds = 0 }) {
    hoursElement.textContent = getConvertTime(hour);
    minutesElement.textContent = getConvertTime(minute);
    secondsElement.textContent = seconds < 10 ? `0${seconds}:` : `${seconds}`;
}

