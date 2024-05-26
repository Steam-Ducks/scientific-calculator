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
    console.log("========== ADIÇÃO ==========");
    console.log("");
    const quantidade = parseInt(prompt("Quantos números deseja somar? "));
    console.log();
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
        soma += numero;
    }
    console.log();
    console.log(`O resultado da soma é: ${soma}`);
    console.log();
}
exports.soma = soma;
