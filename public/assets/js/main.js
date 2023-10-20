// Variável dark mode
const darkMode = document.querySelector("#dark-mode");
const contrast = document.querySelector("#dark-menu");

// Variável root
const root = document.querySelector(":root");
const trocaColor = getComputedStyle(root);

// Variável troca de conteúdo
const selecaoEtapa = document.querySelector("#btn_sel_etapas");

// IDs para trocas de conteudos
const mainContainer = "#main-container";
const idConteudoEtapas = "#conteudo-etapas";

// Variável para número de tentativas dos exercícios
let tentativas = 2;

let zoomLevel = Math.round(window.devicePixelRatio * 100);

// Função Dark Mode
if (JSON.parse(localStorage.getItem('dark-mode'))) {
    addDarkMode();
} else {
    removeDarkMode();
}

//Função adicionar modo escuro
function addDarkMode() {
    darkMode.classList.add("dark-mode");
    document.querySelector("#sobre-menu").classList.add("letra-light");
    document.querySelector("#home-menu").classList.add("letra-light");
    document.querySelector("#dark-menu").classList.add("letra-light");
    document.querySelector("#font-menu").classList.add("letra-light");
    document
        .querySelectorAll("button")
        .forEach((a) => a.classList.add("btn-dark-mode"));
    document
        .querySelectorAll("a")
        .forEach((a) => a.classList.add("btn-dark-mode"));
    document.querySelector("footer").classList.add("footer-dark-mode");

    root.style.setProperty("--progress-container-color", trocaColor.getPropertyValue("--dark-mode"));
}

//Função remover modo escuro
function removeDarkMode() {
    darkMode.classList.remove("dark-mode");
    document.querySelector("#sobre-menu").classList.remove("letra-light");
    document.querySelector("#home-menu").classList.remove("letra-light");
    document.querySelector("#dark-menu").classList.remove("letra-light");
    document.querySelector("#font-menu").classList.remove("letra-light");
    document
        .querySelectorAll("button")
        .forEach((a) => a.classList.remove("btn-dark-mode"));
    document
        .querySelectorAll("a")
        .forEach((a) => a.classList.remove("btn-dark-mode"));
    document.querySelector("footer").classList.remove("footer-dark-mode");

    root.style.setProperty("--progress-container-color", trocaColor.getPropertyValue("--light-mode"));

}

// Função de verificar se está em darkmode o contéudo da página html
function CheckDarkmode() {
    let isDark = JSON.parse(localStorage.getItem('dark-mode'));
    if (isDark) {
        document.querySelectorAll("button").forEach((a) => {
            if (!a.classList.contains("btn-dark-mode")) {
                a.classList.add("btn-dark-mode");
            }
        });
        document.querySelectorAll("a").forEach((a) => {
            if (!a.classList.contains("btn-dark-mode")) {
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
    etapa8Tela1: "/views/etapa8/conteudo_inicial8.html",
    etapa9Tela1: "/views/etapa9/conteudo_inicial9.html",
    etapa10Tela1: "/views/etapa10/conteudo_inicial10.html"
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

// Função da alternativa correta nos exercícios
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
        await linkAtualDoConteudo(proxConteudo);
        setTimeout(CheckDarkmode, 10);
    }, 1000);

    if (tentativas < 2) {
        tentativas = 2;
    }
}

// Função da alternativa incorreta nos exercícios
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
        div.innerHTML = `Resposta Incorreta. Tente novamente. ${tentativas} tentativa restante`;
    } else {
        tentativas = 2;
        div.innerHTML = "Que pena, você errou todas as tentativas. Vamos recomeçar os estudos desta etapa.";

        setTimeout(() => {
            recomecaEtapa(revisaoEtapa);
        }, 3000);
    }
}

// Função para redirecionar o usuário para recomeçar a etapa
function recomecaEtapa(link) {
    location.replace(origin + link);
}


// função para avançar
async function btnAvancar(proxConteudo, id) {
    await trocaConteudo(proxConteudo, id ? id : idConteudoEtapas, () => {
        linkAtualDoConteudo(proxConteudo);
    });
    await setTimeout(CheckDarkmode, 10);
}

// função para voltar
async function btnVoltarEtapas(voltar, id) {
    await trocaConteudo(voltar, id ? id : idConteudoEtapas, () => {
        linkAtualDoConteudo(proxConteudo);
    });
    await setTimeout(CheckDarkmode, 10);
}



function zoomIn() {
    if (zoomLevel >= 200) {
        return;
    }
    zoomLevel += 10;
    zoomStorage(zoomLevel);
    document.body.style.zoom = zoomLevel.toString() + "%";

}

function zoomOut() {
    if (zoomLevel <= 70) {
        return
    }
    zoomLevel -= 10;
    zoomStorage(zoomLevel);
    document.body.style.zoom = zoomLevel.toString() + "%";

}

function progress(color) {
    const arrayColor = [{
        1: '#E7322A',
        2: '#FF9B9B',
    }, {
        1: '#F06222',
        2: '#f49164',
    }, {
        1: '#F59421',
        2: '#f8b463',
    }, {
        1: '#e6cc00',
        2: '#eddb4c',
    }, {
        1: '#C0CA35',
        2: '#d2d971',
    }, {
        1: '#7DB341',
        2: '#a4c97a',
    }, {
        1: '#41A24A',
        2: '#7abd80',
    }, {
        1: '#1D988D',
        2: '#60b6af',
    }, {
        1: '#0FAAC3',
        2: '#57c3d5',
    }, {
        1: '#2591C2',
        2: '#66b2d4',
    }]
    let progressValue = trocaColor.getPropertyValue("--progress-value");


    root.style.setProperty("--progress-color", "#F06222");
    root.style.setProperty("--progress-value", "20");
    root.style.setProperty("--progress-container-color", "black");
}