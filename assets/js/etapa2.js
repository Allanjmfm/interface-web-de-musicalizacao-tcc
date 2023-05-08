let conteudo_etapa2 = {
    // conteudo1Etapa2: "views/etapa2/etapa2_tela1.html",
    // conteudo2Etapa2: "views/etapa2/etapa1_tela2.html",
    etapa2Conteudo1: "views/etapa2/etapa2_tela1.html",
    etapa2Conteudo2: "views/etapa2/etapa2_tela2.html",
    etapa2Conteudo3: "views/etapa2/etapa2_tela3.html",
    etapa2Conteudo4: "views/etapa2/etapa2_tela4.html",
    etapa2Conteudo5: "views/etapa2/etapa2_tela5.html",
  };

// const conteudoEtapa2 = "#conteudo-etapas2";

async function conteudoInicialEtapa2() {
    //IDs idConteudoEtapas vai ser para todos estapas
    await trocaConteudo(conteudo_etapa2.etapa2Conteudo1, idConteudoEtapas);
    setTimeout(CheckDarkmode, 10);
  }