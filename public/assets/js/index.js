// let home = origin + '/public/index.html';

if (localStorage.getItem('pagina-atual') !== null) {
    let paginaAtual = localStorage.getItem('pagina-atual');
    location.replace(paginaAtual);

    console.log(localStorage.getItem('conteudoAtual') !== null)

}