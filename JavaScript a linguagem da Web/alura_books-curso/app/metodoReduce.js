const divDesconto = document.querySelector('#valor_total_livros_disponiveis');

const metodoReduce = class {

    //Reduce
    defineDesconto = (lista) => {
        let desconto = lista.reduce((acumulador, elemento) => acumulador + elemento.preco, 0);
        this.exibeDesconto(desconto.toFixed(2));
    }

    exibeDesconto = (desconto) => {
        let descontoText = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${desconto}</span></p>
        </div>
        `;
        divDesconto.innerHTML += descontoText;
    }
}

export default metodoReduce;