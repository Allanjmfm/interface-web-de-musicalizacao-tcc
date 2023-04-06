// Variável dark mode
const darkMode=document.querySelector("#dark-mode");
const contrast=document.querySelector("#dark-menu");

// Variável troca de conteúdo
const selecaoEtapa=document.querySelector("#btn_sel_etapas");

// Dark Mode
function toggleDarkMode(){
    darkMode.classList.toggle("dark-mode");
    document.querySelector("#sobre-menu").classList.toggle("letra-light");
    document.querySelector("#home-menu").classList.toggle("letra-light");
    document.querySelector("#dark-menu").classList.toggle("letra-light");
    document.querySelector("#font-menu").classList.toggle("letra-light");
    document.querySelectorAll("button").forEach((a)=>a.classList.toggle("btn-dark-mode"));
}

// contrast.addEventListener("click", toggleDarkMode());

var textIncreaseCount = 0;

function increaseTextSize() {
  var text = document.getElementById("text");
  var currentSize = parseInt(window.getComputedStyle(text).getPropertyValue("font-size"));
  var newSize = currentSize + 2;
  
  // Verifica se o texto já foi aumentado 3 vezes
  if (textIncreaseCount >= 3) {
    // Se sim, redefine o tamanho da fonte para o valor inicial (16 pixels)
    text.style.fontSize = "16px";
    // Zera a contagem
    textIncreaseCount = 0;
  } else {
    // Se não, aumenta o tamanho da fonte normalmente
    text.style.fontSize = newSize + "px";
    // Incrementa a contagem
    textIncreaseCount++;
  }
}

let telas = {
    telaInicial: "/views/tela_inicial.html",
    selecaoEtapas: "/views/selecao_etapas.html",
    testeEtapa1: "/views/etapa1/teste_etapa1.html",
    testeArray: "/views/etapa1/teste_etapa1_1.html",
  };

  // Variável que receber tela anterior para ajudar
  // o usuaro para navigar para tele anterior.
  let voltar;
  let telaAnterior = null;
  
  // const telaInicial = "/views/tela_inicial.html"
  // const selecaoEtapas = "/views/selecao_etapas.html"
  // const testeEtapa1 = "/views/etapa1/teste_etapa1.html"
  

  trocaConteudo(telas.telaInicial);
  
  function btnSelEtapas() {
    voltar = telas.telaInicial;
    trocaConteudo(telas.selecaoEtapas);
  }
  
  //async function  Ela permite que você escreva código assíncrono
  // em um estilo síncrono.
  async function btnVoltar() {
    // Chamamos a func Troca Conteudo com algumento variavel voltar.
    // await para esperar que uma operação assíncrona termine
    // antes de continuar a execução da função
    await trocaConteudo(voltar);
  
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
     setTimeout(CheckDarkmode, 10);
  }

  function btnEtapa1() {
    telaAnterior = voltar;
    voltar = telas.selecaoEtapas;
    trocaConteudo(telas.testeEtapa1);
  }
  function btnTesteArray() {
    telaAnterior = voltar;
    voltar = telas.testeEtapa1;
    trocaConteudo(telas.testeArray);
  }

   // Função de verificar se está em darkmode o contéudo da página html
   
