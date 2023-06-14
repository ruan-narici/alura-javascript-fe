const form = document.querySelector('#novoItem');
let listaItens = JSON.parse(localStorage.getItem("itens")) || [];

form.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);
    salvarLocalStorage(nome, quantidade);
    limpaInput(evento);
})

criarElemento = (nome, quantidade) => {

    const elementoLi = document.createElement('li');
    elementoLi.classList.add('item');
    const elementoStrong = document.createElement('strong');
    elementoStrong.textContent = quantidade;
    elementoLi.appendChild(elementoStrong);
    elementoLi.innerHTML += nome;
    const lista = document.querySelector('[data-lista]');
    lista.appendChild(elementoLi);
}

salvarLocalStorage = (nome, quantidade) => {

    item = {
        nome: nome,
        quantidade: quantidade
    }

    listaItens.push(item);

    listaItensJson = JSON.stringify(listaItens);
    localStorage.setItem("itens", listaItensJson);
}

carregarListaLocalStorage = (lista) => {

    lista.forEach(item => {
        let nome = item.nome;
        let quantidade = item.quantidade;

        criarElemento(nome, quantidade);
    })
}

limpaInput = (evento) => {
    
    evento.target.elements['nome'].value = '';
    evento.target.elements['quantidade'].value = '';
}

carregarListaLocalStorage(listaItens);
