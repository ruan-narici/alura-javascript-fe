import { conectaApi } from "./conectaApi.js";
import { mostrarVideo } from "./mostrarVideo.js";

const btnPesquisa = document.querySelector('[data-botao-pesquisa]');
const divLista = document.querySelector('[data-lista]');

async function buscarVideoPorFiltro(evento) {
    
    evento.preventDefault();
    const inputPesquisa = document.querySelector('[data-pesquisa]').value;
    const conexao = await conectaApi.capturarApi(inputPesquisa);

    while (divLista.firstChild) {
        divLista.removeChild(divLista.firstChild);
    }

    conexao.forEach(elemento => {
        divLista.appendChild(mostrarVideo.constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    });

    console.log(conexao);
}

btnPesquisa.addEventListener('click', evento => buscarVideoPorFiltro(evento));