"use strict"

let interval;

let hoursElement = getHtml("hours");
let minutesElement = getHtml("minutes");
let secondsElement = getHtml("seconds");

let resetBtn = getHtml("reset");
let start = getHtml("start");

let addMinutes = getHtml("add_minutes");

let timer = moment({ hour: 0, minute: 0, seconds: 0 });


addMinutes.addEventListener("click", () => {
    timer.add(1, "minutes");
    // test.diff(10, "minutes");
    let str = timer.minutes() < 10 ? `0${timer.minutes()}:` : `${timer.minutes()}:`
    setHtml(minutesElement, str);
    console.log(timer.minutes());
});



function getHtml(id) {
    return document.getElementById(id);
}

function setHtml(element, str) {
    element.textContent = str;
}

