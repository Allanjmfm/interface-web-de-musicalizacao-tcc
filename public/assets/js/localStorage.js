// Local Storage para o dark mode.
// Verifica se a chave 'dark-mode' não existe no armazenamento local
if (localStorage.getItem('dark-mode') === null) {
    // Se a chave 'dark-mode' não existe, define o valor 'false' (modo claro) para ela
    localStorage.setItem('dark-mode', false);
}


// Definição de uma função assíncrona chamada toggleDarkMode
async function toggleDarkMode() {
    // Obtém o valor do armazenamento local associado à chave 'dark-mode'
    let isDark = await localStorage.getItem('dark-mode');

    // Verifica se o valor do 'dark-mode' é verdadeiro (true)
    if (JSON.parse(isDark)) {
        // Define o valor 'false' (falso) para a chave 'dark-mode' no armazenamento local
        await localStorage.setItem('dark-mode', false);

        // Chama a função assíncrona 'removeDarkMode' para remover o modo escuro
        await removeDarkMode();
    } else {
        // Define o valor 'true' (verdadeiro) para a chave 'dark-mode' no armazenamento local
        await localStorage.setItem('dark-mode', true);

        // Chama a função assíncrona 'addDarkMode' para adicionar o modo escuro
        await addDarkMode();
    }
}

// Configura um intervalo para verificar o estado de prontidão do documento e as condições de armazenamento local
let stateCheck = setInterval(async() => {
    // Verifica se o documento está totalmente carregado
    if (document.readyState === 'complete') {
        // Verifica se um item específico existe no armazenamento local
        if (localStorage.getItem('conteudoAtual') !== null) {
            // Recupera o valor associado à chave 'conteudoAtual' do armazenamento local
            let conteudoLink = localStorage.getItem('conteudoAtual');

            // Chama uma função 'trocaConteudo' com os valores recuperados e uma função de retorno
            await trocaConteudo(conteudoLink, idConteudoEtapas, () => {
                // Uma vez que a ação seja executada, limpa o intervalo para parar de verificar
                clearInterval(stateCheck);
            });
        }

        if (localStorage.getItem("zoom") !== null) {
            const zoomLocal = localStorage.getItem("zoom");
            document.body.style.zoom = zoomLocal.toString() + "%";
            if (zoomLevel === 100) {
                zoomLevel = parseInt(zoomLocal);
            }
        }
    }
    // O documento ainda não está totalmente pronto, continue verificando
}, 10);

// Para guardar a página que o usuário ficou.
// Definição de uma função chamada paginaAtual
function paginaAtual() {
    // Obtém a URL atual da janela do navegador
    let telaAtualLink = window.location.href;

    // Define um valor no armazenamento local com a chave 'pagina-atual'
    localStorage.setItem('pagina-atual', telaAtualLink);
}

// Função para armazenar o link atual do conteúdo
function linkAtualDoConteudo(link) {
    localStorage.setItem('conteudoAtual', link);
}

// Função para remover informações da página atual e conteúdo atual do armazenamento local
function removePaginaAtual() {
    localStorage.removeItem('pagina-atual');
    localStorage.removeItem('conteudoAtual');
}

function zoomStorage(zoom) {
    localStorage.setItem('zoom', zoom);
}