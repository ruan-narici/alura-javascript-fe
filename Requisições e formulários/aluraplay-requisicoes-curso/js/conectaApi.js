const urlConexao = `http://localhost:3000/videos`;

async function capturarApi() {
    const dadosApi = await fetch(urlConexao);
    let dadosApiJson = await dadosApi.json();
    return dadosApiJson;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const dadosApi = await fetch(urlConexao, {
        //Definindo que vai ser um POST
        method: "POST",
        //Definindo o tipo de requisição como JSON
        headers: {
            "Content-type": "application/json"
        },
        //Enviando os dados via json no corpo da requisição
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    });

    const dadosApiJson = await dadosApi.json();
    console.log(dadosApiJson);
    return dadosApiJson;

}

//Exportando os metodos
export const conectaApi = {
    capturarApi,
    criaVideo
}
