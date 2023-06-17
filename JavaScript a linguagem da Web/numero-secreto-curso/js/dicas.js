ajudaUsuario = (numero) => {
    if (chute > numeroAleatorio) {
        divDica.innerHTML = '';
        let textHelpUser = document.createElement('p');
        let textHelpUser2 = document.createElement('span')
        let iconHelpUser = document.createElement('i');

        textHelpUser.innerHTML = `O número secreto é `;
        textHelpUser2.innerHTML = `menor `
        iconHelpUser.classList.add('fa-solid');
        iconHelpUser.classList.add('fa-arrow-down-long');

        textHelpUser2.appendChild(iconHelpUser);
        textHelpUser.appendChild(textHelpUser2);

        divDica.appendChild(textHelpUser);

    } else {
        divDica.innerHTML = '';
        let textHelpUser = document.createElement('p');
        let textHelpUser2 = document.createElement('span')
        let iconHelpUser = document.createElement('i');

        textHelpUser.innerHTML = `O número secreto é `;
        textHelpUser2.innerHTML = `maior `
        iconHelpUser.classList.add('fa-solid');
        iconHelpUser.classList.add('fa-arrow-up-long');

        textHelpUser2.appendChild(iconHelpUser);
        textHelpUser.appendChild(textHelpUser2);

        divDica.appendChild(textHelpUser);
    }
}