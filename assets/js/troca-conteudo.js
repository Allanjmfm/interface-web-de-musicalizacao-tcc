
function trocaConteudoEtapas(proxConteudo, id){
    trocaConteudo(proxConteudo, id);
}


function btnVoltarEtapas(voltar, conteudoLinks ,id) {
    console.log(voltar);
    const links = conteudoLinks;
    trocaConteudo(voltar, id);
    setTimeout(CheckDarkmode, 10);
  
  
    if (voltar == links.conteudo1) {
      telaAnterior = null;
      return;
    }
    
    if (telaAnterior) {
      voltar = telaAnterior;
      [links].map(function (conteudo) {
        if (telaAnterior == conteudo.conteudo2) {
          telaAnterior = conteudo.conteudo1;
          return;
        } 
      });
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