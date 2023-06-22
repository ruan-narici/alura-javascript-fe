const metodoSort = class {

    filtrarPorPreco = (lista) => {
        let filtroPreco = lista.sort((a,b) => a.preco - b.preco);
        return filtroPreco;
    }
}

export default metodoSort;