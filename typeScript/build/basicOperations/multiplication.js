"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function multiplicar(a, b) {
    return a * b;
}
function obterNumero(mensagem) {
    const input = prompt(mensagem);
    const numero = Number(input);
    if (isNaN(numero)) {
        throw new Error("Entrada inválida! Por favor, insira um número.");
    }
    return numero;
}
function calculadora() {
    let continuar = true;
    while (continuar) {
        try {
            const num1 = obterNumero("Insira o primeiro número: ");
            const num2 = obterNumero("Insira o segundo número: ");
            const resultado = multiplicar(num1, num2);
            console.log(`A multiplicação de ${num1} e ${num2} é: ${resultado}`);
            const resposta = prompt("Quer continuar? Sim ou Não: ").toLowerCase();
            if (resposta === "não" || resposta === "nao" || resposta === "n") {
                continuar = false;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
calculadora();
