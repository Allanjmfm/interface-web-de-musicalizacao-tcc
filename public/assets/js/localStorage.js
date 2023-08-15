// Local Storage para o dark mode.
if (localStorage.getItem('dark-mode') === null) {
    localStorage.setItem('dark-mode', false);
}

let stateCheck = setInterval(async () => {
    if (document.readyState === 'complete') {
        if (localStorage.getItem('conteudoAtual') !== null) {
            let conteudoLink = localStorage.getItem('conteudoAtual');
            await trocaConteudo(conteudoLink, idConteudoEtapas, () => {
                console.log("kkf")
                clearInterval(stateCheck);
            });
        }
    }
    // document ready
}, 10);

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
    let telaAtualLink = window.location.href;
    // let conteudoLink = 
    localStorage.setItem('pagina-atual', telaAtualLink);
}

function linkAtualDoConteudo(link) {
    localStorage.setItem('conteudoAtual', link);
}

function removePaginaAtual() {
    localStorage.removeItem('pagina-atual');
    localStorage.removeItem('conteudoAtual');
}