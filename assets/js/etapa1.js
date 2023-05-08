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

let voltarEtapa1;
// let conteudoAtual = conteudo_etapa1;
let proxConteudoEtapa1 = null;

async function conteudoInicial() {
  await trocaConteudo(conteudo_etapa1.conteudo1, idConteudoEtapas);
  setTimeout(CheckDarkmode, 10);
}

