
function btnAvancar(proxConteudo, id){
    trocaConteudo(proxConteudo, id);
}

//async function  Ela permite que você escreva código assíncrono
// em um estilo síncrono.
function btnVoltarEtapas(voltar, conteudoLinks ,id) {
    console.log(voltar);
    const links = conteudoLinks;
    // Chamamos a func Troca Conteudo com algumento variavel voltar.
    // await para esperar que uma operação assíncrona termine
    // antes de continuar a execução da função
    trocaConteudo(voltar, id);
    setTimeout(CheckDarkmode, 10);
  
    // Se variavel volata == telainicial então a tela anterior recebe null.
    if (voltar == links.conteudo1) {
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
      [links].map(function (conteudo) {
        // Aqui verifiquei se tela aterior se sim a tela anterior
        // recebe endreço da tela inicial.
        if (telaAnterior == conteudo.conteudo2) {
          telaAnterior = conteudo.conteudo1;
          return;
        } /* else if (telaAnterior == conteudo.selecaoEtapas) {
          console.log(conteudo);
          return conteudo.telaInicial;
        } */
      });
      //console.log(telaAnterior);
    }
  }


// Script Troca de Conteúdo
function trocaConteudo(arquivo,id, cb ) {
    let xhttp;
    // const mainContainer = document.querySelector('#main-container');
    const mainContainer = document.querySelector(id);
    // arquivo
    //  = mainContainer.getAttribute("conteudo");
    if (arquivo){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                mainContainer.innerHTML = this.responseText;
                // mainContainer.removeAttribute("conteudo");
                trocaConteudo(cb);
            }
        }
        xhttp.open("GET", arquivo, true);
        xhttp.send();
        return;
    }
    if (cb) cb();
}