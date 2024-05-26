document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    });

    document.addEventListener('mousedown', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(2)';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });

    document.addEventListener('mouseup', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1)';
        cursor.style.width = '15px';
        cursor.style.height = '15px';
    });

    const audio = document.getElementById('background-music');
    document.body.addEventListener('click', () => {
        if (audio.play) {
            audio.play();
        }
    });
});
