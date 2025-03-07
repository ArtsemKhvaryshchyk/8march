
const audio = document.getElementById('background-music');
audio.volume = 0.08;

document.body.addEventListener('click', () => {
    audio.play().catch(() => {
        document.addEventListener('click', () => audio.play(), { once: true });
    });
}, { once: true });


function createFlower() {
    const flowers = ['🌸', '🌺', '🌷', '💐', '🌼'];
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 6 + Math.random() * 6 + 's';
    flower.style.fontSize = 24 + Math.random() * 24 + 'px';
    document.body.appendChild(flower);
    
    setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 500);


const duration = 15 * 1000;
const animationEnd = Date.now() + duration;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const confettiInterval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) return clearInterval(confettiInterval);

    const particleCount = 50 * (timeLeft / duration);
    confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
    });
    confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
    });
}, 250);


document.body.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});