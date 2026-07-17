
//buat timer
let elapsedSeconds = 0;
let minutes = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("timer-value").textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" + (elapsedSeconds < 10 ? "0" : "") + elapsedSeconds;

    const hiasan = document.getElementById("hiasan");
    const heroSection = document.getElementById("hero");
    const aboutSection = document.getElementById("about");

    const updateHiasanVisibility = function() {
        const viewportMiddle = window.innerHeight / 2;
        const isAboutActive =
            aboutSection.getBoundingClientRect().top <= viewportMiddle &&
            aboutSection.getBoundingClientRect().bottom >= viewportMiddle;
        const isHeroActive =
            heroSection.getBoundingClientRect().top <= viewportMiddle &&
            heroSection.getBoundingClientRect().bottom >= viewportMiddle;

        if (isAboutActive) {
            hiasan.classList.add("is-visible");
        } else if (isHeroActive) {
            hiasan.classList.remove("is-visible");
        }
    };

    updateHiasanVisibility();
    window.addEventListener("scroll", updateHiasanVisibility, { passive: true });
    window.addEventListener("resize", updateHiasanVisibility);
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