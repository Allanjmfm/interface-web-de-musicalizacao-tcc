// Variável dark mode
const darkMode=document.querySelector("#dark-mode");
const contrast=document.querySelector("#dark-menu");

// Variável troca de conteúdo
const selecaoEtapa=document.querySelector("#btn_sel_etapas");
// const voltar=document.querySelector("#btn_voltar");

// Dark Mode
function toggleDarkMode(){
    darkMode.classList.toggle("dark-mode");
    document.querySelector("#sobre-menu").classList.toggle("letra-dark");
    document.querySelector("#home-menu").classList.toggle("letra-dark");
    document.querySelector("#dark-menu").classList.toggle("letra-dark");
    document.querySelector("#font-menu").classList.toggle("letra-dark");
}

contrast.addEventListener("click", toggleDarkMode());

// Scripts Troca de conteúdo
selecaoEtapa.addEventListener("click", (e)=>{
    if(e.type == 'click'){
        console.log(selecaoEtapa);
        trocaConteudo("views/selecao_etapas.html");
        // voltar=document.querySelector("#btn_voltar");
    }
});
function voltar(){
    
    trocaConteudo("views/tela_inicial.html");
        
};

// Botão Voltar tela inicial
function trocaConteudo(arquivo) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = xhr.responseText;
            document.getElementById("conteudo").innerHTML = response;
        }
    };
    xhr.open("GET", arquivo, true);
    xhr.send();
    return;
}

