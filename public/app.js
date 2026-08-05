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

    // Scroll snap logic: snap between hero and about, free scroll after about
    const html = document.documentElement;
    html.classList.add('snap-active');

    let snapEnabled = true;

    const updateSnapBehavior = function () {
        const aboutBottom = aboutSection.getBoundingClientRect().bottom;
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const threshold = window.innerHeight * 0.5;

        if (snapEnabled && aboutBottom < threshold) {
            // User scrolled past about — disable snap for free scroll
            html.classList.remove('snap-active');
            snapEnabled = false;
        } else if (!snapEnabled && aboutTop >= -threshold && aboutTop < window.innerHeight) {
            // User is scrolling back up near about — re-enable snap
            html.classList.add('snap-active');
            snapEnabled = true;
        }
    };

    window.addEventListener('scroll', updateSnapBehavior, { passive: true });
});