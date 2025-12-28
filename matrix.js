const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const charecters = 'アァイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}
function draw() {
    // Black background with opacity to create trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = charecters.charAt(Math.floor(Math.random() * charecters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(draw, 33);
const namespan = document.getElementById('userName');
const savedname = localStorage.getItem('userName');
if (savedname) {
    namespan.innerText = savedname;
    } 
namespan.addEventListener('blur', () => {
    localStorage.setItem('userName', namespan.innerText);
});
namespan.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        namespan.blur();
    }
});
namespan.addEventListener('focus', () => {
    const range = document.createRange();
    range.selectNodeContents(namespan);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
});
namespan.addEventListener('click', () => {
    if (namespan.innerText === 'HACKER') {
        namespan.innerText = '';
    }  
});
function updateclock() {
    const clockElement = document.getElementById('system-clock');
    if(!clockElement) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateclock, 1000);
updateclock();