"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisao = void 0;
const prompt = require('prompt-sync')();
function divisao() {
    console.log("");
    console.log("========== DIVISÃO ==========");
    console.log("");
    let quantidade = 0;
    do {
        quantidade = parseInt(prompt("Quantos números deseja dividir? "));
        if (isNaN(quantidade) || quantidade <= 1) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (isNaN(quantidade) || quantidade <= 1);
    let divisao = 0;
    do {
        divisao = parseFloat(prompt(`Valor: `));
        if (isNaN(divisao)) {
            console.log("Por favor, insira um número válido.");
            console.log("");
        }
    } while (isNaN(divisao));
    for (let i = 1; i < quantidade; i++) {
        const numero = parseFloat(prompt(`Valor: `));
        if (isNaN(numero) || numero <= 0) {
            console.log("Não é posspivel dividir por 0");
            console.log("Por favor, insira um número válido.");
            console.log("");
            i--;
            continue;
        }
        divisao /= numero;
    }
    console.log();
    console.log(`O resultado da divisao é: ${divisao}`);
    console.log();
}
exports.divisao = divisao;
