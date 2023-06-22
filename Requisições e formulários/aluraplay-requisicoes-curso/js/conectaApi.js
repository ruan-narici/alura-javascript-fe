const url = `http://localhost:3000/videos`;

async function capturarApi() {
    const dadosApi = await fetch(url);
    let dadosApiJson = await dadosApi.json();
    return dadosApiJson;
}

export const conectaApi = {
    capturarApi
}

