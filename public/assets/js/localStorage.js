if (localStorage.getItem('dark-mode') === null) {
    localStorage.setItem('dark-mode', false);
}


function toggleDarkMode() {
    let isDark = localStorage.getItem('dark-mode');
    if (JSON.parse(isDark)) {
        localStorage.setItem('dark-mode', false)
    } else {
        localStorage.setItem('dark-mode', true);
    }
}