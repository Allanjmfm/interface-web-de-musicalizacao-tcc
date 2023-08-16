// Função que chama a função trocaConteudo com os argumentos passados
function trocaConteudoEtapas(proxConteudo, id) {
    trocaConteudo(proxConteudo, id);
}

// Script para troca de conteúdo
async function trocaConteudo(arquivo, id, cb) {
    let xhttp;
    // Obtém o elemento do DOM com o id especificado
    const mainContainer = document.querySelector(id);

    if (arquivo) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Define o conteúdo do elemento com a resposta do servidor
                mainContainer.innerHTML = this.responseText;
                // Chama a função trocaConteudo passando a função de retorno como argumento
                trocaConteudo(cb);
            }
        }
        xhttp.open("GET", arquivo, true);
        xhttp.send();
        return cb() ? cb : ""; // Retorna a função de retorno ou uma string vazia
    }

    // Se uma função de retorno (callback) for fornecida, executa-a
    if (cb) {
        cb();
    }
}