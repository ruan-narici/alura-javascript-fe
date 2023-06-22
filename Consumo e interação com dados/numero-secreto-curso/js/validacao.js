eUmNumero = (numero) => {
    
    let valor = numero * 2;
    if (Number.isNaN(valor)) {
        divDica.innerHTML = '';
        let textNumberInvalid = document.createElement('p');
        textNumberInvalid.innerHTML = `Valor inválido! Você precisa informar um número válido.`;
        divDica.appendChild(textNumberInvalid);
    } else if (chute < numeroMin || chute > numeroMax) {
        divDica.innerHTML = '';
        let textNumberInvalid = document.createElement('p');
        textNumberInvalid.innerHTML = `Valor inválido! O número precisa está entre ${numeroMin} e ${numeroMax}`;
        divDica.appendChild(textNumberInvalid);
    } else {
        ajudaUsuario(chute);
    }
}

verificaAcerto = (numero) => {
    if (numero == numeroAleatorio) {
        main.innerHTML = '';
        let divTitulo = document.createElement('div');
        let titulo = document.createElement('h1');
        let paragrafo = document.createElement('p');
        let exibeNumero = document.createElement('h3');

        titulo.innerHTML = 'Parabéns! Você acertou!';
        paragrafo.innerHTML = `O número secreto é `;
        exibeNumero.innerHTML = numeroAleatorio;

        divTitulo.classList.add('divTitle');
        exibeNumero.classList.add('numeroInformado');

        divTitulo.appendChild(titulo);
        divTitulo.appendChild(paragrafo);
        divTitulo.appendChild(exibeNumero);
        main.appendChild(divTitulo);
    }
}