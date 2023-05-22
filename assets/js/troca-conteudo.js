
function trocaConteudoEtapas(proxConteudo, id){
    trocaConteudo(proxConteudo, id);
}

// Script Troca de Conteúdo
async function trocaConteudo(arquivo,id, cb ) {
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