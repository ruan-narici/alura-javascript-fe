const metodoMap = class {

    aplicarDesconto = (livros) => {
        let desconto = 0.3;

        let arrayLivroDesconto = livros.map(livro => {
            return {
                ...livro, 
                preco: (livro.preco - (livro.preco * desconto))
            }
        })

        return arrayLivroDesconto;
    }

}

export default metodoMap;