const container = document.querySelector('.hex-container');
const cols = Math.floor(window.innerWidth / 130);
const rows = Math.floor(window.innerHeight / 115);

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const hex = document.createElement('div');
        hex.classList.add('hex');
        hex.style.animationDelay = `${(col + row) * 50}ms`;
        container.appendChild(hex);
    }
}

// Mouse trail color effect
let hue = 0;
container.addEventListener('mousemove', (e) => {
    const hexes = document.querySelectorAll('.hex');
    hexes.forEach(hex => {
        const rect = hex.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
            hex.style.background = `hsl(${hue}, 80%, 60%)`;
            hex.style.boxShadow = `0 0 20px hsl(${hue}, 80%, 60%)`;
        } else {
            hex.style.background = '#222';
            hex.style.boxShadow = 'none';
        }
    });
    hue += 2;
    if (hue >= 360) hue = 0;
});

// Resize handler
window.addEventListener('resize', () => location.reload());
