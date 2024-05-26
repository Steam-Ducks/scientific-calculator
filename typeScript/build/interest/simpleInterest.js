"use strict";

import * as prompt from 'prompt-sync';
const input = prompt();

function simpleInterest() {
    console.log("========== JUROS SIMPLES ==========");
    console.log("");

    const valor = parseFloat(input("Digite o valor do empréstimo ou investimento: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    let taxa = parseFloat(input("Digite a porcentagem da taxa: "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido. ");
    }

    const tempo = parseInt(input("Por último, informe o tempo decorrido em anos: "));
    console.log("");

    taxa = taxa / 100;

    const juros = valor * taxa * tempo;

    console.log("O valor de juros é de: ", juros);
    console.log("");
    console.log("====================================");
}
