// EF'Ride - scripts/script.js

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    const numberElement = counter.querySelector('.number');
    if (numberElement) {
        const targetNumber = parseInt(numberElement.textContent);
        const animationDuration = 2000;
        const framesPerSecond = 60;
        const frameDuration = Math.round(animationDuration / framesPerSecond);

        let currentNumber = 0;
        let frame = 0;

        function updateCounter() {
            const progress = frame / (animationDuration / frameDuration);
            const increment = Math.floor(targetNumber * progress);

            if (currentNumber < targetNumber) {
                numberElement.textContent = increment;
                currentNumber = increment;
                frame++;
                requestAnimationFrame(updateCounter);
            } else {
                numberElement.textContent = targetNumber;
            }
        }

        updateCounter();
    }
});

/******************************************************/
