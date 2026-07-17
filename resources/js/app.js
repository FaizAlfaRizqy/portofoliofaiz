let elapsedSeconds = 0;
let minutes = 0;

document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("timer-value").textContent = minutes + ":" + elapsedSeconds;
    });

function updateTimer() {
    elapsedSeconds++;
    if (elapsedSeconds >= 60) {
        elapsedSeconds = 0;
        minutes++;
    }
    document.getElementById("timer-value").textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (elapsedSeconds < 10 ? "0" : "") + elapsedSeconds;
}

setInterval(updateTimer, 1000);