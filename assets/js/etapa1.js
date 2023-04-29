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
};

const conteudoEtapa1 = "#conteudo-etapas";

let voltarEtapa1;
let conteudoAtual = conteudo_etapa1.conteudo1;
let proxConteudoEtapa1 = null;

function conteudoInicial() {
  trocaConteudo(conteudo_etapa1.conteudo1, conteudoEtapa1);
  setTimeout(CheckDarkmode, 10);
  //   setTimeout(document.getElementById("btn-voltar-context").innerHTML = "Voltar", 10
  //   )
}

function btnAvancar() {
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
    if (conteudoAtual == items.exercicio7) {
      proxConteudoEtapa1; //items.TELA INCIAL ETAPA 2;
    }
  });
  trocaConteudoEtapas(proxConteudoEtapa1, conteudoEtapa1);
  setTimeout(CheckDarkmode, 10);

  //   Este trecho de código em JavaScript verifica se o conteúdo
  //   atual da página é o exercício 7 da etapa 1. Se sim, ele atualiza
  //   o texto do botão de avançar para "Etapa 2". Caso contrário, ele
  //   atualiza o texto do botão de avançar para "Avançar".
  //   A função que contém este trecho de código deve ser acionada quando o
  //   usuário está navegando pela página e avança ou retorna para diferentes
  //   conteúdos da etapa 1.
  if (conteudoAtual == conteudo_etapa1.exercicio7) {
    document.getElementById("btn-avancar-context").innerHTML = "Etapa 2";
  } else {
    document.getElementById("btn-avancar-context").innerHTML = "Avançar";
  }

  //   Este trecho de código em JavaScript verifica se o conteúdo atual da página
  //   é o primeiro conteúdo da etapa 1. Se sim, ele atualiza o texto do botão de voltar para
  //   "Voltar para Etapas". Caso contrário, ele atualiza o texto do botão de voltar para
  //   "Voltar". A função que contém este trecho de código deve ser acionada quando o usuário
  //   está navegando pela página e retorna para diferentes conteúdos da etapa 1.
  if (conteudoAtual == conteudo_etapa1.conteudo1) {
    //aqui para troca texto no botom de voltar se o usuario esta na tela de etapa1 tela1
    document.getElementById("btn-voltar-context").innerHTML =
      "Voltar para Etapas";
  } else {
    document.getElementById("btn-voltar-context").innerHTML = "Voltar";
  }
}

// A função "voltarConteudoEtapa1" é um trecho de código em JavaScript que atualiza
// o conteúdo e o botão de volta de uma página da web quando o usuário clica no botão
// de voltar para retornar ao conteúdo da etapa 1.

// Para isso, a função verifica se o conteúdo atual é igual a um dos exercícios ou conteúdos
// da etapa 1 e, em seguida, define o conteúdo atual como o conteúdo anterior correspondente.
// Em seguida, a função chama a função "btnVoltarEtapas" para atualizar o conteúdo e o botão de
// volta com o conteúdo anterior.

// Se o conteúdo anterior for a tela de seleção de etapas, a função atualiza o botão de volta
// para mostrar "Voltar para Etapas", caso contrário, ele mostra "Voltar".
function voltarConteudoEtapa1() {
  //   conteudoAtual = voltarEtapa1;

  [conteudo_etapa1].map(function (items) {
    if (conteudoAtual == items.conteudo2) {
      voltarEtapa1 = items.conteudo1;
      conteudoAtual = voltarEtapa1;

      return;
    }
    if (conteudoAtual == items.exercicio1) {
      voltarEtapa1 = items.conteudo2;
      conteudoAtual = voltarEtapa1;
      return;
    }
    if (conteudoAtual == items.exercicio2) {
      voltarEtapa1 = items.exercicio1;
      conteudoAtual = voltarEtapa1;
      return;
    }
    if (conteudoAtual == items.exercicio3) {
      voltarEtapa1 = items.exercicio2;
      conteudoAtual = voltarEtapa1;
      return;
    }
    if (conteudoAtual == items.exercicio4) {
      voltarEtapa1 = items.exercicio3;
      conteudoAtual = voltarEtapa1;
      return;
    }
    if (conteudoAtual == items.exercicio5) {
      voltarEtapa1 = items.exercicio4;
      conteudoAtual = voltarEtapa1;
      return;
    }
    if (conteudoAtual == items.exercicio6) {
      voltarEtapa1 = items.exercicio5;
      conteudoAtual = voltarEtapa1;
      return;
    }
    if (conteudoAtual == items.exercicio7) {
      voltarEtapa1 = items.exercicio6;
      conteudoAtual = voltarEtapa1;
      return;
    }
  });

  if (voltarEtapa1 == telas.selecaoEtapas) {
    btnVoltarEtapas(voltarEtapa1, conteudo_etapa1, mainContainer);
  } else {
    btnVoltarEtapas(voltarEtapa1, conteudo_etapa1, conteudoEtapa1);
  }

  if (conteudoAtual == conteudo_etapa1.exercicio7) {
    document.getElementById("btn-avancar-context").innerHTML = "Etapa 2";
  } else {
    document.getElementById("btn-avancar-context").innerHTML = "Avançar";
  }

  if (voltarEtapa1 == conteudo_etapa1.conteudo1) {
    voltarEtapa1 = telas.selecaoEtapas;
    //aqui para troca texto no botom de voltar se o usuario esta na tela de etapa1 tela1
    document.getElementById("btn-voltar-context").innerHTML =
      "Voltar para Etapas";
  } else {
    document.getElementById("btn-voltar-context").innerHTML = "Voltar";
  }
}

// function Exercicio1Etapa1() {
//   verificaExercicio();
// }

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