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
    console.log("═════════════════════════════════════");
    console.log("                 SOMA                ");
    console.log("");
    let quantidade = numeroValido("Quantos números deseja somar? ", 1, false);
    let soma = 0;
    let valor = 0;
    for (let i = 0; i < quantidade; i++) {
        console.log();
        if (soma === 0) {
            valor = numeroValido("Valor: ");
        }
        else {
            let somaAtual = Number.isInteger(soma) ? soma.toFixed(0) : soma.toFixed(2);
            console.log("Valor: ");
            valor = numeroValido(`${somaAtual} + `);
        }
        soma += valor;
    }
    let somaFinal = Number.isInteger(soma) ? soma.toFixed(0) : soma.toFixed(2);
    console.log();
    console.log(`O resultado da soma é: ${somaFinal}`);
    console.log("═════════════════════════════════════");
}
exports.soma = soma;
function numeroValido(texto, minimo = Number.MIN_SAFE_INTEGER, decimal = true) {
    let numero;
    let regex;
    decimal ? regex = /^-?\d+(\.\d+)?$/ : regex = /^-?\d+$/;
    while (true) {
        const entrada = prompt(texto);
        if (regex.test(entrada)) {
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
