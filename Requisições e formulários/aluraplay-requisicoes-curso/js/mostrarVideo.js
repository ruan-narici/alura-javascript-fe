import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista');

function constroiCard(titulo, descricao, url, imagem) {
    let video = document.createElement('li');
    video.className = 'video__item';
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
        </iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
    return video;
}

async function listaVideo() {
    let listaAPI = await conectaApi.capturarApi();
    listaAPI.forEach(elemento => {
        lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        );
    })
}

listaVideo();