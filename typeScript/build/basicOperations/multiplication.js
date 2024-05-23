"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicacao = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function multiplicacao() {
    console.log();
    console.log("========== Função Multiplicação ==========");
    console.log();
    console.log("Insira os valores, e eles serão automaticamente multiplicados.");
    console.log();
    console.log("=============================================================");
    console.log();
    let valorAcumulado = 1.0;
    const quantidade = parseInt(prompt("Quantos números deseja multiplicar? "), 10);
    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Por favor, insira um número válido de quantidades.");
        return;
    }
    for (let i = 0; i < quantidade; i++) {
        let valorString = prompt(`Valor ${i + 1}: `);
        let valor = parseFloat(valorString);
        if (isNaN(valor)) {
            console.log("Por favor, insira um número válido.");
            i--;
            continue;
        }
        valorAcumulado *= valor;
        console.log(`Resultado parcial: ${valorAcumulado}`);
        console.log();
    }
    console.log();
    console.log(`O Resultado da multiplicação é: ${valorAcumulado}`);
    console.log("=============================================================");
    console.log();
}
exports.multiplicacao = multiplicacao;
