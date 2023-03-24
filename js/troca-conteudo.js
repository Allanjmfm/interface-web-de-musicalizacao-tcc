// Script Troca de Conteúdo
function trocaConteudo(arquivo, cb ) {
    let xhttp;
    const mainContainer = document.querySelector('#main-container');
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