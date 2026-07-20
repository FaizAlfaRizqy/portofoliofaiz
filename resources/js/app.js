let elapsedSeconds = 0;
let minutes = 0;

document.addEventListener('DOMContentLoaded', function () {
    const timerValue = document.getElementById('timer-value');

    if (timerValue) {
        timerValue.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (elapsedSeconds < 10 ? '0' : '') + elapsedSeconds;

        function updateTimer() {
            elapsedSeconds++;

            if (elapsedSeconds >= 60) {
                elapsedSeconds = 0;
                minutes++;
            }

            timerValue.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (elapsedSeconds < 10 ? '0' : '') + elapsedSeconds;
        }

        setInterval(updateTimer, 1000);
    }

    const hiasan = document.getElementById('hiasan');
    const heroSection = document.getElementById('hero');
    const aboutSection = document.getElementById('about');

    if (!hiasan || !heroSection || !aboutSection) {
        return;
    }

    const updateHiasanVisibility = function () {
        const viewportMiddle = window.innerHeight / 2;
        const aboutRect = aboutSection.getBoundingClientRect();
        const heroRect = heroSection.getBoundingClientRect();

        const isAboutActive = aboutRect.top <= viewportMiddle && aboutRect.bottom >= viewportMiddle;
        const isHeroActive = heroRect.top <= viewportMiddle && heroRect.bottom >= viewportMiddle;

        if (isAboutActive) {
            hiasan.classList.add('is-visible');
        } else if (isHeroActive) {
            hiasan.classList.remove('is-visible');
        }
    };

    updateHiasanVisibility();
    window.addEventListener('scroll', updateHiasanVisibility, { passive: true });
    window.addEventListener('resize', updateHiasanVisibility);
});