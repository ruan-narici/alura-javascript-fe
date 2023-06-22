const metodoFilter = class {

    filtrarPorCategoria = (lista, categoria) => {
        let listaCategoria = lista.filter(elemento => elemento.categoria == categoria);
        return listaCategoria;
    }

    filtrarPorDisponibilidade = (lista) => {
        let listaDisponibilidade = lista.filter(elemento => elemento.quantidade > 0);
        return listaDisponibilidade;
    }

    
}

export default metodoFilter;