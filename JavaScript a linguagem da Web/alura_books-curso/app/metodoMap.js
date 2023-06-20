const metodoMap = class {

    aplicarDesconto = (livros) => {
        let desconto = 0.3;

        let arrayLivroDesconto = livros.map(livro => {
            return {
                ...livro, 
                preco: (livro.preco - (livro.preco * desconto)).toFixed(2)
            }
        })

        return arrayLivroDesconto;
    }

}

export default metodoMap;