// Local Storage para o dark mode.
if (localStorage.getItem('dark-mode') === null) {
    localStorage.setItem('dark-mode', false);
}

async function toggleDarkMode() {
    let isDark = await localStorage.getItem('dark-mode');
    if (JSON.parse(isDark)) {
        await localStorage.setItem('dark-mode', false)
        await removeDarkMode();
    } else {
        await localStorage.setItem('dark-mode', true);
        await addDarkMode();
    }
}

// Para guardar a pagina que usuario ficou. 
function paginaAtual() {
    let conteudoAtualLink = window.location.href;
    localStorage.setItem('pagina-atual', conteudoAtualLink);
}