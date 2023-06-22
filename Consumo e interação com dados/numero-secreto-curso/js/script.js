const spanNumeroMenor = document.querySelector('#numeroMenor')
const spanNumeroMaior = document.querySelector('#numeroMaior')
const divExibicao = document.querySelector('#divExibicao');
const numeroInformado = document.querySelector('#numeroInformado');
const divDica = document.querySelector('#divDica');
const main = document.querySelector('#main');

let numeroMin = 0;
let numeroMax = 10;
let numeroAleatorio = null;


geraNumeroAleatorio = (min,max) => {
    spanNumeroMenor.innerHTML = min;
    spanNumeroMaior.innerHTML = max
    numeroAleatorio =  Math.round(Math.random() * (max - min) + min);
    numeroInformado.innerHTML = numeroAleatorio;
    return numeroAleatorio;
}

geraNumeroAleatorio(numeroMin, numeroMax);

console.log(numeroAleatorio);
