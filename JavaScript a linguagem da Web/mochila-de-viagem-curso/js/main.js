const form = document.querySelector('#novoItem');
let listaItens = JSON.parse(localStorage.getItem("itens")) || [];

let id = listaItens.length;

form.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;
    id ++; 

    if (editarElemento(listaItens, nome, quantidade)) {
        limpaInput(evento);
        alert('Atualizado!');
    } else {
        criarElemento(nome, quantidade);
        salvarLocalStorage(nome, quantidade, id);
        limpaInput(evento);
    }
    
})

criarElemento = (nome, quantidade) => {

    const elementoLi = document.createElement('li');
    elementoLi.classList.add('item');
    const elementoStrong = document.createElement('strong');
    elementoStrong.textContent = quantidade;
    elementoLi.appendChild(elementoStrong);
    elementoLi.innerHTML += nome;
    elementoLi.appendChild(btnExcluir(nome));
    const lista = document.querySelector('[data-lista]');
    lista.appendChild(elementoLi);
}

salvarLocalStorage = (nome, quantidade, id) => {

    item = {
        id: id,
        nome: nome,
        quantidade: quantidade
    }

    listaItens.push(item);

    listaItensJson = JSON.stringify(listaItens);
    localStorage.setItem("itens", listaItensJson);
}

editarLocalStorage = () => {
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

editarElemento = (itens, nome, quantidade) => {

    let findItem = itens.find(i => i.nome === nome);
    if (findItem) {
        findItem.nome = nome;
        findItem.quantidade = quantidade;
        editarLocalStorage();
        location.reload();
        return true;
    } else {
        return false;
    }
} 

btnExcluir = (nome) => {
    const btn = document.createElement('button');
    btn.textContent = "x";

    btn.addEventListener('click', (evento) => {
        let liEvento = evento.target.parentNode;
        let index = listaItens.findIndex(item => item.nome === nome);
        listaItens.splice(index, 1);
        liEvento.remove();
        console.log(index);
        editarLocalStorage();
    })

    return btn;

}

carregarListaLocalStorage(listaItens);
