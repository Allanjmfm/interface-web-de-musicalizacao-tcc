// Variável dark mode
const darkMode = document.querySelector("#dark-mode");
const contrast = document.querySelector("#dark-menu");

// Variável troca de conteúdo
const selecaoEtapa = document.querySelector("#btn_sel_etapas");

// IDs para trocas de conteudos
const mainContainer = "#main-container";
const idConteudoEtapas = "#conteudo-etapas";

// Variável para número de tentativas dos exercícios
let tentativas = 3;


// Função Dark Mode
function toggleDarkMode() {
    darkMode.classList.toggle("dark-mode");
    document.querySelector("#sobre-menu").classList.toggle("letra-light");
    document.querySelector("#home-menu").classList.toggle("letra-light");
    document.querySelector("#dark-menu").classList.toggle("letra-light");
    document.querySelector("#font-menu").classList.toggle("letra-light");
    document
        .querySelectorAll("button")
        .forEach((a) => a.classList.toggle("btn-dark-mode"));
    document.querySelector("footer").classList.toggle("footer-dark-mode");
}

// Função de verificar se está em darkmode o contéudo da página html
function CheckDarkmode() {
    if (darkMode.classList.contains("dark-mode")) {
        document.querySelectorAll("button").forEach((a) => {
            if (!a.classList.contains("btn-dark-mode")) {
                console.log("a");
                a.classList.add("btn-dark-mode");
            }
        });
    }
}


// Lista de objeto arquivo Json para os conteúdos iniciais de cada etapa
let telas = {
    telaInicial: "views/tela_inicial.html",
    selecaoEtapas: "views/selecao_etapas.html",
    etapa1Tela1: "/views/etapa1/conteudo_inicial1.html",
    etapa2Tela1: "/views/etapa2/conteudo_inicial2.html",
    etapa3Tela1: "/views/etapa3/conteudo_inicial3.html",
    etapa4Tela1: "/views/etapa4/conteudo_inicial4.html",
    etapa5Tela1: "/views/etapa5/conteudo_inicial5.html",
    etapa6Tela1: "/views/etapa6/conteudo_inicial6.html",
    etapa7Tela1: "/views/etapa7/conteudo_inicial7.html",
};

// // Função self-invoking para executar a tela inicial no index
// (async() => {
//   await trocaConteudo(telas.telaInicial, mainContainer);
// })()

// Função para selecionar as etapas
async function btnEtapa(linkTelaInicialEtapas) {
    await trocaConteudo(linkTelaInicialEtapas, mainContainer);
    setTimeout(CheckDarkmode, 10);
}

// A função "otrec" atualiza a aparência e conteúdo de um elemento de 
// mensagem em uma página da web quando uma resposta correta é dada, 
// verificando se o elemento não tem a classe "msg-certa-cor", 
// removendo a classe "msg-incorrta-cor" se ela existir, adicionando a classe 
// "msg-certa-cor" e definindo o conteúdo HTML interno como 
// "Resposta Certa. Mandou bem.".
function otrec(proxConteudo, id) {
    const respCertaDiv = document.querySelector(".otrec");
    const respErradaDiv = document.querySelectorAll(".odarre");
    const div = document.getElementById("mensagem");
    if (!div.classList.contains("msg-certa-cor")) {
        if (div.classList.remove("msg-incorrta-cor")) {
            div.classList.remove("msg-incorrta-cor");
        }
        div.classList.add("msg-certa-cor");
    }
    try {
        respCertaDiv.classList.add("btn-resp-certa");
        respCertaDiv.classList.add("disabled-btn");
        Array.from(respErradaDiv).map((e) => e.classList.add("disabled-btn"));
    } catch {}
    div.innerHTML = "Resposta Certa. Mandou bem.";
    setTimeout(async() => {
        await trocaConteudo(proxConteudo, id ? id : idConteudoEtapas)
        setTimeout(CheckDarkmode, 10);
    }, 1000);

    // Imposta tentativas a 3 se il valore corrente è inferiore a 3
    if (tentativas < 3){
        tentativas = 3;
    }
    // Se a pessoa acertar avança automaticamente para a próxima tela
    //A alternativa fica na cor verde
}

// A função "odarre" atualiza a aparência e conteúdo de um 
// elemento de mensagem em uma página da web quando uma resposta 
// incorreta é dada, verificando se o elemento não tem a classe 
// "msg-incorrta-cor", removendo a classe "msg-certa-cor" se ela existir, 
// adicionando a classe "msg-incorrta-cor" e definindo o conteúdo HTML interno como 
// "Resposta Incorreta. Tente novamente.".
async function odarre(revisaoEtapa) {
    const respCerta = document.querySelector(".otrec");
    const respErrada = document.querySelectorAll(".odarre");
    const div = document.getElementById("mensagem");
    if (!div.classList.contains("msg-incorrta-cor")) {
        if (div.classList.remove("msg-certa-cor")) {
            div.classList.remove("msg-certa-cor");
        }
        div.classList.add("msg-incorrta-cor");
    }

    if (tentativas != 1) {
        div.innerHTML = ''
        tentativas = tentativas - 1;
        div.innerHTML = `Resposta Incorreta. Tente novamente. ${tentativas} tentativas restantes`;
    } else {
        tentativas = 3;
        div.innerHTML = "Que pena, você errou todas as tentativas. Vamos recomeçar os estudos.";

        setTimeout(() => {
            recomecaEtapa(revisaoEtapa);
        }, 3000);
    }
    // A alternativa que a pessoa errou vai ser disabled e fica na cor vermelha
    // O usuário terá 3 tentativas, caso erre as três volta para o conteúdo inicial da etapa em que está
}

// Função para redirecionar o usuário para recomeçar a etapa
function recomecaEtapa(link) {
    location.replace(origin + link);
}


// função para avançar
async function btnAvancar(proxConteudo, id) {
    await trocaConteudo(proxConteudo, id ? id : idConteudoEtapas)
    setTimeout(CheckDarkmode, 10);
}

// função para voltar
async function btnVoltarEtapas(voltar, id) {
    await trocaConteudo(voltar, id ? id : idConteudoEtapas);
    setTimeout(CheckDarkmode, 10);
}