"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function soma() {
    console.log("");
    console.log("========== SOMA ==========");
    console.log("");
    let quantidade = numeroValido("Quantos números deseja somar? ", 0);
    console.log();
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
        soma += numeroValido(`Valor ${i + 1}: `);
    }
    console.log();
    console.log(`O resultado da soma é: ${soma}`);
    console.log();
}
exports.soma = soma;
function numeroValido(texto, minimo = Number.MIN_SAFE_INTEGER) {
    let numero;
    while (true) {
        const entrada = prompt(texto);
        if (/^-?\d+(\.\d+)?$/.test(entrada)) {
            numero = parseFloat(entrada);
            if (numero > minimo) {
                break;
            }
        }
        console.log("Por favor, insira um número válido.");
        console.log();
    }
    return numero;
}
