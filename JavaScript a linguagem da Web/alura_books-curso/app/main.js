import metodoForEach from "./metodoForEach.js";
let fe = new metodoForEach();

import metodoMap from "./metodoMap.js";
let mm = new metodoMap();

import metodoFilter from "./metodoFilter.js";
let mf = new metodoFilter();

import metodoSort from "./metodoSort.js";
let ms = new metodoSort();


const btnPreco = document.querySelector('#btnOrdenarPorPreco');
const botoes = document.querySelectorAll('.btn');
let livros = [];

async function getLivros() {
    try {
        let arrayLivros = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
        let livrosJson = await arrayLivros.json();
        livros = livrosJson;

        let livrosDesconto = mm.aplicarDesconto(livros);
        //console.table(livrosDesconto);

        //console.table(livros);

        fe.exibeLivros(livrosDesconto);
        filtraCategoria(livrosDesconto);
        filtraPreco(livrosDesconto);

    } catch (erro) {
        console.log(erro)
        console.log('Não foi possível realizar a solicitação.');
    }
}

function filtraCategoria(lista) {
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            let listaCategoria = botao.value == 'disponivel' ? mf.filtrarPorDisponibilidade(lista) : mf.filtrarPorCategoria(lista, botao.value);
            // console.table(listaCategoria);
            fe.exibeLivros(listaCategoria);
        })
    })
}

function filtraPreco(lista) {
    btnPreco.addEventListener('click', () => {
        let listaPreco = ms.filtrarPorPreco(lista);
        fe.exibeLivros(listaPreco);
    });
}


getLivros();
