let conteudo_etapa1 = {
    conteudo1: "views/etapa1/etapa1_tela1.html",
    conteudo2: "views/etapa1/etapa1_tela2.html",
    exercicio1: "views/etapa1/etapa1_exercicio1.html",
    exercicio2: "views/etapa1/etapa1_exercicio2.html",
    exercicio3: "views/etapa1/etapa1_exercicio3.html",
    exercicio4: "views/etapa1/etapa1_exercicio4.html",
    exercicio5: "views/etapa1/etapa1_exercicio5.html",
    exercicio6: "views/etapa1/etapa1_exercicio6.html",
    exercicio7: "views/etapa1/etapa1_exercicio7.html",
}


const conteudoEtapa1 = "#conteudo-etapas";

let voltarEtapa1;
let conteudoAtual = conteudo_etapa1.conteudo1;
let proxConteudoEtapa1 = null;

function conteudoInicial(){
    trocaConteudo(conteudo_etapa1.conteudo1, conteudoEtapa1);
}

function btnAvancar(){
    voltarEtapa1 = conteudoAtual;
    [conteudo_etapa1].map(function (items) {

        if (conteudoAtual == items.conteudo1) {
          proxConteudoEtapa1 = items.conteudo2; 
          conteudoAtual = proxConteudoEtapa1; 
          return;
        } 
        if (conteudoAtual == items.conteudo2) {
            proxConteudoEtapa1 = items.exercicio1; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        }
        if (conteudoAtual == items.exercicio1) {
            proxConteudoEtapa1 = items.exercicio2; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        }
        if (conteudoAtual == items.exercicio2) {
            proxConteudoEtapa1 = items.exercicio3; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        }
        if (conteudoAtual == items.exercicio3) {
            proxConteudoEtapa1 = items.exercicio4; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        }
        if (conteudoAtual == items.exercicio4) {
            proxConteudoEtapa1 = items.exercicio5; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        }
        if (conteudoAtual == items.exercicio5) {
            proxConteudoEtapa1 = items.exercicio6; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        }
        if (conteudoAtual == items.exercicio6) {
            proxConteudoEtapa1 = items.exercicio7; 
            conteudoAtual = proxConteudoEtapa1;
            return;
        } 
         //   if (conteudoAtual == items.exercicio7) {
    //     proxConteudoEtapa1 = items.TELA INCIAL ETAPA 2; 
    // } 
      });
    trocaConteudoEtapas(proxConteudoEtapa1, conteudoEtapa1);
}

function voltarConteudoEtapa1(){
    btnVoltarEtapas(voltarEtapa1, conteudo_etapa1, conteudoEtapa1);
    conteudoAtual = voltarEtapa1;
}


function Exercicio1Etapa1(){

    verificaExercicio();
}

// const respostaCorreta = "B"; // defina aqui a resposta correta do exercício
// const botões = document.querySelectorAll(".alternativa"); // selecione os botões das alternativas
// const mensagem = document.getElementById("mensagem"); // selecione o elemento HTML que exibirá a mensagem

// // adicione um evento de clique a cada botão de alternativa
// botões.forEach(function(botão) {
//   botão.addEventListener("click", function() {
//     // verifique se a alternativa selecionada é a resposta correta
//     if (this.value === respostaCorreta) {
//       mensagem.innerHTML = "Resposta correta!"; // exiba mensagem de acerto
//       setTimeout(function() {
//         // troque o conteúdo da div após um delay de 4 segundos
//         trocaConteudo(Exercicio1Etapa1());
//       }, 4000);
//     } else {
//       mensagem.innerHTML = "Resposta incorreta. Tente novamente."; // exiba mensagem de erro
//     }
//   });
// });