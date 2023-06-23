import { conectaApi } from "./conectaApi.js";

const fomulario = document.querySelector('[data-formulario');

function criarVideo(evento) {

    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const descricao = Math.floor(Math.random() * 10).toString();   

    conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";

}

fomulario.addEventListener('submit', evento => criarVideo(evento));