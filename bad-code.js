"use strict"

/**Variables*/
let interval;

let daysElement = getHtml("days");
let hoursElement = getHtml("hours");
let minutesElement = getHtml("minutes");
let secondsElement = getHtml("seconds");

let reset = getHtml("reset");
let start = getHtml("start");

let add_1_minutes = getHtml("add_1_minutes");

let minutesVal = 0;
/**END**/



/**Event*/

add_1_minutes.addEventListener("click", () => {
    minutesVal += 1;
    let str = minutesVal < 10 ? `0${minutesVal}:` : `${minutesVal}:`;
    setHtml(minutesElement, str);
})

reset.addEventListener("click", () => {
    let nullString = "00";
    clearInterval(interval);
    setHtml(daysElement, `${nullString}:`);
    setHtml(hoursElement, `${nullString}:`);
    setHtml(minutesElement, `${nullString}:`);
    setHtml(secondsElement, `${nullString}`);
});

start.addEventListener("click", () => {
    let seconds = 60;
    interval = setInterval(() => {
        setMinutes(seconds -= 1);
        // setHtml(daysElement, `${new Date().getDate()}:`);
        // setHtml(hoursElement, `${new Date().getHours()}:`);
        // setHtml(minutesElement, `${new Date().getMinutes()}:`);
        // setHtml(secondsElement, `${new Date().getSeconds()}`);
    }, 1000)
});

/**END**/




/**Functions**/
function getHtml(id) {
    return document.getElementById(id);
}

function setHtml(element, str) {
    element.textContent = str;
}

function setMinutes(time) {
    if (minutesVal === 1) {
        setHtml(minutesElement, `00:`);
    }

    if (time === 0) {
        minutesVal -= 1;
        let str = minutesVal < 10 ? `0${minutesVal}:` : `${minutesVal}:`;
        setHtml(minutesElement, str);
    }
    setHtml(secondsElement, `${time}`);
}
/**END**/