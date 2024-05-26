"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleInterest = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
function simpleInterest() {
    console.log("");
    console.log("========== JUROS SIMPLES ==========");
    console.log("");
    const valor = parseFloat(input("Digite o valor do empréstimo ou investimento: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor digite um valor válido.");
        return;
    }
    let taxa = parseFloat(input("Digite a porcentagem da taxa: "));
    if (isNaN(taxa) || taxa <= 0) {
        console.log("Por favor digite um valor válido.");
        return;
    }
    const tempo = parseInt(input("Por último, informe o tempo decorrido em anos: "), 10);
    if (isNaN(tempo) || tempo <= 0) {
        console.log("Por favor digite um valor válido.");
        return;
    }
    console.log("");
    taxa = taxa / 100;
    const juros = valor * taxa * tempo;
    console.log("O valor de juros é de:", juros);
    console.log("");
    console.log("====================================");
}
exports.simpleInterest = simpleInterest;
