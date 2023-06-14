const form = document.querySelector('#novoItem');
let listaItens = [];

form.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);
    salvarLocalStorage(nome, quantidade);
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