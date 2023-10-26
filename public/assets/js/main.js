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
if (JSON.parse(localStorage.getItem("dark-mode"))) {
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

    root.style.setProperty(
        "--progress-container-color",
        trocaColor.getPropertyValue("--dark-mode")
    );
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

    root.style.setProperty(
        "--progress-container-color",
        trocaColor.getPropertyValue("--light-mode")
    );
}

// Função de verificar se está em darkmode o contéudo da página html
function CheckDarkmode() {
    let isDark = JSON.parse(localStorage.getItem("dark-mode"));
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
    etapa10Tela1: "/views/etapa10/conteudo_inicial10.html",
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
function otrec(proxConteudo, index, id) {
    // Seleciona o elemento com a classe "otrec" (resposta correta) e todos os elementos com a classe "odarre" (respostas erradas)
    const respCertaDiv = document.querySelector(".otrec");
    const respErradaDiv = document.querySelectorAll(".odarre");

    // Seleciona o elemento com o ID "mensagem"
    const div = document.getElementById("mensagem");

    // Verifica se o elemento não tem a classe "msg-certa-cor"
    if (!div.classList.contains("msg-certa-cor")) {
        // Remove a classe "msg-incorrta-cor" se estiver presente
        if (div.classList.remove("msg-incorrta-cor")) {
            div.classList.remove("msg-incorrta-cor");
        }
        // Adiciona a classe "msg-certa-cor"
        div.classList.add("msg-certa-cor");
    }

    try {
        // Adiciona classes aos elementos de resposta certa e desabilita-os
        respCertaDiv.classList.add("btn-resp-certa");
        respCertaDiv.classList.add("disabled-btn");

        // Itera sobre os elementos de resposta errada e os desabilita
        Array.from(respErradaDiv).map((e) => e.classList.add("disabled-btn"));
    } catch {}

    // Define o conteúdo do elemento "mensagem"
    div.innerHTML = "Resposta Certa. Mandou bem.";

    // Atualiza a barra de progresso com base no índice
    progressBar(index);

    // Aguarda 1 segundo (1000 milissegundos) antes de executar algumas ações
    setTimeout(async() => {
        // Aguarda a troca de conteúdo
        await trocaConteudo(proxConteudo, id ? id : idConteudoEtapas);

        // Aguarda a atualização do link de conteúdo
        await linkAtualDoConteudo(proxConteudo);

        // Aguarda 10 milissegundos antes de executar CheckDarkmode
        setTimeout(CheckDarkmode, 10);
    }, 1000);

    // Se o número de tentativas for menor que 2, atualize-o para 2
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
        div.innerHTML = "";

        tentativas = tentativas - 1;

        div.innerHTML = `Resposta Incorreta. Tente novamente. ${tentativas} tentativa restante`;
    } else {
        tentativas = 2;

        div.innerHTML =
            "Que pena, você errou todas as tentativas. Vamos recomeçar os estudos desta etapa.";

        setTimeout(() => {
            recomecaEtapa(revisaoEtapa);
        }, 3000);
    }
}

// Função para redirecionar o usuário para recomeçar a etapa
function recomecaEtapa(link) {
    removePaginaAtual();
    location.replace(origin + link);
}

// Função assíncrona para avançar para o próximo conteúdo
async function btnAvancar(proxConteudo, index, id) {
    // Aguarda a conclusão da função trocaConteudo
    await trocaConteudo(proxConteudo, id ? id : idConteudoEtapas, () => {
        // Quando trocaConteudo é concluída, chama a função linkAtualDoConteudo
        linkAtualDoConteudo(proxConteudo);
    });

    //Chamar a função para atualiza a barra de progresso com base no índice fornecido
    progressBar(index);

    // Aguarda 10 milissegundos antes de executar CheckDarkmode
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
        return;
    }
    zoomLevel -= 10;
    zoomStorage(zoomLevel);
    document.body.style.zoom = zoomLevel.toString() + "%";
}

function progressBar(index) {
    index -= 1;
    // Definindo um array de cores para cada nível de progresso
    const arrayColor = [{
            1: "#E7322A",
            2: "#FF9B9B",
            // 3:  '10'
        },
        {
            1: "#F06222",
            2: "#F4926483",
            // 3:  '20'
        },
        {
            1: "#F59421",
            2: "#f8b463",
            // 3:  '30'
        },
        {
            1: "#e6cc00",
            2: "#eddb4c",
            // 3:  '40'
        },
        {
            1: "#C0CA35",
            2: "#d2d971",
            // 3:  '50'
        },
        {
            1: "#7DB341",
            2: "#a4c97a",
            // 3:  '60'
        },
        {
            1: "#41A24A",
            2: "#7abd80",
            // 3:  '70'
        },
        {
            1: "#1D988D",
            2: "#60b6af",
            // 3:  '80'
        },
        {
            1: "#0FAAC3",
            2: "#57c3d5",
            // 3:  '90'
        },
        {
            1: "#2591C2",
            2: "#66b2d4",
            // 3:  '100'
        },
    ];

    // Obtém o valor de progresso atual a partir de uma variável CSS usando getPropertyValue
    let progressValue = Number(
        trocaColor.getPropertyValue("--progress-value-root")
    );

    //   console.log(arrayColor[index]);

    // Verifica se progressValue é um número
    if (typeof progressValue == "number") {
        // Atualiza o progressValue com base no índice fornecido e em limites de progresso
        // Cada índice corresponde a uma quantidade diferente de aumento de progresso
        // Além disso, verifica se progressValue não ultrapassa os limites especificados
        if (index == 0 && progressValue <= 10) {
            progressValue += 1.11111;
        }
        if (index == 1 && progressValue <= 20) {
            progressValue += 0.83333;
        }
        if (index == 2 && progressValue <= 30) {
            progressValue += 0.38462;
        }
        if (index == 3 && progressValue <= 40) {
            progressValue += 1.42857;
        }
        if (index == 4 && progressValue <= 50) {
            progressValue += 3.33333;
        }
        if (index == 5 && progressValue <= 60) {
            progressValue += 0.45455;
        }
        if (index == 6 && progressValue <= 70) {
            progressValue += 0.33333;
        }
        if (index == 7 && progressValue <= 80) {
            progressValue += 0.33333;
        }
        if (index == 8 && progressValue <= 90) {
            progressValue += 0.21739;
        }
        if (index == 9 && progressValue <= 100) {
            progressValue += 0.20833;
        }

        // console.log(progressValue);

        // Arredonda o valor do progresso para um número inteiro
        root.style.setProperty(
            "--progress-value-root",
            "" + Math.floor(progressValue)
        );

        // Define as cores da barra de progresso e do contêiner com base no índice
        root.style.setProperty("--progress-color", arrayColor[index][1]);
        root.style.setProperty(
            "--progress-container-bg-color",
            arrayColor[index][2]
        );
    }
}

// Sweet Alert (Pop Up do botão "sobre"

const sobre = document.querySelector("#sobre-menu");
sobre.addEventListener("click", function() {
    swal({
        title: "Este é um projeto de uma interface Web de musicalização para pessoas surdas como tema do meu Trabalho de Conclusão de Curso.",
        text: "Desenvolvido por Allan Jorge Mendonça Ferreira Mendes",
        footer: "Universidade Federal do Pará - 2023",
        button: {
            text: "Voltar",
        }
    });
});