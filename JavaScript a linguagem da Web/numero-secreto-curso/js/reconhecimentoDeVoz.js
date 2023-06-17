let chute = null;

var SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener('result', (event) => {
    chute = event.results[0][0].transcript;
    exibeChute(chute);
    eUmNumero(chute);
    verificaAcerto(chute);
})

recognition.addEventListener('end', () => recognition.start());

exibeChute = (parametro) => {
    numeroInformado.innerHTML = parametro;
    divExibicao.classList.remove('esconde');
}
