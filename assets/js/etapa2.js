let conteudo_etapa2 = {
    conteudo1Etapa2: "views/etapa2/etapa2_tela1.html",
    conteudo2Etapa2: "views/etapa2/etapa1_tela2.html",
  };

const conteudoEtapa2 = "#conteudo-etapas2";

function conteudoInicialEtapa2() {
    console.log(conteudo_etapa2.conteudo1Etapa2);
    trocaConteudo(conteudo_etapa2.conteudo1Etapa2, conteudoEtapa2);
    setTimeout(CheckDarkmode, 10);
  }