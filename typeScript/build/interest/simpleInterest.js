"use strict";

import * as prompt from 'prompt-sync';
const input = prompt();

console.log("========== JUROS SIMPLES ==========");
console.log("");

let valor = parseFloat(input("Digite o valor do empréstimo ou investimento: "));
let taxa = parseFloat(input("Digite a porcentagem da taxa: "));
let tempo = parseInt(input("Por último, informe o tempo decorrido em anos: "));
console.log("");

taxa = taxa / 100;

let juros = valor * taxa * tempo;

console.log("O valor de juros é de: ",juros);
console.log("");
console.log("====================================");
