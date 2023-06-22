const inputCep = document.querySelector('#cep');
const inputEndereco = document.querySelector('#endereco');
const inputNumero = document.querySelector('#numero');
const inputComplemento = document.querySelector('#complemento');
const inputBairro = document.querySelector('#bairro');
const inputCidade = document.querySelector('#cidade');
const inputEstado = document.querySelector('#estado');

async function getJsonCep(cep) {
    const divErroCep = document.querySelector('#erroCep');
    divErroCep.innerHTML = '';
    try {
        let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let jsonCep = await response.json();

        inputEndereco.value = jsonCep.logradouro;
        inputComplemento.value = jsonCep.complemento;
        inputBairro.value = jsonCep.bairro;
        inputCidade.value = jsonCep.localidade;
        inputEstado.value = jsonCep.uf;

        console.log(jsonCep);
    } catch(erro) {
        divErroCep.innerHTML = '<p style="color: red;">CEP INVÁLIDO!</p>'
        console.log(erro)
    }

}

inputCep.addEventListener('focusout', () => {
    getJsonCep(inputCep.value);
})
