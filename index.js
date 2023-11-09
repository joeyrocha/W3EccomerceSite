        // Function to add the "shaking" class to start the animation
        function shakeElement() {
            const pencilElement = document.getElementById('shake-me');
            pencilElement.classList.add('shaking');

            // Remove the shaking class after the animation duration
            setTimeout(() => {
                pencilElement.classList.remove('shaking');
            }, 500); // 500ms is the duration of the animation
        }

        // Automatically trigger the shake animation when the page loads
        window.addEventListener('load', () => {
            shakeElement();

            // Repeatedly trigger the animation every 10 seconds
            setInterval(shakeElement, 7000); // 10,000ms = 10 seconds
        });