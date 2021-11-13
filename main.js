"use strict"

/**Variables*/
let interval;

let daysElement = getHtml("days");
let hoursElement = getHtml("hours");
let minutesElement = getHtml("minutes");
let secondsElement = getHtml("seconds");

let resetBtn = getHtml("reset");
let start = getHtml("start");

let addMinutes = getHtml("add_minutes");

let minutesVal = 0;
/**END**/




addMinutes.addEventListener("click", () => {
    minutesVal += 1;
    let str = minutesVal < 10 ? `0${minutesVal}:` : `${minutesVal}:`;
    setHtml(minutesElement, str);
})

resetBtn.addEventListener("click", () => {
   reset();
});

start.addEventListener("click", () => {
    setMinutes();
});





/**Functions**/
function getHtml(id) {
    return document.getElementById(id);
}

function setHtml(element, str) {
    element.textContent = str;
}

function setMinutes() {
    let value = 60;
    interval = setInterval(() => {
        if (minutesVal === 1) {
            minutesVal = 0;
            setHtml(minutesElement, `00:`);
        }

        if (value === 0 && minutesVal !== 0) {
            minutesVal -= 1;
            value = 59;
            let str = minutesVal < 10 ? `0${minutesVal}:` : `${minutesVal}:`;
            setHtml(minutesElement, str);
        }

        if (value === 0 && minutesVal === 0) {
            reset();
            return ;
        }

        value -= 1;
        let str = value < 10 ? `0${value}` : `${value}`;
        setHtml(secondsElement, str);
    }, 1000);
}


function reset() {
    let nullString = "00";
    minutesVal = 0;
    clearInterval(interval);
    setHtml(daysElement, `${nullString}:`);
    setHtml(hoursElement, `${nullString}:`);
    setHtml(minutesElement, `${nullString}:`);
    setHtml(secondsElement, `${nullString}`);
}
/**END**/

