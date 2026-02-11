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


