const controleAjuste = document.querySelectorAll('[data-controle]');
;

controleAjuste.forEach(acao => {
    acao.addEventListener('click', (evento) => {
        // console.log(evento.target.textContent);
        // console.log(evento.target.parentNode);
        //console.log(evento.target.dataset.controle;)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})

manipulaDados = (operacao, controle) => {
    const controleContador = controle.querySelector('[data-contador]')
    if (operacao === '-') {
        controleContador.value = parseInt(controleContador.value) -1;
    } else {
        controleContador.value = parseInt(controleContador.value) +1;
    }
}