const panels = document.querySelectorAll('.panel');

function openPanel() {
    const panelClasses = [... this.classList];
    if (panelClasses.includes('open')) {
        this.classList.remove('open');
    } else {
        panels.forEach(panel => panel.classList.remove('open'));
        this.classList.add('open');
    }
}

panels.forEach(panel => panel.addEventListener('click', openPanel));