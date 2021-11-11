"use strict"

let interval;

let days = getHtml("days");
let hours = getHtml("hours");
let minutes = getHtml("minutes");
let seconds = getHtml("seconds");

let reset = getHtml("reset");
let start = getHtml("start");

reset.addEventListener("click", () => {
    clearInterval(interval);
    setHtml(days, "00:");
    setHtml(hours, "00:");
    setHtml(minutes, "00:");
    setHtml(seconds, "00");
});

start.addEventListener("click", () => {
    interval = setInterval(() => {
        setHtml(days, `${new Date().getDate()}:`);
        setHtml(hours, `${new Date().getHours()}:`);
        setHtml(minutes, `${new Date().getMinutes()}:`);
        setHtml(seconds, `${new Date().getSeconds()}`);
    }, 1000)
});

function getHtml(id) {
    return document.getElementById(id);
}

function setHtml(element, str) {
    element.textContent = str;
}
