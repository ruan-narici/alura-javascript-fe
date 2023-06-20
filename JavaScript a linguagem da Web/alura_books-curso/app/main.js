import metodoForEach from "./metodoForEach.js";
let fe = new metodoForEach();

import metodoMap from "./metodoMap.js";
let mm = new metodoMap();

let livros = [];

async function getLivros() {
    try {
        let arrayLivros = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
        let livrosJson = await arrayLivros.json();
        livros = livrosJson;

        let livrosDesconto = mm.aplicarDesconto(livros);
        console.table(livrosDesconto);

        console.table(livros);

        fe.exibeLivros(livros);
    } catch (erro) {
        console.log(erro)
        console.log('Não foi possível realizar a solicitação.');
    }
}

getLivros();