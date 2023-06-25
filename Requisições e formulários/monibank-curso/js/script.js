import ehUmCpf from "./validaCpf.js";

const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        verificaCampo(campo);
    });
})


function verificaCampo(campo) {
    ehUmCpf(campo);
}