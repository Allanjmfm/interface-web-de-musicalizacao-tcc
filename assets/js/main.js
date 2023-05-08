// Variável dark mode
const darkMode = document.querySelector("#dark-mode");
const contrast = document.querySelector("#dark-menu");

// Variável troca de conteúdo
const selecaoEtapa = document.querySelector("#btn_sel_etapas");

// IDs para trocas de conteudos
const mainContainer = "#main-container";


// Dark Mode
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


let telas = {
  telaInicial: "views/tela_inicial.html",
  selecaoEtapas: "views/selecao_etapas.html",
  etapa1Tela1: "views/etapa1/conteudo_inicial.html",
  etapa1Tela2: "views/etapa1/etapa1_tela2.html",
  etapa2Tela1: "views/etapa2/conteudo_inicial2.html"
};

// Variável que receber tela anterior para ajudar
// o usuaro para navigar para tele anterior.
let voltar;
let telaAnterior = null;
(async() => {
  await trocaConteudo(telas.telaInicial, mainContainer);
})()
//async function  Ela permite que você escreva código assíncrono
// em um estilo síncrono.
async function btnVoltar() {
  // Chamamos a func Troca Conteudo com algumento variavel voltar.
  // await para esperar que uma operação assíncrona termine
  // antes de continuar a execução da função
  await trocaConteudo(voltar, mainContainer);
  setTimeout(CheckDarkmode, 10);

  // Se variavel volata == telainicial então a tela anterior recebe null.
  if (voltar == telas.telaInicial) {
    telaAnterior = null;
    // setTimeout(CheckDarkmode, 10);
    return;
  }
  // aqui se tela anterior não é null.
  if (telaAnterior) {
    // variavel voltar receber tela anterior.
    voltar = telaAnterior;

    // Coloquei "telas" em colchetes porque o a func map só funciona
    // arry, `[]` representa um array vazio em JavaScript.
    // Um array é uma estrutura de dados que pode armazenar
    // múltiplos valores em uma única variável.
    [telas].map(function (conteudo) {
      // Aqui verifiquei se tela aterior se sim a tela anterior
      // recebe endreço da tela inicial.
      if (telaAnterior == conteudo.selecaoEtapas) {
        telaAnterior = conteudo.telaInicial;
        return;
      } /* else if (telaAnterior == conteudo.selecaoEtapas) {
        console.log(conteudo);
        return conteudo.telaInicial;
      } */
    });
    //console.log(telaAnterior);
  }
}

async function btnSelEtapas() {
  voltar = telas.telaInicial;
 await trocaConteudo(telas.selecaoEtapas, mainContainer);
  setTimeout(CheckDarkmode, 10);
}

async function btnEtapa1() {
  // telaAnterior = voltar;
  voltarEtapa1 = telas.selecaoEtapas;
 await trocaConteudo(telas.etapa1Tela1, mainContainer);
  // setTimeout(CheckDarkmode, 10);
  setTimeout(conteudoInicial, 100);
}
async function btnEtapa2() {
  // telaAnterior = voltar;
  voltar = telas.testeEtapa1;
 await trocaConteudo(telas.etapa2Tela1, mainContainer);
  setTimeout(conteudoInicialEtapa2, 100);
}

// Função de verificar se está em darkmode o contéudo da página html
function CheckDarkmode() {
  if (darkMode.classList.contains("dark-mode")) {
    document.querySelectorAll("button").forEach((a) => {
      if (!a.classList.contains("btn-dark-mode")) {
        console.log("a");
        a.classList.add("btn-dark-mode");
      }
      // else{
      //   a.classList.remove("btn-dark-mode");
      // }
    });
  }
}

// A função "otrec" atualiza a aparência e conteúdo de um elemento de 
// mensagem em uma página da web quando uma resposta correta é dada, 
// verificando se o elemento não tem a classe "msg-certa-cor", 
// removendo a classe "msg-incorrta-cor" se ela existir, adicionando a classe 
// "msg-certa-cor" e definindo o conteúdo HTML interno como 
// "Resposta Certa. Mandou bem.".
function otrec() {
  const div = document.getElementById("mensagem");
  if (!div.classList.contains("msg-certa-cor")) {
    if(div.classList.remove("msg-incorrta-cor")){
      div.classList.remove("msg-incorrta-cor");
    }
    div.classList.add("msg-certa-cor");
  }
  div.innerHTML = "Resposta Certa. Mandou bem.";
}

// A função "odarre" atualiza a aparência e conteúdo de um 
// elemento de mensagem em uma página da web quando uma resposta 
// incorreta é dada, verificando se o elemento não tem a classe 
// "msg-incorrta-cor", removendo a classe "msg-certa-cor" se ela existir, 
// adicionando a classe "msg-incorrta-cor" e definindo o conteúdo HTML interno como 
// "Resposta Incorreta. Tente novamente.".
function odarre() {
  const div = document.getElementById("mensagem");
  if (!div.classList.contains("msg-incorrta-cor")) {
    if(div.classList.remove("msg-certa-cor")){
      div.classList.remove("msg-certa-cor");
    }
    div.classList.add("msg-incorrta-cor");
  }
  div.innerHTML = "Resposta Incorreta. Tente novamente.";
}

// função para avançar
async function btnAvancar(proxConteudo) {
 await trocaConteudo(proxConteudo, idConteudoEtapas)
  setTimeout(CheckDarkmode, 10);
}

// função para volter entre etapas
async function btnVoltarEtapas(voltar, id) {
 await trocaConteudo(voltar, id? id: idConteudoEtapas);
  setTimeout(CheckDarkmode, 10);
}
