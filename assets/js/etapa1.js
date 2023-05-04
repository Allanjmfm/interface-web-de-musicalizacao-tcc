let conteudo_etapa1 =[
   "views/etapa1/etapa1_tela1.html",
   "views/etapa1/etapa1_tela2.html",
    "views/etapa1/etapa1_exercicio1.html",
    "views/etapa1/etapa1_exercicio2.html",
    "views/etapa1/etapa1_exercicio3.html",
    "views/etapa1/etapa1_exercicio4.html",
    "views/etapa1/etapa1_exercicio5.html",
    "views/etapa1/etapa1_exercicio6.html",
    "views/etapa1/etapa1_exercicio7.html",
 
]

let voltarEtapa1;
let conteudoAtual = conteudo_etapa1[0];
let proxConteudoEtapa1 = null;

function conteudoInicial() {
  trocaConteudo(conteudo_etapa1[0], conteudoEtapas);
  setTimeout(CheckDarkmode, 10);
}

// Se o conteúdo anterior for a tela de seleção de etapas, a função atualiza o botão de volta
// para mostrar "Voltar para Etapas", caso contrário, ele mostra "Voltar".
function voltarConteudoEtapas(anterior, arrayEtapas) {
  arrayEtapas.map((item, index)=>{
    if(anterior == index){
      trocaConteudo(item, conteudoEtapas);
      setTimeout(CheckDarkmode, 10);
    }
  });
}
//   [conteudo_etapa1].map(function (items) {
//     if (conteudoAtual == items.conteudo2) {
//       voltarEtapa1 = items.conteudo1;
//       conteudoAtual = voltarEtapa1;

//       return;
//     }
//     if (conteudoAtual == items.exercicio1) {
//       voltarEtapa1 = items.conteudo2;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//     if (conteudoAtual == items.exercicio2) {
//       voltarEtapa1 = items.exercicio1;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//     if (conteudoAtual == items.exercicio3) {
//       voltarEtapa1 = items.exercicio2;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//     if (conteudoAtual == items.exercicio4) {
//       voltarEtapa1 = items.exercicio3;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//     if (conteudoAtual == items.exercicio5) {
//       voltarEtapa1 = items.exercicio4;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//     if (conteudoAtual == items.exercicio6) {
//       voltarEtapa1 = items.exercicio5;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//     if (conteudoAtual == items.exercicio7) {
//       voltarEtapa1 = items.exercicio6;
//       conteudoAtual = voltarEtapa1;
//       return;
//     }
//   });

//   if (voltarEtapa1 == telas.selecaoEtapas) {
//     btnVoltarEtapas(voltarEtapa1, conteudo_etapa1, mainContainer);
//   } else {
//     btnVoltarEtapas(voltarEtapa1, conteudo_etapa1, conteudoEtapa1);
//   }

//   if (conteudoAtual == conteudo_etapa1.exercicio7) {
//     document.getElementById("btn-avancar-context").innerHTML = "Etapa 2";
//   } else {
//     document.getElementById("btn-avancar-context").innerHTML = "Avançar";
//   }

//   if (voltarEtapa1 == conteudo_etapa1.conteudo1) {
//     voltarEtapa1 = telas.selecaoEtapas;
//     //aqui para troca texto no botom de voltar se o usuario esta na tela de etapa1 tela1
//     document.getElementById("btn-voltar-context").innerHTML =
//       "Voltar para Etapas";
//   } else {
//     document.getElementById("btn-voltar-context").innerHTML = "Voltar";
//   }
// }