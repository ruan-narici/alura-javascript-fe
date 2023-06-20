const sectionLivros = document.querySelector('#livros');

const metodoForEach = class {
    

    exibeLivros = (livros) => {

        livros.forEach(livro => {
            sectionLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${((livro.preco).toFixed(2)).replace('.', ',')}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
        })
    }
}


export default metodoForEach;