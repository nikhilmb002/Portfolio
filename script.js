const terminalContainer = document.getElementById('terminal-text');
const introOverlay = document.getElementById('intro-overlay');

const lines = [
    "[    0.000000] Booting Linux on ARM architecture...",
    "[    0.214532] Initializing kernel subsystems...",
    "[    0.482193] Loading device drivers...",
    "[    0.736421] Mounting root filesystem...",
    "[    1.102948] Starting system services...",
    "[    1.438221] Initializing user-space environment...",
    "[    1.792003] System initialization complete.",
    "Launching portfolio interface..."
];

let lineIdx = 0;

function typeTerminal() {
    if (lineIdx < lines.length) {

        const line = document.createElement('div');
        line.textContent = lines[lineIdx];

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        line.appendChild(cursor);

        terminalContainer.appendChild(line);
        lineIdx++;

        const delay = Math.random() * 200 + 120;
        setTimeout(typeTerminal, delay);

    } else {
        setTimeout(() => {
            introOverlay.classList.add('hidden');
            document.body.style.overflow = "auto";
            window.scrollTo(0, 0);

            setTimeout(() => {
                introOverlay.remove();
            }, 1000);

        }, 800);
    }
}

window.addEventListener('load', () => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    typeTerminal();
});
