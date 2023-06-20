const metodoFilter = class {

    filtrarPorCategoria = (lista, categoria) => {
        let listaCategoria = lista.filter(elemento => elemento.categoria == categoria);
        return listaCategoria;
    }

    
}

export default metodoFilter;