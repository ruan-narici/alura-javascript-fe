const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

//Iniciando a captura da webcamm
botaoIniciarCamera.addEventListener('click', async function() {
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({video: true, audio: false});
    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
} )

//Capturando uma imagem e inserindo no canvas. 
//Apos isso,  transformamos a imagem gerada no canvas 
//em uma URL, o que nos possibilitará salvá-la posteriormente. 
botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

//Salvando a imagem no localStorage
botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = '../pages/abrir-conta-form-3.html';
})