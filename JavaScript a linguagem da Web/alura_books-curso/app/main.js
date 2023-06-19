const sectionLivros = document.querySelector('#livros');

let livros = [];

getLivros = async () => {
    try {
        let arrayLivros = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
        let livrosJson = await arrayLivros.json();
        livros = livrosJson;
        console.table(livros);

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
        

    } catch (erro) {
        console.log('Não foi possível realizar a solicitação.');
    }

}

getLivros();