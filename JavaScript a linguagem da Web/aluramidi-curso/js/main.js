
const teclas = document.querySelectorAll('.tecla');
const sons = document.querySelectorAll('audio');

encapsulamento =  () => {
    function playSom(som) {
        som.play();
    }
    
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener('click', () => {
            playSom(sons[i]);
        })
        teclas[i].addEventListener('keydown', (evento) => {
            if (evento.code === 'Enter' || evento.code === 'Space') {
                teclas[i].classList.add('ativa');
                playSom(sons[i]);
            }
            
        })
        teclas[i].addEventListener('keyup', () => {
            teclas[i].classList.remove('ativa');
        })
    }
}

encapsulamento();
