document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const audio = document.getElementById('background-music');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.width = '15px';
        cursor.style.height = '15px';
    });

    // Automatically play the audio when the page loads
    if (audio && typeof audio.play === 'function') {
        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    }
});
