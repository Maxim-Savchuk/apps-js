const refs = {
    daysEl: document.getElementById("days"),
    hoursEl: document.getElementById("hours"),
    minsEl: document.getElementById("mins"),
    secondsEl: document.getElementById("seconds"),
}

const newYears = '1 January 2022';

function countdown() {
    const newYearsDate = new Date(newYears); 
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    refs.daysEl.innerHTML = days;
    refs.hoursEl.innerHTML = formatTime(hours);
    refs.minsEl.innerHTML = formatTime(mins);
    refs.secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);