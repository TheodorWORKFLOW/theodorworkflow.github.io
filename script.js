document.addEventListener("DOMContentLoaded", () => {
    const title = "Theodor's Story";
    let index = 0;
    const titleElement = document.getElementById('title');

    function typeEffect() {
        if (index < title.length) {
            titleElement.innerHTML += title.charAt(index);
            index++;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        document.body.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 217, 0, 0.3), rgba(0,0,0,0.7))`;
    });
});
