"use strict"

let interval;

let start = getHtmlById("start");
let resetBtn = getHtmlById("reset");
let hoursElement = getHtmlById("hours");
let minutesElement = getHtmlById("minutes");
let secondsElement = getHtmlById("seconds");
let add_1_minutes = getHtmlById("add_minutes");
let add_5_minutes = getHtmlById("add_5_minutes");
let add_10_minutes = getHtmlById("add_10_minutes");
let add_30_minutes = getHtmlById("add_30_minutes");

let add_hour = getHtmlById("add_hour");

let timer = moment({ h: 0, m: 0, s: 0, ms: 0});

add_1_minutes.addEventListener("click", () => {
    timer.add(1, "minutes");
    setHtml({ hours: timer.hours() ,minutes: timer.minutes() });
});

add_5_minutes.addEventListener("click", () => {
    timer.add(5, "minutes");
    setHtml({ hours: timer.hours() ,minutes: timer.minutes() });
});

add_10_minutes.addEventListener("click", () => {
    timer.add(10, "minutes");
    setHtml({ hours: timer.hours() ,minutes: timer.minutes() });
});

add_30_minutes.addEventListener("click", () => {
    timer.add(30, "minutes");
    setHtml({ hours: timer.hours() ,minutes: timer.minutes() });
});

add_hour.addEventListener("click", () => {
    timer.add(1, "hours");
    setHtml({ hours: timer.hours() });
});

start.addEventListener("click", () => {
    interval = setInterval(() => {
        timer.subtract(1, "seconds");
        let hours = timer.hours();
        let minutes = timer.minutes();
        let seconds = timer.seconds();

        if (hours === 0 && minutes === 0 && seconds === 0) {
            stopTimer();
            return;
        }

        setHtml({ hours , minutes, seconds })
    }, 1000);
});

resetBtn.addEventListener("click", () => {
    stopTimer();
})


function setHtml({ hours = 0, minutes = 0, seconds = 0 }) {
    hoursElement.textContent = getConvertTime(hours);
    minutesElement.textContent = getConvertTime(minutes);
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;
}

function stopTimer() {
    clearInterval(interval);
    timer.hours(0);
    timer.minutes(0);
    timer.seconds(0);
    setHtml({ hours: timer.hours(), minute: timer.minutes(), seconds: timer.seconds() });
}

function getHtmlById(id) {
    return document.getElementById(id);
}

function getConvertTime(value) {
    return value < 10 ? `0${value}:` : `${value}:`;
}
