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
// selecaoEtapa.addEventListener("click", (e)=>{
//     if(e.type == 'click'){
//         console.log(selecaoEtapa);
//         trocaConteudo("views/selecao_etapas.html");
//         console.log(e);
//         // voltar=document.querySelector("#btn_voltar");
//     }
// });
// function voltar(){
    
//     trocaConteudo("views/tela_inicial.html");
        
// };
let telas =[{
    "telaInicial": "/views/tela_inicial.html"},
    {"selecaoEtapas": "/views/selecao_etapas.html"},
    {"testeEtapa1" : "/views/etapa1/teste_etapa1.html"},
    {"testeArray" : "/views/etapa1/teste_etapa1_1.html"}
]

let voltar;
let telaAnterior = null;
// const telaInicial = "/views/tela_inicial.html"
// const selecaoEtapas = "/views/selecao_etapas.html"
// const testeEtapa1 = "/views/etapa1/teste_etapa1.html"


trocaConteudo(telas[0].telaInicial);

function btnSelEtapas(){
    voltar = telas[0].telaInicial;
    trocaConteudo(telas[1].selecaoEtapas);
}

function btnVoltar(){
    trocaConteudo( voltar);
    if(telaAnterior){
        voltar = telaAnterior;
        telaAnterior = telas.map((conteudo, index)=>{
            if(telaAnterior==conteudo.selecaoEtapas){
                return conteudo.telaInicial;
            }
        })
        console.log(telaAnterior);

    }
}
function btnEtapa1(){
    telaAnterior = voltar;
    voltar = telas[1].selecaoEtapas;
    trocaConteudo(telas[2].testeEtapa1);
}
function btnTesteArray(){
    telaAnterior = voltar;
    voltar = telas[2].testeEtapa1;
    trocaConteudo(telas[3].testeArray);
}
