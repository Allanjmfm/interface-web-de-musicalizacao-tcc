let home = origin + '/public/index.html';
console.log(window.location.href = home);
console.log(window.location.href = origin);


setTimeout(() => {
    if (localStorage.getItem('pagina-atual') !== null) {
        let conteudoLink = localStorage.getItem('pagina-atual');
        if (window.location.href !== localStorage.getItem('pagina-atual')) {
            if (window.location.href != origin || window.location.href != home) {
                location.replace(conteudoLink);
            }
        }
    }
}, 10000);