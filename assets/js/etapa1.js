let conteudo_etapa1 = {
    conteudo1: "views/etapa1/etapa1_tela1.html",
    conteudo2: "views/etapa1/etapa1_tela2.html",
    // exercicio1:
    // exercicio2:
    // exercicio3:
    // exercicio4:
    // exercicio5:
    // exercicio6:
    // exercicio7:
}

// let proxConteudo = conteudo2;
const conteudoEtapa1 = "#conteudo-etapas";
// let proxConteudoEtapa1 = conteudo2;
let voltarEtapa1 

function conteudoInicial(){
    trocaConteudo(conteudo_etapa1.conteudo1, conteudoEtapa1);
}

function trocaConteudoEtapa1(){
    btnAvancar(conteudo_etapa1.conteudo2, conteudoEtapa1);
    voltarEtapa1 = conteudo_etapa1.conteudo1;
}

function voltarConteudoEtapa1(){
    btnVoltarEtapas(voltarEtapa1, conteudo_etapa1, conteudoEtapa1);
    // console.log(alert("teste"));
}