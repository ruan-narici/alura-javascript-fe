const controleAjuste = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controleAjuste.forEach(acao => {
    acao.addEventListener('click', (evento) => {
        // console.log(evento.target.textContent);
        // console.log(evento.target.parentNode);
        //console.log(evento.target.dataset.controle;)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizarValores(evento.target.dataset.peca, evento.target.dataset.controle);
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

atualizarValores = (peca, operacao) => {

    estatisticas.forEach(elemento => {
        if (operacao === '-') {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }        
    })
}


