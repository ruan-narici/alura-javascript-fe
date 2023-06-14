const form = document.querySelector('#novoItem');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let nome = evento.target.elements['nome'].value;
    let quantidade = evento.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);
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