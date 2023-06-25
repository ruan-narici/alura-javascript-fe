export default function ehMaiorDeIdade(campo) {
    let dataAniversario = new Date(campo.value);
    verificaIdade(dataAniversario);
    
}

function verificaIdade(data) {
    let dataAtual = new Date();
    let dataMaiorIdade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    console.log("Fez 18 na data: " + dataMaiorIdade);
    return dataAtual >= dataMaiorIdade;
}
